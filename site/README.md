# Website setup

The public website is [amt01.vercel.app](https://amt01.vercel.app/). It uses plain HTML, CSS, and JavaScript, with no build step.

## Preview locally

From the repository root:

```bash
python3 -m http.server 4173 --directory site
```

Open [localhost:4173](http://localhost:4173).

## Vercel settings

- Root Directory: `site`
- Framework Preset: `Other`
- Build Command: leave blank
- Output Directory: `.`
- Production branch: `main`

[vercel.json](vercel.json) sets clean URLs and browser security headers. Keeping `site` as the root prevents research documents from being served as website paths.

## Links and media

[site-config.js](site-config.js) controls the availability of the repository, Discord, and private witness form. Add only reviewed public HTTPS URLs. Disabled routes show an unavailable message.

Public images and responsive versions are listed in [the provenance manifest](assets/provenance.json). Preserve their embedded reconstruction disclosures and update provenance for any asset change.

## Verify a change

Run the [repository validation commands](../CONTRIBUTING.md#validation), then inspect desktop and mobile layouts, keyboard navigation, image loading and navigation, reduced-motion behavior, and all affected links. Use [the contribution guide](../CONTRIBUTING.md#validation) for the complete checks.
