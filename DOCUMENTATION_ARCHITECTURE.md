---
title: "Documentation Architecture"
project: "AMT-01 Open Investigation"
section: "root"
version: "1.2"
last_updated: "2026-07-20"
status: "active"
canonical: "yes"
---

# Documentation architecture

## 1. Purpose

The public derivative is organized to prevent five common failures:

1. treating a retrospective witness record as independently verified event data;
2. mixing recollection, later estimate, calculation, inference, and hypothesis;
3. allowing exploratory models to become implicit conclusions;
4. silently overwriting changed memories, estimates, or decisions;
5. publishing generated compilations that can drift from their canonical sources.

The reasoning flow is:

```text
scope and evidence rules
→ current witness record
→ corrections and uncertainty
→ derived analysis
→ competing explanations
→ speculative sandbox
→ external comparison
→ research plan
→ decision and change governance
```

## 2. Public evidence boundary

AMT-01 currently consists of one retrospective first-person witness record, later reconstruction material, later estimates, corrections, and analysis derived from those inputs.

There is no known event photograph or video, independent witness account, sensor confirmation, recovered exact site, or instrumented measurement. The repository may test the internal implications of the account, but it cannot authenticate the event, identify its cause, or establish an exotic origin from the available evidence.

## 3. Directory roles

### `docs/00-foundation/`

Defines project scope, claim types, confidence language, canonical claims, and update rules.

Canonical files:

- `00-project-charter.md`
- `01-epistemic-framework.md`
- `02-claim-ledger.md`

### `docs/01-case-amt01/`

Preserves the current witness record without mechanism claims. It includes the case summary, full account, reconstruction limitations, explicit unknowns, and additive correction history.

Canonical files:

- `00-case-summary.md`
- `01-full-observation-record.md`
- `02-sketch-and-surface-record.md`
- `03-uncertainty-register.md`
- `04-memory-and-correction-timeline.md`

### `docs/02-derived-analysis/`

Contains calculations and physical comparisons based on stated inputs. Each result inherits the uncertainty of the retrospective estimates used to produce it.

### `docs/03-hypotheses/`

Organizes open, conditionally disfavored, and exploratory explanation families. Perception, memory, scale error, and conventional identification remain open subjects rather than excluded baselines.

### `docs/04-speculative-models/`

Separates Force Skin, MEVE, Q-MEVE, high-speed, transmedium, warp-related, and control thought models from the case record. Retaining a model for analysis is not evidence for it.

### `docs/05-external-evidence/`

Records public-source scope, comparative cases, evidence-quality rules, and paused source-mining work. External reports are comparison material, not automatic validation.

### `docs/06-research-program/`

Converts uncertainties into work packages, predictions, falsifiers, and safe analytical or simulation work.

### `docs/07-reference/`

Stores open questions, terminology, the decision narrative, references, release changes, and immutable source-package identifiers.

### `data/`, `schemas/`, `templates/`, and `tools/`

- `data/` contains structured migration fixtures and future canonical structured records.
- `schemas/` defines machine-validation contracts.
- `templates/` provides consistent case, decision, hypothesis, and source-review records.
- `tools/` validates structured data, decision-log consistency, media provenance, local links, and DCO sign-off.

The current `data/cases/amt-01.migration-example.json` file is explicitly partial. It demonstrates structure and does not supersede the canonical case documents.

### `site/`

Contains the public presentation layer. Website text and reconstructions must link back to canonical documents where detail matters. Website assets illustrate the account; they do not become evidence by being displayed prominently.

## 4. Canonical homes

| Information | Canonical home |
|---|---|
| Project mission and non-goals | `docs/00-foundation/00-project-charter.md` |
| Claim types and evidence language | `docs/00-foundation/01-epistemic-framework.md` |
| Compact current claim index | `docs/00-foundation/02-claim-ledger.md` |
| Current structured witness record | `docs/01-case-amt01/01-full-observation-record.md` |
| Sketch and surface limitations | `docs/01-case-amt01/02-sketch-and-surface-record.md` |
| Unknowns and measurement limits | `docs/01-case-amt01/03-uncertainty-register.md` |
| Changed recollections and estimates | `docs/01-case-amt01/04-memory-and-correction-timeline.md` |
| Numerical inputs, equations, and results | `docs/02-derived-analysis/` |
| Explanation status | `docs/03-hypotheses/00-hypothesis-registry.md` |
| Speculative model definitions | `docs/04-speculative-models/` |
| External-source assessments | `docs/05-external-evidence/` |
| Material project decisions | `docs/07-reference/02-decision-log.md` |
| Legacy decision identifier resolution | `docs/07-reference/05-legacy-decision-id-map.md` |
| Release-level changes | `docs/07-reference/04-change-log.md` |
| Historical package identity | `docs/07-reference/06-source-baselines.md` |

Other pages should link to these homes rather than silently redefine them.

## 5. Claim and uncertainty discipline

Important statements must be classified as observation, estimate, derivation, inference, hypothesis, external report, decision, or unknown.

- “Not noticed” or “not detected” is not a measured physical zero.
- A later estimate is not a contemporaneous measurement.
- Correct arithmetic does not improve the quality of its inputs.
- Confidence describes record stability, salience, or analytical basis, not truth probability.
- A synthetic or post-event reconstruction can illustrate a claim but cannot support it as event evidence.
- An accepted decision to explore a model does not increase the evidence for that model.

## 6. Correction policy

Material corrections are additive:

1. preserve the earlier value and its source context;
2. record the new value, date, and classification;
3. explain affected claims or calculations;
4. update the canonical current record and uncertainty register;
5. add a decision entry when project scope or interpretation changes;
6. update the change log.

Unknown dates, sources, and relationships must remain `unknown` or `not documented`. They must not be reconstructed for narrative completeness.

## 7. Decision history

The v1.1 decision log is a useful retrospective explanation of the project's reasoning path. Its seven original phases are a reconstructed development sequence, not a dated chronology. Historical records do not yet contain every field required by the newer decision template. The canonical legacy map gives source-qualified meanings to conflicting v1.0 identifiers.

Future material decisions should record occurrence date when known, recorded date, inputs, alternatives, decision, rationale, limitations, review trigger, and typed traceability. Superseded decisions remain visible.

## 8. Generated material

Generated artifacts are never edited as canonical sources. They may be published only when the repository contains:

1. a deterministic generator;
2. a documented build command;
3. a drift check against canonical inputs;
4. a clear generated-file notice.

For this reason, the source package's `MASTER_DOSSIER.md` is intentionally omitted from the public derivative.

## 9. Public and private boundary

The public repository may contain redacted case material, reviewed calculations, rights-cleared reconstructions, public-source locators, and governance history.

It must not contain raw witness submissions, private contact details, consent records, precise private locations, original sensitive metadata, unredacted faces or voices, or third-party files without redistribution permission. Public GitHub issues are not a private witness-intake channel.

Repository participation is governed by `CONTRIBUTING.md`, `GOVERNANCE.md`, `CODE_OF_CONDUCT.md`, `AI_USE_POLICY.md`, `PRIVACY.md`, `CONSENT_AND_TAKEDOWN.md`, `SECURITY.md`, and `SUPPORT.md`. Structured issue forms and the pull-request template repeat the public/private boundary at the point of contribution. Private witness intake operates through a separate consent-based Tally form. Its raw responses, consent records, and contact details remain outside the public repository and require a separate publication decision before any derived record can enter the public tree.

## 10. Licensing boundary

The repository uses path- and asset-specific licenses rather than a blanket repository grant:

- software and schemas: Apache-2.0;
- project-created documentation, structured public data, the witness record, and rights-controlled reconstruction media: CC BY 4.0;
- `CODE_OF_CONDUCT.md`: CC BY-SA 4.0 as a Contributor Covenant 3.0 adaptation;
- official license texts and `DCO.txt`: their own notices and terms;
- linked or quoted third-party works: excluded from project license grants;
- local launch notes and private material: excluded from public distribution.

CC BY attribution must credit **AMT-01 Project contributors**, identify changes, link to the license, and link back to the canonical repository or project page. The authoritative scope is in `LICENSE.md` and `RIGHTS_AND_ATTRIBUTION.md`.
