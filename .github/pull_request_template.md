# Pull request

## Summary

Describe the change, why it is needed, and what a reviewer should verify.

## Scope

- [ ] Documentation or website prose
- [ ] Structured data or schema
- [ ] Calculation, analysis, or hypothesis
- [ ] Source or provenance record
- [ ] Reconstruction media or delivery derivative
- [ ] Software, validation, or website behavior
- [ ] Governance, decision history, or contribution process

Related issue or decision:

## Evidence type and source traceability

List every affected claim, source, asset, review, or decision ID and link its canonical project file. Classify material as `OBS`, `EST`, `DER`, `INF`, `HYP`, `EXT`, `DEC`, or `UNK`. Explain any status or wording change and identify downstream records that need review.

- Affected IDs:
- Canonical files:
- Public primary sources, stable identifiers, and exact sections/pages:
- Values or wording superseded, if any:
- Limits of what the cited material establishes:

- [ ] I kept direct observations separate from later estimates, derivations, inferences, hypotheses, external reports, decisions, and unknowns.
- [ ] I verified quotations, calculations, links, and material factual claims against the cited originals.
- [ ] I did not use AI output, a reconstruction, or an unresolved external report as event evidence.

## AI-use disclosure

- [ ] No AI system contributed to this change.
- [ ] AI assistance was used and is described below.

If AI was used, identify the system when known, the tasks it assisted with, the inputs or references it was given, and the human verification performed. State unknown details as `unknown` rather than guessing.

AI-use details:

## Rights, privacy, and media

- [ ] I own or control the rights required for new project material, or I provided only a link/citation to third-party material.
- [ ] Third-party licenses, permissions, attribution, and source-layer limitations are recorded where applicable.
- [ ] This change contains no personal data, exact private locations, raw witness reports, sensitive media, credentials, confidential material, or security-vulnerability details.
- [ ] Public media has been reviewed for identifying details, rights, consent, and redistribution status.
- [ ] Every new or changed public reconstruction contains the baked disclosure `RECONSTRUCTION / NOT EVENT MEDIA` and is recorded in `site/assets/provenance.json`, including its parentage and hashes.
- [ ] Unlabeled masters and private provenance sources remain outside public repository, release, and deployment paths.
- [ ] Not applicable: this change adds or modifies no media.

## Witness-record boundary

The first-person witness record is curator-controlled. Contributions may identify an inconsistency or propose a review, but must not silently rewrite the account, convert later material into contemporaneous evidence, or present a reconstruction as an event image.

- [ ] This change does not alter the witness record.
- [ ] This is an authorized witness amendment with an additive correction trail, updated claim typing, a decision record, source status, and review of dependent material.
- [ ] Any summary remains faithful to the canonical witness record and preserves its uncertainty.

## Validation

- [ ] `node tools/validate_bundle.mjs`
- [ ] `node tools/audit_decision_log.mjs docs/07-reference/02-decision-log.md docs/00-foundation/02-claim-ledger.md`
- [ ] `node tools/validate_media_provenance.mjs`
- [ ] `node --check` for every changed JavaScript or `.mjs` file
- [ ] `node tools/check_local_links.mjs`
- [ ] I reviewed the final diff for accidental private paths, generated debris, unrelated changes, and unresolved placeholders.

Explain any unchecked or not-applicable validation:

## DCO sign-off

By contributing, I certify the [Developer Certificate of Origin 1.1](https://developercertificate.org/). Every commit in this pull request must include a `Signed-off-by: Name <email>` trailer. You can add it with `git commit -s`.

- [ ] Every commit is signed off under DCO 1.1, and I have the right to submit this contribution under the repository's applicable inbound license.
