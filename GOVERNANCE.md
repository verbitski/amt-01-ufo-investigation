# Governance

## Purpose

AMT-01 Open Investigation preserves one retrospective witness record and organizes transparent analysis around it. Governance exists to keep the witness record, derived work, hypotheses, community discussion, and project decisions auditable and clearly separated.

No project role can convert the available record into independent confirmation. The case currently has no known event photograph or video, independent witness record, sensor confirmation, recovered exact site, or instrumented geometry.

## Roles

### Project steward and witness-curator

The project steward sets project scope, appoints maintainers, approves public releases, and holds final responsibility for governance and licensing decisions.

As witness-curator, the steward is the source authority for whether a statement accurately represents the steward's current first-person memory. The witness-curator may record a later amendment, reject wording that misstates that memory, and identify whether a reconstruction feels consistent with it.

At launch, the project steward also acts as the private-intake curator. Project-level access to raw Tally witness submissions is limited to this curator. The role may review, minimize, delete, or request follow-up on a submission within the published privacy and consent boundaries, but cannot publish or license it without separate, specific permission from the submitter.

This authority is narrow. It does not:

- authenticate the external event;
- establish that the remembered form was a physical craft;
- prove dimensions, distance, height, material, or mechanism;
- determine the truth of an external source;
- override reproducible analysis or domain review;
- make a preferred hypothesis more probable.

### Maintainer

A maintainer triages issues and pull requests, applies repository policies, protects private and rights-restricted material, coordinates review, maintains releases, and merges approved changes.

A maintainer may make routine editorial and implementation decisions. A maintainer who is not the witness-curator cannot originate or silently alter first-person witness content.

### Domain reviewer

A domain reviewer evaluates work within a stated area such as physics, engineering, optics, perception, statistics, history, archival research, privacy, security, accessibility, or data quality.

A domain review must state its scope, assumptions, limitations, and conflicts of interest. Domain reviewers advise on substance; they do not acquire authority over the witness's memory or over unrelated domains.

### Contributor

A contributor submits code, documentation, data, analysis, sources, reviews, or media under the repository's contribution and licensing rules. Contributors are responsible for provenance, rights, disclosure, and responding to review.

### Community participant

A community participant asks questions, discusses ideas, shares public sources, or helps orient others without necessarily submitting repository changes. Community participation does not confer reviewer or maintainer authority.

One person may hold more than one role. Every decision and review should make the active role and any conflict clear.

## Decision authority

| Decision | Required authority and review |
|---|---|
| Routine typo, link, formatting, or non-breaking implementation fix | One maintainer |
| Ordinary code, schema, documentation, or website change | One maintainer; domain review when the substance requires it |
| First-person witness wording | Witness-curator confirmation and maintainer review |
| Material witness amendment | Witness-curator confirmation, additive correction record, ADR, and affected-document review |
| Substantive derived claim or technical conclusion | Maintainer plus relevant domain review; assumptions and uncertainty must remain explicit |
| Hypothesis status or speculative-model hierarchy | ADR, maintainer review, and relevant domain review when available |
| Evidence-tier promotion | ADR plus at least two reviewers independent of the witness; no promotion solely by the steward |
| Backward-incompatible public schema change | ADR, migration plan, maintainer review, and data review |
| Privacy, safety, licensing, contribution, or governance policy | ADR and project-steward approval |
| Public release | Project steward and maintainer |
| Community moderation action | Maintainer or designated server moderator under the conduct policy |

When a required independent or domain reviewer is unavailable, the project may retain a proposal as open or provisional. It must not lower the review standard merely to close the item.

## Witness-record governance

The witness record is versioned. A later memory does not silently replace an earlier project value and does not become new independent event evidence.

A material amendment must:

1. preserve the earlier wording or value;
2. record the amendment date;
3. identify the witness-curator as the source;
4. classify the change as recollection, estimate, correction, or clarification;
5. state what remains unknown;
6. identify affected claims, calculations, reconstructions, and summaries;
7. add an ADR when the accepted case baseline changes;
8. update the change history.

Contributors may challenge analysis, request clearer uncertainty, or identify conflicting records. Repetitive demands that the witness defend the same memory are not a substitute for evidence or analysis.

## ADR boundary

An Architecture Decision Record is required when a decision changes a durable project rule or materially changes how the record is interpreted or maintained.

ADR-required examples:

- accepting or amending a material witness claim;
- changing an evidence class or evidence tier;
- changing a hypothesis status or model layer;
- changing the canonical source for a record;
- adopting a breaking schema or identifier migration;
- changing source-verification, privacy, safety, AI, licensing, contribution, or governance policy;
- changing release or reviewer requirements.

An ADR is normally not required for:

- spelling, grammar, or formatting fixes that preserve meaning;
- repaired links and source locators;
- non-breaking code refactors with equivalent behavior;
- tests that enforce an already accepted rule;
- accessibility improvements that do not change case meaning;
- routine dependency or deployment maintenance.

If classification is uncertain, a maintainer records the decision as proposed and asks the project steward whether an ADR is required.

## ADR lifecycle

1. **Proposed:** context, inputs, alternatives, consequences, review trigger, and traceability are recorded.
2. **Reviewed:** affected maintainers and domain reviewers comment within their scope.
3. **Accepted, rejected, deprioritized, parked, paused, or superseded:** the authorized decision maker records the outcome.
4. **Implemented:** affected canonical documents, data, tests, and release notes are updated together.
5. **Revisited:** a documented review trigger or material new input opens a new decision or superseding record.

Accepted decisions remain visible when superseded. Project history is not rewritten to make the current state appear inevitable.

## Review principles

- Review the claim, source, method, and uncertainty rather than the contributor's preferred conclusion.
- Separate mathematical correctness from input quality.
- Treat “not noticed” as a detection statement, not a measured physical zero.
- Treat synthetic reconstructions as illustrations, never event evidence.
- Keep conventional, perceptual, memory, environmental, and speculative explanations open to the same evidentiary rules.
- Record material disagreement rather than forcing false consensus.
- Disclose authorship conflicts, role conflicts, financial interests, and substantial AI assistance.

## Merge meaning

Merge means:

> The material has been catalogued with its stated provenance, license, uncertainty, and review status.

Merge does not mean:

> The event, source interpretation, calculation input, or proposed mechanism has been independently authenticated.

## Releases

- Public releases are tagged and accompanied by a change summary.
- Current case values and superseded values remain traceable.
- Structured-data and schema versions are recorded separately when necessary.
- Generated artifacts are released only when their generator and drift check are committed.
- A release must not include private intake responses, consent records, sensitive metadata, credentials, or rights-uncleared material.

## Community and private matters

Public project questions belong in the [AMT-01 Discord community](https://discord.gg/JVvHf5cXhs) or, once available, the appropriate public GitHub route.

New private witness reports belong only in the [consent-based Tally form](https://tally.so/r/5BgZMb). Access, copy, correction, consent-withdrawal, deletion, or other privacy requests concerning an earlier private report should use the same form or [werbitsky@gmail.com](mailto:werbitsky@gmail.com). Do not send private reports through another project channel. Sensitive conduct or security concerns should be sent by private direct message to a server moderator. Never post raw witness reports, identifying details, exact private locations, sensitive media, credentials, or vulnerability details publicly. See [PRIVACY.md](PRIVACY.md), [CONSENT_AND_TAKEDOWN.md](CONSENT_AND_TAKEDOWN.md), and [SUPPORT.md](SUPPORT.md).

## Changing this governance document

A material governance change requires an ADR and project-steward approval. Routine clarity corrections may be merged by a maintainer if they do not change authority, review thresholds, licensing, privacy, or contributor rights.
