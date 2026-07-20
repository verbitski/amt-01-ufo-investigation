---
title: "Legacy Decision-ID Map"
project: "AMT-01 Open Investigation"
section: "reference"
version: "1.2"
last_updated: "2026-07-20"
status: "active"
canonical: "yes"
---

# Legacy Decision-ID Map

## 1. Purpose

This file preserves the real identifier collision between the v1.0 decision log, the v1.0 claim ledger, and the internally reconciled v1.1 decision register. It is the canonical lookup for historical decision citations.

`DEC-027` selected the public-history policy used here: retain the meanings assigned to `DEC-001` through `DEC-026` in v1.1, continue the current sequence, and preserve all earlier identifiers through permanent source-qualified mappings. The immutable v1.0 and v1.1 packages are not rewritten.

## 2. Verified source snapshots

All hashes use SHA-256. Archive names are descriptive source labels; local filesystem paths are intentionally excluded from the public record.

| Source artifact | SHA-256 |
|---|---|
| `AMT-01_QMEVE_Knowledge_Base_v1.0.zip` | `2a8dac69808752a9b23c3ae16e14fe06b198df63329d32e6977ab330df897006` |
| v1.0 `docs/07-reference/02-decision-log.md` | `421b72d38bc28ddf08805c4c5f395964c7181ba7b089a491171b68194ebc7208` |
| v1.0 `docs/00-foundation/02-claim-ledger.md` | `4be391dd9abbc78ff964cce316a984a3ce92c7bad4aaebe2db3303792e614d5e` |
| supplied `AMT-01_QMEVE_Knowledge_Base_v1.1.zip` | `63dc1de49af529fc4c7e6124667ee1c511699b30d6cb5785fb155638b3826572` |
| supplied v1.1 `docs/07-reference/02-decision-log.md` | `199aefbb025febad28dbc3f7ec240b17e484a032e5bf341ecec823d17ae1d776` |
| supplied v1.1 `docs/00-foundation/02-claim-ledger.md` | `23bab722529f03d114c8125c744472add98058ddc5f818989c24fdc71efe458c` |

These hashes identify the inputs used to construct this map. The current public-release files are derivatives and are expected to have different hashes.

## 3. Namespace and citation rule

Use these exact archival namespaces:

```text
v1.0-log/DEC-###
v1.0-ledger/DEC-###
v1.0-ledger/DEC-AMT-020
v1.1/DEC-###
```

Within the current repository, bare `DEC-###` identifiers refer to the current canonical decision register. The meanings of bare `DEC-001` through `DEC-026` are the meanings established by v1.1 and ratified by `DEC-027`; later decisions continue the sequence without rebinding an existing number.

A bare identifier quoted from v1.0 is ambiguous unless its source file is known. Do not guess. Cite the decision log as `v1.0-log/...` and the claim ledger as `v1.0-ledger/...`. A release-qualified identifier records a source snapshot; it does not create a new decision merely because the release number changes.

`DEC-027` through `DEC-031` were introduced after the immutable v1.1 package. They therefore have no `v1.1/DEC-...` aliases. In the v1.2 public-release snapshot they may be qualified as `v1.2/DEC-027` through `v1.2/DEC-031`, while their stable in-repository identifiers remain `DEC-027` through `DEC-031`.

## 4. Relation types

| Relation | Meaning |
|---|---|
| `same_decision` | The current record preserves the material decision represented by the legacy identifier. |
| `refines` | The current record narrows, expands, or structures the earlier decision without treating its wording as identical. |
| `split_into` | One legacy umbrella decision became multiple current decisions. This is lineage, not a one-to-one alias. |
| `status_changed_in` | The current record changed the project disposition as well as restructuring the decision. |
| `introduced_in_v1.1` | The v1.1 decision has no direct decision predecessor in either mapped v1.0 table. |

A one-to-one row can be used as a source-qualified alias. A `split_into` row must resolve to this map entry and its set of destinations; it must not be represented as if the same alias uniquely named several current decisions.

## 5. v1.0 decision-log mapping

The **Legacy wording** column is copied verbatim from the v1.0 decision-log headings.

| Source-qualified legacy identifier | Legacy wording | Relation | v1.1 destination or destinations |
|---|---|---|---|
| `v1.0-log/DEC-001` | Accept AMT-01 as internal modeling baseline | `same_decision` | `v1.1/DEC-001` |
| `v1.0-log/DEC-002` | Separate fact from mechanism | `refines` | `v1.1/DEC-003` |
| `v1.0-log/DEC-003` | Remove lamp-navigation theory | `same_decision` | `v1.1/DEC-006` |
| `v1.0-log/DEC-004` | Correct wind direction | `same_decision` | `v1.1/DEC-005` |
| `v1.0-log/DEC-005` | Deprioritize tether, kite, buoyancy, conventional rotorcraft, and wing lift | `split_into`; `status_changed_in` for `DEC-007`, `DEC-009`, and `DEC-010` | `v1.1/DEC-007`, `v1.1/DEC-008`, `v1.1/DEC-009`, `v1.1/DEC-010` |
| `v1.0-log/DEC-006` | Prefer distributed-support abstraction | `same_decision` | `v1.1/DEC-011` |
| `v1.0-log/DEC-007` | Do not treat black regions as literal holes | `same_decision` | `v1.1/DEC-012` |
| `v1.0-log/DEC-008` | Generalize Force Skin to MEVE for transmedium discussion | `refines` | `v1.1/DEC-015` |
| `v1.0-log/DEC-009` | Refine “quantum liquid” into Q-MEVE exclusion boundary | `refines` | `v1.1/DEC-017` |
| `v1.0-log/DEC-010` | Keep momentum conservation explicit | `refines` | `v1.1/DEC-018` |
| `v1.0-log/DEC-011` | Keep warp separate | `same_decision` | `v1.1/DEC-019` |
| `v1.0-log/DEC-012` | Treat AI as mission/navigation layer plus conventional fast control loops | `refines` | `v1.1/DEC-020` |
| `v1.0-log/DEC-013` | Pause broad YouTube video mining | `same_decision` | `v1.1/DEC-021` |
| `v1.0-log/DEC-014` | Create modular Markdown knowledge base | `refines` | `v1.1/DEC-025` |

## 6. v1.0 claim-ledger mapping

The **Legacy wording** column is copied verbatim from the v1.0 claim-ledger cells, including punctuation.

| Source-qualified legacy identifier | Legacy wording | Relation | v1.1 destination or destinations |
|---|---|---|---|
| `v1.0-ledger/DEC-001` | Treat AMT-01 as the internal modeling baseline. | `same_decision` | `v1.1/DEC-001` |
| `v1.0-ledger/DEC-002` | Do not challenge the witness with repeated mundane-explanation questioning. | `same_decision` | `v1.1/DEC-004` |
| `v1.0-ledger/DEC-003` | Keep observation and interpretation separate. | `refines` | `v1.1/DEC-003` |
| `v1.0-ledger/DEC-004` | Deprioritize buoyancy and ordinary airflow models. | `split_into`; `status_changed_in` for `DEC-009` and `DEC-010` | `v1.1/DEC-008`, `v1.1/DEC-009`, `v1.1/DEC-010` |
| `v1.0-ledger/DEC-005` | Treat black regions as windows/apertures until evidence supports literal holes. | `split_into`; `DEC-013` also `refines` the window concept | `v1.1/DEC-012`, `v1.1/DEC-013` |
| `v1.0-ledger/DEC-006` | Pause broad YouTube evidence mining. | `same_decision` | `v1.1/DEC-021` |
| `v1.0-ledger/DEC-007` | Structure the project as a versioned Markdown knowledge base. | `refines` | `v1.1/DEC-025` |
| `v1.0-ledger/DEC-AMT-020` | Lamp alignment is treated as accidental visibility, not navigation. | `same_decision` | `v1.1/DEC-006` |

## 7. Decisions introduced in v1.1

The following v1.1 decisions have no direct decision predecessor in either mapped v1.0 decision table:

| v1.1 identifier | Relation |
|---|---|
| `v1.1/DEC-002` | `introduced_in_v1.1` |
| `v1.1/DEC-014` | `introduced_in_v1.1` |
| `v1.1/DEC-016` | `introduced_in_v1.1` |
| `v1.1/DEC-022` | `introduced_in_v1.1` |
| `v1.1/DEC-023` | `introduced_in_v1.1` |
| `v1.1/DEC-024` | `introduced_in_v1.1` |
| `v1.1/DEC-026` | `introduced_in_v1.1` |

`v1.1/DEC-013` is not listed as newly unconnected because it refines one branch of `v1.0-ledger/DEC-005`; it is not a one-to-one alias for that compound legacy decision.

## 8. Historical caveats

- The collision existed in the source files. This map resolves citations without claiming that the old IDs were always synchronized.
- The v1.1 seven-phase ordering is a reconstructed reasoning sequence, not a dated chronology.
- The v1.1 detailed records were written retrospectively and do not all satisfy the later full ADR template.
- A changed or accepted project decision records project governance or model selection. It does not establish the truth of a witness claim or the existence of a speculative mechanism.
- The strengthened “rejected as primary” statuses in `DEC-007`, `DEC-009`, and `DEC-010` are visible relation changes, not silent synonyms for the older “deprioritize” wording.
- Unknown decision dates, missing source anchors, and orphaned bare legacy identifiers remain unknown rather than being reconstructed without evidence.

## 9. Governance

Any correction to this map requires a new decision record, the exact source wording, an immutable source locator or hash, and an explanation of how the change affects existing citations. Source-qualified legacy identifiers must never be deleted or reassigned.
