#!/bin/sh

set -eu

PROJECT_ROOT=$(CDPATH= cd -- "$(dirname "$0")/.." && pwd)
FFMPEG_BIN=${FFMPEG_BIN:-ffmpeg}
FFPROBE_BIN=${FFPROBE_BIN:-ffprobe}
SOURCE_DIR="$PROJECT_ROOT/internal/media-masters/unlabeled-active"
PUBLIC_DIR="$PROJECT_ROOT/site/assets"
LABEL="$PROJECT_ROOT/tools/media/reconstruction-label.png"

EXPECTED_FFMPEG_VERSION="8.0.1"
LABEL_WIDTH=360
LABEL_HEIGHT=112
MASTER_MARGIN=24
DELIVERY_LABEL_SSIM_MINIMUM=0.98

version_line=$($FFMPEG_BIN -version | sed -n '1p')
case "$version_line" in
  "ffmpeg version $EXPECTED_FFMPEG_VERSION"*) ;;
  *)
    printf 'Expected FFmpeg %s; found: %s\n' "$EXPECTED_FFMPEG_VERSION" "$version_line" >&2
    exit 1
    ;;
esac

if [ ! -f "$LABEL" ]; then
  printf 'Missing disclosure raster: %s\n' "$LABEL" >&2
  exit 1
fi

label_dims=$($FFPROBE_BIN -v error -select_streams v:0 -show_entries stream=width,height -of csv=p=0:s=x "$LABEL")
if [ "$label_dims" != "${LABEL_WIDTH}x${LABEL_HEIGHT}" ]; then
  printf 'Expected a %sx%s disclosure raster; found %s\n' "$LABEL_WIDTH" "$LABEL_HEIGHT" "$label_dims" >&2
  exit 1
fi

build_master() {
  name=$1
  source="$SOURCE_DIR/$name"
  output="$PUBLIC_DIR/$name"

  if [ ! -f "$source" ]; then
    printf 'Missing private source master: %s\n' "$source" >&2
    exit 1
  fi

  $FFMPEG_BIN -v error -y \
    -i "$source" \
    -i "$LABEL" \
    -filter_complex "[0:v]format=rgba[base];[1:v]format=rgba[label];[base][label]overlay=W-w-$MASTER_MARGIN:H-h-$MASTER_MARGIN:format=auto,format=rgba[out]" \
    -map '[out]' \
    -frames:v 1 \
    -compression_level 9 \
    -pred mixed \
    "$output"
}

build_delivery() {
  family=$1
  width=$2
  label_width=$3
  margin=$4
  source="$PUBLIC_DIR/$family.png"
  output="$PUBLIC_DIR/$family-$width.jpg"

  $FFMPEG_BIN -v error -y \
    -i "$source" \
    -i "$LABEL" \
    -filter_complex "[0:v]scale=$width:-2:flags=lanczos[base];[1:v]scale=$label_width:-1:flags=lanczos[label];[base][label]overlay=W-w-$margin:H-h-$margin:format=auto,format=yuvj444p[out]" \
    -map '[out]' \
    -frames:v 1 \
    -q:v 3 \
    "$output"
}

verify_delivery() {
  family=$1
  expected_width=$2
  label_width=$3
  margin=$4
  output="$PUBLIC_DIR/$family-$expected_width.jpg"
  dims=$($FFPROBE_BIN -v error -select_streams v:0 -show_entries stream=width,height -of csv=p=0:s=x "$output")
  width=${dims%x*}
  height=${dims#*x}
  label_height=$(((LABEL_HEIGHT * label_width + LABEL_WIDTH / 2) / LABEL_WIDTH))
  label_x=$((width - label_width - margin))
  label_y=$((height - label_height - margin))

  if [ "$width" -ne "$expected_width" ] || [ $((height % 2)) -ne 0 ]; then
    printf 'Unexpected delivery dimensions for %s: %s\n' "$output" "$dims" >&2
    exit 1
  fi

  if [ "$label_x" -lt 0 ] || [ "$label_y" -lt 0 ]; then
    printf 'Disclosure rectangle falls outside %s\n' "$output" >&2
    exit 1
  fi

  label_ssim=$(
    $FFMPEG_BIN -hide_banner \
      -i "$output" \
      -i "$LABEL" \
      -filter_complex "[0:v]crop=$label_width:$label_height:$label_x:$label_y,format=yuv444p[delivery];[1:v]scale=$label_width:$label_height:flags=lanczos,format=yuv444p[label];[delivery][label]ssim" \
      -frames:v 1 \
      -f null - 2>&1 \
      | sed -n 's/.*All:\([0-9.]*\).*/\1/p' \
      | tail -n 1
  )

  if [ -z "$label_ssim" ] || ! awk -v observed="$label_ssim" -v minimum="$DELIVERY_LABEL_SSIM_MINIMUM" 'BEGIN { exit !(observed + 0 >= minimum + 0) }'; then
    printf 'Disclosure verification failed for %s (SSIM %s; required %s)\n' "$output" "${label_ssim:-unavailable}" "$DELIVERY_LABEL_SSIM_MINIMUM" >&2
    exit 1
  fi

  printf 'Verified responsive disclosure (SSIM %s): %s\n' "$label_ssim" "$output"
}

raw_crop_hash() {
  file=$1
  crop=$2
  $FFMPEG_BIN -v error -i "$file" -vf "crop=$crop,format=rgba" -f rawvideo - | shasum -a 256 | cut -d ' ' -f1
}

verify_master() {
  name=$1
  source="$SOURCE_DIR/$name"
  output="$PUBLIC_DIR/$name"
  dims=$($FFPROBE_BIN -v error -select_streams v:0 -show_entries stream=width,height -of csv=p=0:s=x "$output")
  width=${dims%x*}
  height=${dims#*x}
  label_x=$((width - LABEL_WIDTH - MASTER_MARGIN))
  label_y=$((height - LABEL_HEIGHT - MASTER_MARGIN))
  bottom_y=$((height - MASTER_MARGIN))
  right_x=$((width - MASTER_MARGIN))

  for crop in \
    "$width:$label_y:0:0" \
    "$label_x:$LABEL_HEIGHT:0:$label_y" \
    "$MASTER_MARGIN:$LABEL_HEIGHT:$right_x:$label_y" \
    "$width:$MASTER_MARGIN:0:$bottom_y"
  do
    source_hash=$(raw_crop_hash "$source" "$crop")
    output_hash=$(raw_crop_hash "$output" "$crop")
    if [ "$source_hash" != "$output_hash" ]; then
      printf 'Pixel verification failed outside disclosure rectangle for %s (%s)\n' "$name" "$crop" >&2
      exit 1
    fi
  done

  printf 'Verified unchanged pixels outside disclosure rectangle: %s\n' "$name"
}

build_master amt01-reconstruction-hero-v2.png
build_master amt01-underside-sketch-public-v2.png
build_master amt01-reconstruction-appearance-v1.png
build_master amt01-reconstruction-observation-point-v1.png
build_master amt01-reconstruction-additional-view-v1.png
build_master amt01-reconstruction-distant-view-v2.png

for family in \
  amt01-reconstruction-hero-v2 \
  amt01-underside-sketch-public-v2 \
  amt01-reconstruction-appearance-v1 \
  amt01-reconstruction-observation-point-v1 \
  amt01-reconstruction-additional-view-v1 \
  amt01-reconstruction-distant-view-v2
do
  build_delivery "$family" 640 200 12
  build_delivery "$family" 960 260 16
  build_delivery "$family" 1440 340 20
done

for family in \
  amt01-reconstruction-hero-v2 \
  amt01-underside-sketch-public-v2 \
  amt01-reconstruction-appearance-v1 \
  amt01-reconstruction-observation-point-v1 \
  amt01-reconstruction-additional-view-v1 \
  amt01-reconstruction-distant-view-v2
do
  verify_delivery "$family" 640 200 12
  verify_delivery "$family" 960 260 16
  verify_delivery "$family" 1440 340 20
done

verify_master amt01-reconstruction-hero-v2.png
verify_master amt01-underside-sketch-public-v2.png
verify_master amt01-reconstruction-appearance-v1.png
verify_master amt01-reconstruction-observation-point-v1.png
verify_master amt01-reconstruction-additional-view-v1.png
verify_master amt01-reconstruction-distant-view-v2.png

printf 'Built six labeled publication masters and eighteen responsive derivatives.\n'
