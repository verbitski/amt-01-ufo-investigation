---
title: "Canonical Claim Ledger"
project: "AMT-01 Open Investigation"
section: "foundation"
version: "1.2"
last_updated: "2026-07-20"
status: "active"
canonical: "yes"
---

# Canonical Claim Ledger

This ledger is the compact source of truth for the project's core claims. Confidence refers to the stability, salience, or basis of a record, not the probability that an external event occurred exactly as described. The machine-readable migration fixture atomizes several legacy compound rows more finely.

## AMT-01 observation and estimate claims

| ID | Type | Claim | Confidence | Status |
|---|---|---|---|---|
| `OBS-AMT-001` | OBS | The visible planform was remembered as an elongated triangular arrow. | High | Retained |
| `OBS-AMT-002` | OBS | The nose appeared to point in the direction of travel. | High | Retained |
| `OBS-AMT-003` | OBS | The nose appeared sharp or blade-like, and the rear edge appeared straight. | High | Retained |
| `OBS-AMT-004` | OBS | The underside appeared strictly flat, seamless, and geometrically precise. | High | Retained |
| `EST-AMT-005` | EST | Length was approximately 6–8 m. | Medium | Retained |
| `EST-AMT-006` | EST | Rear width was approximately 2.5–3 m. | Medium | Retained |
| `UNK-AMT-007` | UNK | Thickness and upper geometry are unknown; up to ~1 m is only an impression. | Low | Open |
| `OBS-AMT-008` | OBS | The main underside resembled dark matte anodized aluminum. | High | Retained |
| `OBS-AMT-009` | OBS | Several irregular, sharply bounded regions appeared completely black compared with the surrounding underside; no internal reflection was visible to the witness. | High for existence and remembered appearance; low for topology | Retained, wording corrected |
| `OBS-AMT-010` | OBS | No seams, joints, conventional apertures, propellers, or nozzles were visible. | High | Retained |
| `OBS-AMT-011` | OBS | Motion appeared straight, level, uniform, and free of visible oscillation. | High | Retained |
| `EST-AMT-012` | EST | The object traveled roughly 40–50 m in 12–15 s. | Medium | Retained |
| `DER-AMT-013` | DER | Estimated speed was approximately 2.7–4.2 m/s or 9.6–15 km/h. | Medium | Retained |
| `EST-AMT-014` | EST | Altitude was approximately 4–5 m; lamps were ~3–3.5 m. | Medium | Retained |
| `EST-AMT-015` | EST | Closest lateral distance to the object's path was later estimated at approximately 15–20 m. | Low | Amended 2026-07-20; supersedes the earlier 10–15 m estimate |
| `OBS-AMT-016` | OBS | No sound attributable to the form was noticed under the recalled conditions. | High | Retained; detection threshold unknown |
| `OBS-AMT-017` | OBS | No obvious downwash or visible airflow was noticed under the recalled conditions. | High | Retained; detection threshold unknown |
| `OBS-AMT-018` | OBS | No obvious glow, exhaust, vapor, odor, pressure sensation, or environmental disturbance was noticed under the recalled conditions. | High as a legacy compound memory row; detection thresholds unknown | Retained; atomized in structured data |
| `OBS-AMT-019` | OBS | The underside was visible while the object crossed the lamp-lit part of the scene; after the object moved beyond that area, a weak contour remained visible for approximately one second and then was no longer visible. | High for the remembered sequence; cause is not encoded in this observation | Retained; causal interpretation separated |
| `OBS-AMT-020` | OBS | The witness currently recalls that the event occurred in summer 2004; the exact day and month remain unknown. | Medium; later recollection | Added 2026-07-20; supersedes year-unknown project metadata |
| `OBS-AMT-021` | OBS | Wind blew from shore toward the sea; travel was roughly perpendicular to wind. | High after correction | Retained |
| `EST-AMT-022` | EST | The count of completely black regions was later estimated at approximately 5–7. | Low for exact count and topology | Added 2026-07-20; supersedes the earlier 5–10 estimate |

The summer-2004, proximity, and black-region amendments are governed by `DEC-028` through `DEC-031`. Earlier values remain traceable in the immutable v1.0 and v1.1 packages and in the correction timeline; their replacement here is not a claim that the new values were contemporaneously documented.

## Derived physical claims

| ID | Type | Claim | Status |
|---|---|---|---|
| `DER-PHY-001` | DER | Planform area is approximately 7.5–12 m²; nominal ~9.6 m². | Retained |
| `DER-PHY-002` | DER | Under the current speed, area, air-density, and lift-coefficient assumptions, ordinary aerodynamic lift would support only a low modeled mass. | Retained as conditional derivation |
| `DER-PHY-003` | DER | Under modeled mass and disk-area assumptions, conventional hover through air predicts increasing flow and power demands; comparison with the witness record remains threshold-dependent. | Retained as conditional derivation |
| `DER-PHY-004` | DER | If weight is already compensated, horizontal movement at the later-estimated speed requires comparatively little force. | Retained as conditional derivation |
| `DER-PHY-005` | DER | At 20,000–30,000 km/h in dense atmosphere, “friction reduction” is insufficient; shock, compression, heating, and momentum exchange dominate. | Retained |
| `DER-PHY-006` | DER | At the same extreme speeds underwater, normal hydrodynamic interaction would be catastrophic. | Retained |

## Inference and hypothesis claims

| ID | Type | Claim | Status |
|---|---|---|---|
| `INF-001` | INF | The remembered form looked rigid and stable rather than obviously fluttering or deforming. This does not establish mass or inertia. | Active inference |
| `INF-002` | INF | No conventional thrust opening was identified from the remembered appearance; the regions' geometry and function remain unknown. | Active inference |
| `HYP-FS-001` | HYP | A distributed Force Skin abstraction could represent the support and stabilization requirements without selecting a mechanism. | Exploratory requirements model |
| `HYP-WIN-001` | HYP | The black regions may have been spectrally selective low-reflectance sensor or field windows. | Speculative hypothesis |
| `HYP-MEVE-001` | HYP | A near-hull matter-exclusion region could prevent direct medium-hull contact. | Speculative sandbox; not supported by AMT-01 |
| `HYP-QM-001` | HYP | A field-like Level-3 boundary could make a protected region inaccessible to surrounding matter. | Highly speculative sandbox; no demonstrated mechanism |
| `HYP-HS-001` | HYP | Extreme-speed operation would require a precursor field and wake-restoration mechanism, not merely a vacuum gap. | Beyond the reported AMT-01 behavior |
| `HYP-CTRL-001` | HYP | If a distributed active envelope existed, fast stabilization would probably require onboard control loops. | Conditional speculative architecture |
| `HYP-WARP-001` | HYP | Warp/metric transport, if relevant, would be a separate higher layer from local matter exclusion. | Parked extension |

## Project decisions

The detailed rationale, alternatives, consequences, and review triggers are in `docs/07-reference/02-decision-log.md`. The log is a retrospectively reconstructed reasoning sequence, not a dated chronology or proof that an accepted model is true. “Rejected as primary” records an internal modeling decision under the stated estimates and detection assumptions; it does not eliminate an explanation class for all possible conditions.

| ID | Decision | Status |
|---|---|---|
| `DEC-001` | Accept AMT-01 as the internal modeling baseline. | Accepted |
| `DEC-002` | Do not treat extraterrestrial origin as established. | Accepted |
| `DEC-003` | Separate observations, estimates, derivations, inferences, hypotheses, external reports, and decisions. | Accepted |
| `DEC-004` | Freeze the structured observation record and stop repetitive witness questioning. | Accepted |
| `DEC-005` | Correct the wind direction to shore-to-sea. | Accepted correction |
| `DEC-006` | Remove the lamp-navigation theory; lamps were accidental illumination. | Accepted correction |
| `DEC-007` | Reject tether, kite, and ordinary wind-borne explanations as primary AMT-01 models. | Rejected as primary |
| `DEC-008` | Deprioritize buoyancy and near-neutral aerostat models. | Deprioritized |
| `DEC-009` | Reject ordinary aerodynamic wing lift as the primary support mechanism. | Rejected as primary |
| `DEC-010` | Reject ordinary rotor, fan, turbine, jet, and rocket support as primary mechanisms. | Rejected as primary |
| `DEC-011` | Adopt Force Skin as the low-speed distributed-support black box. | Accepted working model |
| `DEC-012` | Stop calling the completely black-looking regions literal holes. | Accepted terminology decision |
| `DEC-013` | Retain the spectrally selective functional-window idea as a hypothesis to test. | Accepted active hypothesis |
| `DEC-014` | Replace “friction removal” with full air-interaction management for extreme-speed modeling. | Accepted working requirement |
| `DEC-015` | Generalize Force Skin into MEVE for transmedium and multi-environment modeling. | Accepted speculative model |
| `DEC-016` | Treat vacuum as a protected state, not the mechanism; require an active boundary, precursor, and wake restoration. | Accepted refinement |
| `DEC-017` | Refine the “quantum liquid” idea into the Q-MEVE Level-3 exclusion-boundary abstraction. | Accepted highly speculative model |
| `DEC-018` | Keep momentum, energy, pressure, and entropy accounting explicit. | Accepted governing rule |
| `DEC-019` | Keep warp/metric transport separate from local Force Skin/Q-MEVE explanations. | Parked extension |
| `DEC-020` | Adopt layered onboard control and autonomy; do not assume faster-than-light quantum remote control. | Accepted working architecture |
| `DEC-021` | Pause broad YouTube/public-video evidence farming. | Paused |
| `DEC-022` | Establish a primary-source hierarchy and require OCR verification against originals. | Accepted evidence rule |
| `DEC-023` | Use public UAP cases as comparative signatures, not proof of common origin or technology. | Accepted evidence rule |
| `DEC-024` | Limit active experimentation to safe optical, analytical, and simulation work. | Accepted safety boundary |
| `DEC-025` | Adopt a modular Markdown knowledge base with canonical-document ownership. | Accepted documentation architecture |
| `DEC-026` | Use ADR-style records for every future material project decision. | Accepted governance rule |
| `DEC-027` | Keep the v1.1 meanings of DEC-001 through DEC-026 as the current canonical baseline and publish permanent source-qualified legacy mappings. | Accepted |
| `DEC-028` | Record summer 2004 as a later witness amendment. | Accepted |
| `DEC-029` | Amend the closest lateral distance estimate from 10–15 m to 15–20 m. | Accepted |
| `DEC-030` | Amend the black-region count to 5–7 and separate observation from estimate. | Accepted |
| `DEC-031` | Require amendment and provenance records for material witness corrections. | Accepted |
| `DEC-032` | Adopt a scoped Apache-2.0 and CC BY 4.0 licensing policy for the public repository. | Accepted |
| `DEC-033` | Publish reconstruction media only as disclosure-baked, provenance-linked derivatives. | Accepted |
| `DEC-034` | Adopt steward-led public governance, DCO-based contributions, and guarded contribution channels. | Accepted |
