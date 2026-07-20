# Contributing to AMT-01 Open Investigation

Thank you for helping examine an unresolved witness record with care. Contributions are judged by provenance, clarity, reproducibility, uncertainty handling, and respect. They are not judged by whether they favor a conventional or extraordinary explanation.

AMT-01 begins with one retrospective first-person account. It has no known event photograph or video, independent witness record, sensor confirmation, recovered exact site, or instrumented geometry. A contribution can improve the record or analysis, but it cannot turn missing evidence into confirmation.

## Good contribution routes

- reproduce, correct, or add sensitivity analysis to a calculation;
- test a perceptual, environmental, conventional, or speculative explanation;
- verify a cited statement against an original source and precise locator;
- identify an unsupported claim, duplicated identifier, broken link, or provenance gap;
- improve the dataset, schema, validation tools, accessibility, or website;
- propose a carefully sourced comparison case or negative control;
- improve documentation while preserving its evidence labels and uncertainty;
- create a safe simulation or analytical model with explicit assumptions.

For public orientation questions or help choosing a contribution route, use the [AMT-01 Discord community](https://discord.gg/JVvHf5cXhs).

## Not accepted

- unsourced claims presented as facts;
- invented, unverifiable, or AI-fabricated citations;
- synthetic media presented as event evidence;
- silent changes to the witness record or correction history;
- raw personal witness reports submitted through GitHub or Discord;
- names, contact details, exact private locations, faces, voices, location metadata, credentials, or other sensitive data;
- copyrighted third-party files without permission to redistribute them;
- harassment, ridicule, repeated witness badgering, doxing, or amateur diagnosis;
- claims about origin, operators, conspiracies, or identifiable people without evidence;
- instructions for hazardous high-voltage, high-field, plasma, radiation, pressure-vessel, cryogenic, energetic, or otherwise unsafe experiments.

Private experience reports belong only in the [consent-based witness-intake form](https://tally.so/r/5BgZMb). Do not send a raw report by issue, pull request, Discord channel, email, or unsolicited direct message. A private form submission is not a repository contribution and requires a separate publication workflow before any part can become public project material.

## Repository licenses and inbound contributions

This is a mixed-license repository. The target path determines the outbound license and therefore the license under which a contribution is accepted:

| Target material | License |
|---|---|
| `tools/**` except the disclosure raster, `schemas/**`, `site/script.js`, `site/site-config.js`, `site/styles.css`, software tests, and `.github/workflows/**` | Apache-2.0 |
| Root documentation except the code of conduct, `docs/**`, `templates/**`, `data/**`, `site/index.html`, witness material, project-created media, the disclosure raster, issue forms, and the pull-request template | CC BY 4.0 |
| `CODE_OF_CONDUCT.md` | CC BY-SA 4.0, as an adaptation of Contributor Covenant 3.0 |
| Official license texts and `DCO.txt` | Their own terms and notices; the project does not relicense them |

See [LICENSE.md](LICENSE.md) and [RIGHTS_AND_ATTRIBUTION.md](RIGHTS_AND_ATTRIBUTION.md) for the authoritative scope and exceptions.

Contributions are accepted on an **inbound-equals-outbound** basis. By submitting a contribution, you agree that it may be distributed under the license assigned to its target path. You must have the right to make that grant.

Every commit must include a Developer Certificate of Origin 1.1 sign-off. The unchanged certificate is in [DCO.txt](DCO.txt). Create a sign-off with:

```bash
git commit -s
```

This adds a line in the form:

```text
Signed-off-by: Your Name <your-email@example.com>
```

The sign-off certifies your right to submit the contribution. It is not a statement that the project agrees with the contribution. The sign-off becomes part of the permanent public contribution record, so use an identity and email address you are authorized and comfortable to publish.

## Preserve statement types

Use the project taxonomy consistently:

- `OBS`: what the witness recalls perceiving;
- `EST`: a later estimate with a stated basis;
- `DER`: a calculation from identified inputs;
- `INF`: an interpretation;
- `HYP`: an explanation to test;
- `EXT`: a statement from an external source;
- `DEC`: a documented project decision;
- `UNK`: something unknown or not measured.

Additional rules:

- `OBS` and `EXT` require a source relation and useful locator.
- `EST` requires a basis and uncertainty.
- `DER` requires input identifiers, equations or method, assumptions, and sensitivity to uncertain inputs.
- “Not noticed” or `not_detected` requires observation conditions and must not be rewritten as a physical zero.
- A hypothesis cannot be promoted into an observation or derivation by changing its wording.
- Confidence describes record stability, salience, or analytical basis, not truth probability.
- Unknown, not measured, not detected, withheld, and not applicable are distinct states.

## Witness-record boundary

The project steward is also the witness-curator. That role has authority to state whether wording accurately represents the steward's current memory and to record a later first-person amendment.

That authority does not authenticate the event, establish an object's physical properties, select its origin, or make an engineering explanation true. Analysis and external evidence remain independently reviewable.

Contributors may:

- point out inconsistencies or ambiguous wording;
- request that a value be labeled as an estimate or unknown;
- identify an earlier record that conflicts with the current one;
- propose a clearer uncertainty statement;
- challenge calculations or interpretations built from the witness record.

Contributors may not silently rewrite what the witness remembers. A material witness amendment must be dated, preserve the earlier value, state its evidentiary status, identify affected calculations, and follow the project's decision process.

## Choose the right contribution format

### Calculation audit

Include:

1. the claim or analysis identifier;
2. every input, unit, range, and correlation assumption;
3. equations and method;
4. reproducible code when appropriate;
5. uncertainty or sensitivity analysis;
6. the effect on the current conclusion.

### Alternative explanation

Include:

1. the proposed mechanism or interpretation;
2. which recorded features it may explain;
3. which features it does not explain;
4. required assumptions;
5. expected observable signatures;
6. a discriminating test or prediction;
7. evidence that would strengthen, weaken, or reject it.

Perception, memory reconstruction, scale error, conventional local objects, lightweight platforms, tether, buoyancy, and known technology remain valid subjects.

### Source correction or verification

Link the original source, provide a page, timecode, frame, paragraph, or record locator, identify the affected project statement, and describe the proposed additive correction. Quote only what is necessary. A transcription, search result, or AI summary is not a substitute for the original source.

### Comparison case

Include:

1. a stable proposed case identifier and known aliases;
2. the original source and precise locator;
3. exact reported facts separated from interpretation;
4. available geometry or sensor metadata and explicit missingness;
5. alternative explanations and contradictions;
6. discovery query and inclusion reason;
7. duplicate-event check;
8. rights, redistribution, and privacy status.

### Data or schema change

Explain backward compatibility, migration effects, identifiers, controlled vocabulary, and validation impact. Never infer a missing value merely to satisfy a schema.

### Media contribution

Provide creator, rights holder, creation date, source assets, tool and model when AI-assisted, prompt or process reference, edit history, license, redistribution permission, and a content hash. Reconstructions must remain clearly labeled as post-event illustrations and must never be linked as support for an observation claim.

## AI-assisted contributions

AI assistance is allowed only with disclosure and human verification. In the pull request, state:

- tool, provider, and model/version when known;
- date and purpose;
- source inputs supplied to the system;
- which parts were generated or transformed;
- how a human checked the result;
- known limitations or unresolved uncertainty.

AI output is not an original source, witness, domain reviewer, or independent verifier. Read [AI_USE_POLICY.md](AI_USE_POLICY.md) before submitting AI-assisted text, code, analysis, data, OCR, translation, or media.

## Decision-record boundary

A routine correction does not need an Architecture Decision Record. A material change does.

Create or request an ADR when a contribution changes:

- the accepted witness baseline or a material amendment;
- claim taxonomy, status, or evidence tier;
- hypothesis status or model hierarchy;
- canonical document ownership;
- privacy, safety, licensing, contribution, or governance policy;
- a public schema in a backward-incompatible way;
- release or review requirements.

Typographical fixes, link repairs, clearer wording that preserves meaning, tests, and non-breaking implementation work normally do not require an ADR. See [GOVERNANCE.md](GOVERNANCE.md) for decision authority.

## Validation

Run commands from the repository root.

Validate the current machine-readable fixture:

```bash
node tools/validate_bundle.mjs
```

Validate the public media inventory and recorded hashes:

```bash
node tools/validate_media_provenance.mjs
```

Audit decision-log and claim-ledger consistency:

```bash
node tools/audit_decision_log.mjs docs/07-reference/02-decision-log.md docs/00-foundation/02-claim-ledger.md
```

Check website JavaScript syntax:

```bash
node --check site/script.js
node --check site/site-config.js
```

Check local documentation and website links:

```bash
node tools/check_local_links.mjs
```

For website changes, also inspect keyboard navigation, focus behavior, mobile layouts, reduced-motion behavior, image disclosures, and all affected links in a browser.

## Review and merge

1. Automated checks confirm structure and syntax where available.
2. A maintainer checks scope, licensing, privacy, provenance, and traceability.
3. A relevant domain reviewer checks substantive technical work when available.
4. Material changes follow the ADR process.
5. The project steward reviews changes to the witness record or public case framing.
6. A maintainer merges the contribution after required review is complete.

Merge means that material has been catalogued under the stated provenance and review status. It does not authenticate the reported event, a comparison case, or any proposed explanation.

## Need help or need to report a concern?

Read [SUPPORT.md](SUPPORT.md). Use the public Discord for non-sensitive questions. For sensitive conduct or security matters, privately message a server moderator and do not post the details publicly.
