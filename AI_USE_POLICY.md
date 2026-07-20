# AI use policy

## Purpose

AI tools can help organize, transform, analyze, and communicate project material. They cannot supply missing evidence or independently validate a witness record. This policy applies to project maintainers, contributors, structured data, documentation, code, analysis, source processing, and media.

## Core rule

AI output is never treated as:

- a witness;
- an original or primary source;
- independent corroboration;
- a domain reviewer;
- proof of factual accuracy;
- evidence that an image depicts the event;
- authority to merge, accept an ADR, or change the witness record.

Every material AI-assisted output requires a responsible human who checks it against the relevant source, method, or test.

## Allowed uses

AI may assist with:

- outlining, drafting, editing, and document navigation;
- code generation, refactoring, testing, and accessibility review;
- schema design, data transformation, and consistency checks;
- search-query generation and source discovery;
- OCR, transcription, translation, and structured extraction;
- calculations, symbolic work, simulation setup, and sensitivity exploration;
- classification or clustering for triage;
- reconstruction imagery and other clearly illustrative media;
- identifying questions, contradictions, missing fields, or alternative explanations.

Permission to use AI does not waive source, privacy, licensing, safety, or verification requirements.

## Prohibited uses

Do not use AI to:

- invent a citation, quotation, measurement, event detail, source locator, or missing value;
- convert an uncertain statement into a definite fact;
- present a generated image, audio file, video, or simulation as event media;
- verify its own output or serve as the only reviewer of a material claim;
- infer a person's identity, diagnosis, credibility, intent, or mental state;
- autonomously accept decisions, merge contributions, or promote an evidence tier;
- upload private witness submissions, identities, exact locations, faces, voices, credentials, or sensitive metadata to an AI service without explicit authorization and an approved privacy workflow;
- reproduce or transform third-party material when the project lacks the required rights;
- generate instructions for hazardous experiments outside the project's safety boundary.

## Required disclosure

Disclose material AI assistance in the pull request, asset provenance, source record, analysis note, or document history. Include:

1. tool and provider;
2. model or version when known;
3. date of use;
4. purpose;
5. source inputs supplied to the system;
6. the sections, fields, code, or media generated or transformed;
7. the responsible human verifier;
8. verification performed;
9. known limitations, unresolved errors, or uncertain provenance.

Minor spelling or grammar suggestions do not need line-by-line logging, but contributors should still disclose substantial AI drafting or transformation.

## Human-verification requirements

### Claims and quotations

Check every material claim and quotation against the original source. Record a useful page, paragraph, timecode, frame, or record locator. An AI summary, search result, or converted Markdown file is a discovery aid, not final authority.

### OCR and transcription

Preserve the source asset, tool/version, transformation date, and human-verification status. Mark uncertain readings. Do not silently repair illegible text.

### Translation

Preserve the original wording, identify the language and translation tool, and have a competent human review material passages before using them in a claim.

### Structured data

Do not fill unknown fields with plausible values. Preserve `unknown`, `not measured`, `not detected`, `withheld`, and `not applicable` as distinct states. Check identifiers, units, relations, provenance, privacy, and rights fields.

### Calculations and simulations

Record equations, inputs, assumptions, units, software or model version, and sensitivity to uncertain inputs. Reproduce important results independently of the conversational output. Correct arithmetic does not validate retrospective estimates.

### Code

Review generated code for correctness, security, accessibility, licensing, privacy, and unintended network or file access. Run the relevant tests and validators. AI-generated code is not exempt from the DCO or repository licenses.

### Source review

AI may rank, cluster, or summarize candidate sources for triage. A human must inspect the original material before a source supports an `EXT` claim or comparison-case conclusion.

### Reconstructions and synthetic media

Every AI-assisted reconstruction must:

- be labeled as a post-event reconstruction, not event evidence;
- record the tool, model/version when known, date, prompt or process reference, source assets, edits, and responsible reviewer;
- identify which visual elements are reported, estimated, representative, or invented;
- avoid adding unreported features without explicit disclosure;
- carry an asset identifier, content hash, rights state, and license;
- never be linked as evidentiary support for an observation claim.

Changing a reconstruction does not amend the witness record. If an image prompts a genuine later recollection, that recollection must enter through the separate witness-amendment process.

## Privacy and confidential material

Public GitHub and Discord channels are not raw witness-intake systems. Do not place private reports or sensitive media into an AI prompt merely because an AI service is convenient.

Before any future private workflow uses AI, the project must document:

- consent and permitted purpose;
- provider and data-processing terms;
- storage location and retention;
- model-training or opt-out settings;
- access control;
- redaction and minimization;
- deletion and takedown procedure;
- handling of minors or vulnerable people;
- cross-border transfer where relevant.

Until that workflow exists, private experience intake remains closed.

## Rights and licensing

The contributor is responsible for having the right to submit all inputs and outputs. AI output may resemble existing material, contain third-party content, or be subject to provider terms. Human review must check source assets and redistribution permission before publication.

Accepted AI-assisted contributions use the same path-based license as other contributions and require DCO sign-off. Disclosure does not replace the rights grant.

## Corrections

If AI involvement, provenance, or an error was omitted:

1. stop relying on the affected material where necessary;
2. disclose the issue promptly;
3. preserve the earlier version in history;
4. correct the record additively;
5. reassess dependent claims, calculations, media, or releases;
6. add an ADR when the issue changes a material project decision or policy.

Repeated concealment of material AI use, fabricated citations, or presentation of synthetic media as evidence may lead to rejection or moderation action.
