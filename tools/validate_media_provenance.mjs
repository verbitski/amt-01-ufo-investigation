#!/usr/bin/env node

import { createHash } from "node:crypto";
import { readFile, readdir, stat } from "node:fs/promises";
import { dirname, resolve, relative, sep } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const manifestPath = resolve(projectRoot, "site/assets/provenance.json");
const publicAssetDir = resolve(projectRoot, "site/assets");

function fail(message) {
  console.error(`Media provenance validation failed: ${message}`);
  process.exit(1);
}

function assert(condition, message) {
  if (!condition) fail(message);
}

function safeProjectPath(path) {
  const resolved = resolve(projectRoot, path);
  const rel = relative(projectRoot, resolved);
  assert(rel !== "" && rel !== ".." && !rel.startsWith(`..${sep}`), `path escapes project root: ${path}`);
  return resolved;
}

async function digest(path) {
  const bytes = await readFile(path);
  return {
    byteSize: bytes.length,
    sha256: createHash("sha256").update(bytes).digest("hex")
  };
}

const manifest = JSON.parse(await readFile(manifestPath, "utf8"));
assert(manifest.manifest_version === "1.0.0", "unexpected manifest version");
assert(manifest.disclosure?.canonical_phrase === "RECONSTRUCTION / NOT EVENT MEDIA", "canonical disclosure changed");
assert(manifest.disclosure?.embedded_in_every_public_asset === true, "manifest does not require an embedded disclosure");
assert(Array.isArray(manifest.families) && manifest.families.length === 6, "expected six public media families");

const label = manifest.build?.label_raster;
assert(label?.path && label?.sha256, "missing label-raster provenance");
const labelDigest = await digest(safeProjectPath(label.path));
assert(labelDigest.sha256 === label.sha256, `label hash mismatch: ${label.path}`);
assert(labelDigest.byteSize === label.byte_size, `label byte-size mismatch: ${label.path}`);

const publicRecords = [];
const ids = new Set();
const paths = new Set();

for (const family of manifest.families) {
  assert(family.family_id, "family without an ID");
  assert(family.source_master?.distribution_status === "private_not_distributed", `${family.family_id} source is not marked private`);
  assert(/^[a-f0-9]{64}$/.test(family.source_master?.sha256 ?? ""), `${family.family_id} has an invalid private-source hash`);
  assert(family.public_master, `${family.family_id} has no public master`);
  assert(family.public_master.evidentiary_role === "reconstruction", `${family.family_id} public master is not marked reconstruction`);
  publicRecords.push(family.public_master, ...(family.responsive_derivatives ?? []));
}

for (const record of publicRecords) {
  assert(record.asset_id, "public asset without an ID");
  assert(record.path, `${record.asset_id} has no path`);
  assert(!ids.has(record.asset_id), `duplicate asset ID: ${record.asset_id}`);
  assert(!paths.has(record.path), `duplicate public path: ${record.path}`);
  ids.add(record.asset_id);
  paths.add(record.path);
  assert(record.disclosure_embedded === true, `${record.asset_id} is not marked disclosure-baked`);
  assert(record.path.startsWith("site/assets/"), `${record.asset_id} is outside the public asset directory`);
  assert(/^[a-f0-9]{64}$/.test(record.sha256 ?? ""), `${record.asset_id} has an invalid SHA-256`);

  const filePath = safeProjectPath(record.path);
  const fileStat = await stat(filePath).catch(() => null);
  assert(fileStat?.isFile(), `missing public asset: ${record.path}`);
  const fileDigest = await digest(filePath);
  assert(fileDigest.sha256 === record.sha256, `hash mismatch: ${record.path}`);
  assert(fileDigest.byteSize === record.byte_size, `byte-size mismatch: ${record.path}`);
}

const imageFiles = (await readdir(publicAssetDir))
  .filter((name) => /\.(?:png|jpe?g)$/i.test(name))
  .map((name) => `site/assets/${name}`)
  .sort();
const recordedFiles = [...paths].sort();
assert(JSON.stringify(imageFiles) === JSON.stringify(recordedFiles), "public image inventory differs from provenance manifest");
const expectedPublicAssetCount = manifest.families.reduce(
  (count, family) => count + 1 + (family.responsive_derivatives?.length ?? 0),
  0
);
assert(publicRecords.length === expectedPublicAssetCount, `expected ${expectedPublicAssetCount} public assets; found ${publicRecords.length}`);

console.log(`Media provenance validation passed: ${manifest.families.length} families, ${publicRecords.length} public assets.`);
