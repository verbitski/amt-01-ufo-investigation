# AMT-01: An Open Investigation

**Project website:** https://amt01.vercel.app/

**Research repository:** https://github.com/verbitski/amt-01-open-investigation

AMT-01 is a witness-led research project built around one unresolved observation near the Antalya coast in summer 2004.

I use **UFO** in its literal sense: I have not identified what I saw. The term does not claim extraterrestrial origin, extraordinary technology, or any particular explanation.

The purpose is not to declare what the object was. The purpose is to preserve what I remember, separate memory from later estimates and calculations, compare possible explanations under the same rules, and leave an auditable record that other people and future analytical systems can examine.

## Evidence boundary

This project begins with a single retrospective witness record.

- No known photograph or video of the event is available to the project.
- No sensor measurement of the event is available to the project.
- No independent witness record is currently available to the project.
- The exact day, month, site, geometry, distance, altitude, speed, and dimensions were not instrumentally established.
- Every website image is a later reconstruction, not event media.

The record can support structured questions and conditional analysis. It cannot by itself establish the object's identity, origin, construction, or physical mechanism.

## What I remember

I recall a dark, matte, elongated triangular form moving slowly past at close range. Its flat-looking underside carried several sharply bounded irregular regions that appeared completely black to me, without visible internal reflection. I remember no obvious sound, exhaust, glow, downwash, or visible means of propulsion.

The current retrospective estimates are:

- event period: summer 2004, with the exact day and month unknown;
- time in view: roughly 12 to 15 seconds;
- closest lateral distance from the object's path: roughly 15 to 20 metres;
- height above the local ground or water: roughly 4 to 5 metres;
- object dimensions: roughly 6 to 8 metres long and 2.5 to 3 metres wide at the rear;
- completely black underside regions: roughly 5 to 7, with exact topology uncertain.

These are remembered or later estimated values, not measurements. Earlier records containing an unknown year, a 10 to 15 metre proximity estimate, or a 5 to 10 region estimate remain traceable through the correction history.

## Start here

1. [Case summary](docs/01-case-amt01/00-case-summary.md)
2. [Full witness record](docs/01-case-amt01/01-full-observation-record.md)
3. [Uncertainty register](docs/01-case-amt01/03-uncertainty-register.md)
4. [Memory and correction timeline](docs/01-case-amt01/04-memory-and-correction-timeline.md)
5. [Claim ledger](docs/00-foundation/02-claim-ledger.md)
6. [Hypothesis registry](docs/03-hypotheses/00-hypothesis-registry.md)
7. [Decision log](docs/07-reference/02-decision-log.md)
8. [Legacy decision-ID map](docs/07-reference/05-legacy-decision-id-map.md)

The public website is in [`site/`](site/). The machine-readable prototype and schema are in [`data/`](data/) and [`schemas/`](schemas/).

## How the repository is organized

```text
docs/00-foundation/          Method, claim types, and canonical claim ledger
docs/01-case-amt01/          Witness record, sketch notes, uncertainty, corrections
docs/02-derived-analysis/    Conditional calculations and sensitivity questions
docs/03-hypotheses/          Conventional, perceptual, and exploratory alternatives
docs/04-speculative-models/  Clearly separated speculative engineering abstractions
docs/05-external-evidence/   Provisional comparison material and source protocol
docs/06-research-program/    Safe research questions and work packages
docs/07-reference/           Decisions, references, glossary, and change history
data/                        Machine-readable migration fixture
schemas/                     Versioned schema prototype
site/                        Static public website
templates/                   Record templates
tools/                       Dependency-free validation tools
```

## Statement types

The internal record uses compact labels to prevent different kinds of statements from being blended:

- `OBS`: what the witness recalls noticing;
- `EST`: a later estimate with a stated basis;
- `DER`: a calculation derived from identified inputs;
- `INF`: an interpretation;
- `HYP`: a testable possible explanation;
- `EXT`: a claim from an external source;
- `DEC`: a documented project decision;
- `UNK`: something not known or not measured.

These labels describe provenance and reasoning role. They are not proof grades.

## Hypotheses and speculative models

Conventional, perceptual, environmental, and extraordinary possibilities remain open to evidence-based review. A mechanism may be incompatible with a stated set of estimates without being eliminated for all possible conditions.

Force Skin, MEVE, Q-MEVE, transmedium, and warp-related documents are retained as speculative requirements or thought models. They are not established explanations for AMT-01 and are kept in a separate [speculative-model area](docs/04-speculative-models/README.md).

## Reconstructions and AI use

The website illustrations were created after the event to communicate the remembered scene. They are not additional evidence and may be wrong in scale, perspective, lighting, geometry, placement, and environmental detail.

AI may assist with organization, drafting, search, code, calculations, and visualization. AI output is never treated as a witness, original source, or independent verifier. Material claims and quotations require human checking against their sources.

## Current release status

The initial public release is `v0.1.0`. The current structured dataset is a migration prototype, not a complete multi-case research corpus. Some comparison sources, calculations, and original media-production details still require independent review. Public reconstruction files nevertheless have complete release hashes, lineage, rights status, and baked non-event-media disclosures.

## Participation boundary

Public discussion is available through the project Discord linked from the website. Do not post raw witness reports, identifying information, exact private locations, faces, voices, location metadata, or sensitive media in Discord or public GitHub issues.

The consent-based [Tally witness-intake form](https://tally.so/r/5BgZMb) hosts and stores private responses for the project, with project-level access limited to the project steward acting as private-intake curator. The privacy contact is [werbitsky@gmail.com](mailto:werbitsky@gmail.com). Name and ordinary follow-up contact are optional for a new report; rights requests require a response email. Uploads are optional, limited to five files of 10 MB each, and restricted to images, video, audio, PDF, and plain text. Use a general location rather than a precise private location. A submission is private by default and is not automatically published or accepted into a dataset. The same form provides access, copy, correction, consent-withdrawal, deletion, and other privacy-request routes. See [PRIVACY.md](PRIVACY.md) and [CONSENT_AND_TAKEDOWN.md](CONSENT_AND_TAKEDOWN.md).

## Contributing and governance

Start with [CONTRIBUTING.md](CONTRIBUTING.md). It explains useful contribution routes, evidence labels, source traceability, DCO sign-off, AI disclosure, media rights, the witness-record boundary, and validation.

Project roles and decision authority are defined in [GOVERNANCE.md](GOVERNANCE.md). Community participation is governed by [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md). Privacy, consent, takedown, security, AI use, and support routes are documented separately so contributors do not have to infer them from discussion.

Accepting a contribution means it has been catalogued with its stated provenance, license, uncertainty, and review status. It does not authenticate the event or endorse a proposed explanation.

## Validation

Run the current machine-readable fixture check from the repository root:

```bash
node tools/validate_bundle.mjs
```

The complete dependency-free validation set is:

```bash
node tools/validate_bundle.mjs
node tools/audit_decision_log.mjs docs/07-reference/02-decision-log.md docs/00-foundation/02-claim-ledger.md
node tools/validate_media_provenance.mjs
node tools/check_local_links.mjs
node --check site/script.js
node --check site/site-config.js
```

## Public website

The public project website is live at [amt01.vercel.app](https://amt01.vercel.app/). It presents the witness account, uncertainty boundary, reconstruction gallery, reverse-engineering framework, community routes, and private witness-intake entry point.

This repository is the source and auditable research record behind the website. Vercel deploys the contents of [`site/`](site/) from the repository's `main` branch.

### Preview locally

Preview the website from the repository root:

```bash
python3 -m http.server 4173 --directory site
```

### Vercel configuration for maintainers

The production project uses these settings:

- Root Directory: `site`
- Framework Preset: `Other`
- Build Command: leave blank
- Output Directory: `.`

The website is plain HTML, CSS, and JavaScript, so it requires no dependency installation or build step. [`site/vercel.json`](site/vercel.json) supplies clean URLs and restrictive browser-security headers. Setting the Vercel root to `site` also prevents repository documentation and internal research files from being published as website paths.

## Licensing

This is a mixed-license open project:

- software and schemas are licensed under Apache-2.0;
- project documentation, structured public data, the witness record, and rights-controlled reconstruction media are licensed under CC BY 4.0;
- the code of conduct is an adaptation of Contributor Covenant 3.0 under CC BY-SA 4.0;
- attribution must credit **AMT-01 Project contributors** and link back to the [canonical repository](https://github.com/verbitski/amt-01-open-investigation);
- third-party works and internal material are excluded.

See [LICENSE.md](LICENSE.md) and [RIGHTS_AND_ATTRIBUTION.md](RIGHTS_AND_ATTRIBUTION.md) for the exact path and asset scope.
