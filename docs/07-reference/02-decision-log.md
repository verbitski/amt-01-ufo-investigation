---
title: "Decision Log"
project: "AMT-01 Open Investigation"
section: "reference"
version: "1.2"
last_updated: "2026-07-20"
status: "active"
canonical: "yes"
---

# Decision Log

## 1. Purpose

This file records the major project decisions that changed the case baseline, eliminated or deprioritized hypotheses, introduced a new model layer, changed the evidence strategy, or changed the documentation process.

It is intentionally more detailed than the claim ledger and different from the change log:

- the **claim ledger** states what the project currently retains;
- the **decision log** explains how and why the project reached that state;
- the **change log** records what changed between documentation versions.

The decision log is designed so that a new contributor can reconstruct the project's reasoning path without reading the full conversation.

Records `DEC-001` through `DEC-026` were written retrospectively for the v1.1 knowledge base. They preserve a useful reasoning narrative, but they are not a dated chronology and do not contain every field later required by the decision-record template. Missing dates or traceability fields in those records mean **not documented**, not that a value can be inferred. Records from `DEC-027` onward use the complete public-release ADR structure.

## 2. Decision statuses

| Status | Meaning |
|---|---|
| **Accepted** | Governs the current project unless superseded. |
| **Deprioritized** | Retained as possible but not used as the primary model. |
| **Rejected as primary** | Does not explain the retained AMT-01 signature set as the main mechanism. |
| **Parked** | Outside the current evidence scope; may be revisited later. |
| **Paused** | Workstream or method is retained but not currently active. |
| **Superseded** | Replaced by a later decision. |

## 3. Reconstructed development sequence

The ordering below is a reconstructed sequence of project reasoning. It does not establish when the underlying conversations or decisions occurred.

| Phase | Main question | Decisions |
|---|---|---|
| 1 — Case baseline | What is retained from the observation, and how should uncertainty be handled? | DEC-001–DEC-006 |
| 2 — Conventional mechanism stress test | Which ordinary mechanisms are incompatible with the complete retained signature set? | DEC-007–DEC-010 |
| 3 — Low-speed architecture | What black-box architecture can describe support, control, and the black regions without pretending the mechanism is known? | DEC-011–DEC-013 |
| 4 — High-speed and transmedium extension | What changes if related objects truly operate at extreme speed or underwater? | DEC-014–DEC-018 |
| 5 — Transport and control layers | How are local matter interaction, warp concepts, autonomy, and communication separated? | DEC-019–DEC-020 |
| 6 — Evidence strategy | Which external evidence methods are worth pursuing, and how are sources ranked? | DEC-021–DEC-023 |
| 7 — Research and documentation governance | How are safety, canonical documents, and future decisions managed? | DEC-024–DEC-026 |
| 8 — Public-release hardening, witness amendments, and controlled intake | How are historical identifiers, later corrections, licensing, provenance, public contributions, private witness intake, and the canonical public identity governed? | DEC-027–DEC-036 |

## 4. Decision index

| ID | Decision | Status |
|---|---|---|
| DEC-001 | Accept AMT-01 as the internal modeling baseline. | Accepted |
| DEC-002 | Do not treat extraterrestrial origin as established. | Accepted |
| DEC-003 | Separate observations, estimates, derivations, inferences, hypotheses, external reports, and decisions. | Accepted |
| DEC-004 | Freeze the structured observation record and stop repetitive witness questioning. | Accepted |
| DEC-005 | Correct the wind direction to shore-to-sea. | Accepted correction |
| DEC-006 | Remove the lamp-navigation theory; lamps were accidental illumination. | Accepted correction |
| DEC-007 | Reject tether, kite, and ordinary wind-borne explanations as primary AMT-01 models. | Rejected as primary |
| DEC-008 | Deprioritize buoyancy and near-neutral aerostat models. | Deprioritized |
| DEC-009 | Reject ordinary aerodynamic wing lift as the primary support mechanism. | Rejected as primary |
| DEC-010 | Reject ordinary rotor, fan, turbine, jet, and rocket support as primary mechanisms. | Rejected as primary |
| DEC-011 | Adopt Force Skin as the low-speed distributed-support black box. | Accepted working model |
| DEC-012 | Stop calling the completely black-looking regions literal holes. | Accepted terminology decision |
| DEC-013 | Retain the spectrally selective functional-window idea as a hypothesis to test. | Accepted active hypothesis |
| DEC-014 | Replace “friction removal” with full air-interaction management for extreme-speed modeling. | Accepted working requirement |
| DEC-015 | Generalize Force Skin into MEVE for transmedium and multi-environment modeling. | Accepted speculative model |
| DEC-016 | Treat vacuum as a protected state, not the mechanism; require an active boundary, precursor, and wake restoration. | Accepted refinement |
| DEC-017 | Refine the “quantum liquid” idea into the Q-MEVE Level-3 exclusion-boundary abstraction. | Accepted highly speculative model |
| DEC-018 | Keep momentum, energy, pressure, and entropy accounting explicit. | Accepted governing rule |
| DEC-019 | Keep warp/metric transport separate from local Force Skin/Q-MEVE explanations. | Parked extension |
| DEC-020 | Adopt layered onboard control and autonomy; do not assume faster-than-light quantum remote control. | Accepted working architecture |
| DEC-021 | Pause broad YouTube/public-video evidence farming. | Paused |
| DEC-022 | Establish a primary-source hierarchy and require OCR verification against originals. | Accepted evidence rule |
| DEC-023 | Use public UAP cases as comparative signatures, not proof of common origin or technology. | Accepted evidence rule |
| DEC-024 | Limit active experimentation to safe optical, analytical, and simulation work. | Accepted safety boundary |
| DEC-025 | Adopt a modular Markdown knowledge base with canonical-document ownership. | Accepted documentation architecture |
| DEC-026 | Use ADR-style records for every future material project decision. | Accepted governance rule |
| DEC-027 | Keep the v1.1 meanings of DEC-001 through DEC-026 as the current canonical baseline and publish permanent source-qualified legacy mappings. | Accepted |
| DEC-028 | Record summer 2004 as a later witness amendment. | Accepted |
| DEC-029 | Amend the closest lateral distance estimate from 10–15 m to 15–20 m. | Accepted |
| DEC-030 | Amend the black-region count to 5–7 and separate observation from estimate. | Accepted |
| DEC-031 | Require amendment and provenance records for material witness corrections. | Accepted |
| DEC-032 | Adopt a scoped Apache-2.0 and CC BY 4.0 licensing policy for the public repository. | Accepted |
| DEC-033 | Publish reconstruction media only as disclosure-baked, provenance-linked derivatives. | Accepted |
| DEC-034 | Adopt steward-led public governance, DCO-based contributions, and guarded contribution channels. | Accepted |
| DEC-035 | Adopt a consent-based private Tally witness intake with explicit launch and data-handling gates. | Accepted |
| DEC-036 | Rename the canonical repository to include “UFO” while retaining the AMT-01 case identifier. | Accepted |

---

# Detailed Decision Records

## DEC-001 — Accept AMT-01 as the internal modeling baseline

- **Status:** Accepted
- **Scope:** Entire project
- **Related documents:** `docs/00-foundation/00-project-charter.md`, `docs/01-case-amt01/*`

### Context

The discussion initially spent substantial effort testing ordinary explanations. The witness then explicitly requested that the observation itself be treated as a factual project input rather than repeatedly challenged.

Three possible approaches were available:

1. continue treating every retained observation as provisional and repeatedly re-open mundane alternatives;
2. accept both the observation and an exotic origin as established;
3. accept the observation as the internal case baseline while keeping origin and mechanism open.

### Decision

Use option 3. The AMT-01 observation is the accepted internal baseline for reverse-engineering work. This does not establish its origin or mechanism.

### Rationale

This avoids an unproductive loop in which the witness repeatedly answers the same questions, while preserving the distinction between a retained observation and a physical interpretation.

### Consequences

- The project models the retained signature set rather than repeatedly disputing it.
- External scientific proof standards remain separate; AMT-01 is still a single-witness, non-instrumented event.
- New contradictions or corrections can update the case record through a new decision.

### Review trigger

A materially contradictory memory, site reconstruction, independent record, or instrumented observation.

---

## DEC-002 — Do not treat extraterrestrial origin as established

- **Status:** Accepted
- **Scope:** Claims, terminology, external communication
- **Related documents:** `docs/00-foundation/00-project-charter.md`, `docs/00-foundation/01-epistemic-framework.md`

### Context

The project was motivated by the possibility that the object represented technology beyond current public engineering and by reports of high-speed or transmedium UAP behavior. Those possibilities do not identify the object's manufacturer, operator, or place of origin.

### Options considered

- declare non-human or extraterrestrial origin from the observation;
- restrict the project to a conventional human-technology assumption;
- leave origin unassigned and model only functions and signatures.

### Decision

Leave origin unassigned. Terms such as *extraterrestrial*, *non-human*, *future human*, *classified terrestrial*, or *unknown natural phenomenon* remain hypotheses, not project facts.

### Rationale

The same observed functionality could, in principle, arise from several origin scenarios. Functional reverse engineering should not depend on selecting one prematurely.

### Consequences

- The project may examine multi-world or interstellar design requirements as conditional scenarios.
- No public UAP report is treated as confirmation of extraterrestrial intelligence merely because it is unresolved or held in a government archive.

### Review trigger

Authenticated material evidence, reliable provenance, or data that directly constrains origin rather than only behavior.

---

## DEC-003 — Separate claim types

- **Status:** Accepted
- **Scope:** All documentation and reasoning
- **Related documents:** `docs/00-foundation/01-epistemic-framework.md`, `docs/00-foundation/02-claim-ledger.md`

### Context

The discussion contained direct observations, rough scale estimates, calculations, engineering inferences, speculative physics, and external reports. Without explicit labeling, later documents could accidentally present hypotheses as facts.

### Decision

Use the following claim classes:

```text
OBS — direct observation
EST — witness estimate
DER — mathematical derivation
INF — engineering inference
HYP — hypothesis
EXT — external report
DEC — project decision
UNK — unresolved parameter
```

### Rationale

The model can be imaginative without becoming epistemically careless. A reader must always be able to tell which statements come from the event and which were added later by analysis.

### Consequences

- Confidence applies to the stability of the record, not proof of truth.
- “Compatible with” is not equivalent to “supported by.”
- External reports establish that a report exists, not that its interpretation is correct.

### Review trigger

A new class of evidence that cannot be represented cleanly by the existing taxonomy.

---

## DEC-004 — Freeze the structured observation record and stop repetitive witness questioning

- **Status:** Accepted
- **Scope:** Case elicitation process
- **Related documents:** `docs/01-case-amt01/01-full-observation-record.md`, `docs/01-case-amt01/03-uncertainty-register.md`

### Context

A long structured interview established geometry, surface, movement, lighting, environmental effects, witnesses, and uncertainties. The witness correctly noted that repeated variations of the same questions were no longer producing useful information.

### Options considered

- continue open-ended questioning;
- stop asking all future questions;
- freeze a versioned case record and ask only discriminating questions tied to a specific model or calculation.

### Decision

Freeze the current structured observation record. Future questions must identify the decision, calculation, or hypothesis they are intended to discriminate.

### Rationale

Repeated questioning can waste time, introduce memory contamination, and create false precision. A formal uncertainty register is more useful than forcing answers to poorly remembered details.

### Consequences

- Exact black-region topology, thickness, upper geometry, date, and site remain explicitly uncertain.
- The project moves from elicitation to modeling.
- Corrections are recorded as decisions rather than silently rewriting history.

### Review trigger

A new memory triggered by a concrete reconstruction artifact, exact site identification, or a new source that raises one genuinely discriminating question.

---

## DEC-005 — Correct the wind direction to shore-to-sea

- **Status:** Accepted correction
- **Scope:** AMT-01 environmental record and hypothesis testing
- **Related documents:** `docs/01-case-amt01/01-full-observation-record.md`, `docs/02-derived-analysis/01-lift-downwash-and-energy-constraints.md`

### Context

An earlier account stated or implied a sea-to-shore breeze. The witness later corrected this: the wind blew from shore toward the sea. The object moved along the coastline and therefore approximately perpendicular to the wind.

### Decision

The canonical wind direction is **shore-to-sea**.

### Rationale

Environmental direction matters when evaluating wind-borne, buoyant, and drift explanations. Corrections must be preserved explicitly rather than absorbed without trace.

### Consequences

- All canonical case documents use shore-to-sea.
- The correction strengthens the conclusion that the observed path was not simple passive wind drift.
- Wind remains an approximate observation, not a measured vector field.

### Review trigger

Exact location and historical weather data become available.

---

## DEC-006 — Remove the lamp-navigation theory

- **Status:** Accepted correction
- **Scope:** Navigation interpretation and optical visibility
- **Related documents:** `docs/01-case-amt01/01-full-observation-record.md`, `docs/02-derived-analysis/02-optical-and-sensor-window-analysis.md`

### Context

Because the object was visible over a lamp-lit section and followed the general path direction, an early hypothesis suggested it might be using the lamp line as a navigation reference. The witness clarified that entering the illuminated area was, in their judgment, purely accidental.

### Options considered

- lamps as a deliberate navigation line;
- lamps as a route-related infrastructure feature;
- lamps only as accidental lower illumination.

### Decision

Retain only the third option. The lamps explain why the underside became visible and why the object faded after leaving the lit region. They are not part of the active navigation model.

### Rationale

The witness explicitly rejected the route-alignment interpretation, and no independent evidence supports it.

### Consequences

- No further theory work should be spent on lamp following unless new evidence appears.
- The rapid loss of visibility is modeled as low optical signature plus loss of illumination.

### Review trigger

Evidence of repeated path correlation with artificial infrastructure across independent cases.

---

## DEC-007 — Reject tether, kite, and ordinary wind-borne explanations as primary AMT-01 models

- **Status:** Rejected as primary
- **Scope:** Conventional-hypothesis registry
- **Related documents:** `docs/03-hypotheses/01-evaluated-alternatives.md`

### Context

Early alternatives included a kite, suspended structure, cable, line, or lightweight debris. These mechanisms can be silent and visually unusual at night.

### Evidence considered

- close estimated range and low altitude;
- sharp, coherent, nose-forward geometry;
- straight and level trajectory;
- no flutter, yaw, oscillation, altitude change, or visible tether;
- motion approximately perpendicular to the corrected wind direction;
- rigid, seamless, metal-like visual appearance.

### Decision

Do not use tether, kite, or ordinary wind-borne motion as primary explanations within the accepted AMT-01 model.

### Rationale

They explain silence but conflict with the full retained signature set, especially stability, orientation, geometry, and wind relationship.

### Consequences

These mechanisms remain useful as negative controls for optical experiments and comparative cases, but not as the working explanation.

### Review trigger

Site reconstruction reveals a plausible support path, anchor geometry, event installation, or hidden line consistent with the observed trajectory.

---

## DEC-008 — Deprioritize buoyancy and near-neutral aerostat models

- **Status:** Deprioritized
- **Scope:** Support mechanism
- **Related documents:** `docs/03-hypotheses/01-evaluated-alternatives.md`

### Context

Buoyancy naturally explains silence and minimal downwash. A large, low-mass shell with active stabilization could imitate a rigid craft.

### Evidence considered

- likely low-profile geometry and uncertain but apparently limited volume;
- no visible balloon-like surface, seams, flex, or deformation;
- no wind drift or oscillation;
- no visible micro-corrections;
- behavior interpreted as inertial or mass-like.

### Decision

Retain buoyancy as physically possible because upper geometry and mass are unknown, but move it out of the primary model set.

### Rationale

It solves one major constraint—silent support—but requires a hidden volume and stabilization behavior not suggested by the observation.

### Consequences

- Buoyancy is not described as impossible.
- Any future geometry reconstruction should calculate maximum plausible gas volume before fully closing the hypothesis.

### Review trigger

Evidence that the upper profile was substantially larger than perceived, or a credible low-mass rigid-shell architecture matching all other signatures.

---

## DEC-009 — Reject ordinary aerodynamic wing lift as the primary support mechanism

- **Status:** Rejected as primary
- **Scope:** Low-speed flight mechanics
- **Related documents:** `docs/02-derived-analysis/01-lift-downwash-and-energy-constraints.md`

### Context

The remembered triangular shape resembles a delta wing or lifting body. The speed derived from later path-length and duration estimates is approximately 2.7–4.2 m/s.

### Analysis considered

For estimated planform area 7.5–12 m² and air density near 1.2 kg/m³, the dynamic pressure is only about 4.4–10.6 Pa. Even an optimistic lift coefficient supports only a very low mass.

### Decision

Under the current size and speed estimates, ordinary wing-borne lift is not the project's primary support model for an assumed substantial-mass rigid body.

### Rationale

The force budget closes only for a low modeled mass under these inputs. Actual mass is unknown, and remembered behavior cannot independently establish it.

### Consequences

- The triangular appearance is not assumed to prove an aerodynamic function.
- It may instead serve stability, low observability, packaging, sensor coverage, or field geometry.
- A lightweight object, scale error, speed error, unrecognized airflow, or different geometry remains open to testing.

### Review trigger

Mass is established in the few-kilogram range, or the velocity/area estimates are materially revised.

---

## DEC-010 — Reject ordinary rotor, fan, turbine, jet, and rocket support as primary mechanisms

- **Status:** Rejected as primary
- **Scope:** Conventional propulsion
- **Related documents:** `docs/02-derived-analysis/01-lift-downwash-and-energy-constraints.md`, `docs/03-hypotheses/01-evaluated-alternatives.md`

### Context

A hovering or very slow heavier-than-air craft normally supports itself by transferring momentum to air or expelling reaction mass.

### Analysis considered

Ideal actuator-disk calculations show that increasing assumed mass raises induced flow and power demand over an assumed effective area near 10 m². Real systems add acoustic, thermal, and turbulence signatures. Whether a particular signature would have been noticed depends on ambient conditions, system geometry, distance, and perceptual thresholds that were not measured.

### Decision

Under the current retrospective estimates and detection assumptions, conventional rotors, hidden fans, ducted fans, turbines, jets, and rockets are not the project's primary support explanation. This is a conditional modeling disposition, not elimination of those mechanisms under every plausible scenario.

### Rationale

The witness recalls no obvious sound, downwash, exhaust, glow, heat, odor, or environmental disturbance. The proximity and altitude values are later estimates, and detection thresholds are unknown.

### Consequences

- “Hidden propulsion” is insufficient unless it also quantitatively explains signature suppression.
- Known EHD or plasma systems remain partial analogies, not complete solutions.

### Review trigger

A low-mass architecture or measured system demonstrates the required force with signatures below the retained observation threshold.

---

## DEC-011 — Adopt Force Skin as the low-speed distributed-support black box

- **Status:** Accepted working model
- **Scope:** Core low-speed architecture
- **Related documents:** `docs/04-speculative-models/01-force-skin.md`

### Context

After several conventional lift and propulsion scenarios were conditionally disfavored under the current estimates, the project needed a mechanism-neutral way to represent the support and control requirements being discussed.

### Options considered

- name a specific exotic field prematurely;
- leave the support mechanism entirely verbal;
- define a distributed force-density interface without selecting the underlying physics.

### Decision

Use **Force Skin** as a project-defined black-box requirements model: a hypothetical surface or volume that would produce a controllable distributed force density over a modeled body.

### Rationale

A distributed force model can represent smooth attitude control without specifying discrete thrusters. It permits quantitative force and moment equations without claiming that the interface exists or that its underlying physics is known.

### Consequences

- Force Skin is a functional model, not evidence of antigravity.
- It must satisfy total force and torque balance.
- The modest average support pressure over a broad underside becomes a useful design parameter.

### Review trigger

A simpler known mechanism closes the complete force/signature budget, or the distributed model produces a contradiction.

---

## DEC-012 — Stop calling the completely black-looking regions literal holes

- **Status:** Accepted terminology decision
- **Scope:** Surface record and model language
- **Related documents:** `docs/01-case-amt01/02-sketch-and-surface-record.md`, `docs/02-derived-analysis/02-optical-and-sensor-window-analysis.md`

### Context

The witness could not determine whether the completely black-looking regions had physical depth. They appeared to show no reflection and looked like voids, but no airflow or internal reflection was noticed.

### Options considered

- continue calling them holes;
- call them paint patches;
- use mechanism-neutral terms.

### Decision

Use **black regions**, **functional windows**, or **aperture-like zones** until physical openings are established.

### Rationale

“Hole” embeds an unobserved structural conclusion and incorrectly favors ventilation or nozzle theories.

### Consequences

- The sketch is treated as topological rather than metrically exact.
- Literal openings, optical traps, coated panels, sensor windows, and field nodes remain separable hypotheses.

### Review trigger

Close imagery, parallax, visible interior geometry, or material evidence demonstrates actual openings.

---

## DEC-013 — Retain the spectrally selective functional-window idea as a hypothesis to test

- **Status:** Accepted active hypothesis
- **Scope:** Black-region interpretation
- **Related documents:** `docs/02-derived-analysis/02-optical-and-sensor-window-analysis.md`

### Context

A surface can look black because it absorbs visible light, transmits it into an optical system with little reflection, or blocks visible light while transmitting another wavelength band.

### Analysis considered

The optical balance is:

\[
A(\lambda)+R(\lambda)+T(\lambda)=1
\]

An appearance remembered as completely black does not distinguish high absorption, low illumination, an optical trap, memory effects, or high transmission with very low return. An infrared, millimeter-wave, lidar, or other spectral window can in principle look black in visible light while being transparent in another band.

### Decision

Retain **spectrally selective low-reflectance functional windows** as one explicit hypothesis to test alongside ordinary surface features, lighting and perceptual effects, memory reconstruction, optical traps, and other interpretations.

### Rationale

If the remembered appearance and topology are approximately accurate, this hypothesis is compatible with sharp boundaries, irregular placement, a sealed surface, and possible sensor functions. Compatibility is not evidence that the regions served that role.

### Consequences

- Low visible reflectance could be operational, material, environmental, perceptual, or inaccurately reconstructed.
- A same-band perfectly absorbing coating would not be transparent in that same band; spectral and angular behavior must be stated explicitly.

### Review trigger

A material/sensor layout cannot plausibly match the observed shapes, or evidence supports a different function.

---

## DEC-014 — Replace “friction removal” with full air-interaction management for extreme-speed modeling

- **Status:** Accepted working requirement
- **Scope:** High-speed extrapolation
- **Related documents:** `docs/04-speculative-models/04-high-speed-and-transmedium.md`

### Context

Public UAP reports motivated a conditional extrapolation to 20,000–30,000 km/h. At those speeds, the dominant problems are not surface friction alone but compression, bow shocks, heating, ionization, sonic boom, and momentum exchange.

### Decision

Do not describe the requirement as a low-friction coating. Model it as **management or suppression of normal medium-body interaction before hull contact**.

### Rationale

A slippery physical hull still compresses and displaces air. It cannot eliminate shock, thermal load, or sonic signatures at hypersonic speed.

### Consequences

The high-speed model requires at least:

- an upstream precursor region;
- a standoff or exclusion layer;
- lateral medium management;
- wake restoration;
- explicit energy and momentum accounting.

### Review trigger

Extreme-speed dense-atmosphere reports are shown to result from range/sensor errors, or a conventional hypersonic mechanism explains all required signatures.

---

## DEC-015 — Generalize Force Skin into MEVE for transmedium and multi-environment modeling

- **Status:** Accepted speculative model
- **Scope:** Air, water, other atmospheres, and space-interface scenarios
- **Related documents:** `docs/04-speculative-models/02-meve.md`

### Context

A universal vehicle cannot depend on an Earth-specific air bubble, oxygen atmosphere, propeller, or seawater chemistry. Conditional reports of similar behavior in air and underwater motivated a medium-independent architecture.

### Decision

Define **MEVE — Matter-Exclusion Vacuum Envelope** as a model in which the visible hull is separated from surrounding matter by a near-vacuum or low-density exclusion region maintained by an active boundary.

### Rationale

The same abstract function—prevent direct medium-hull contact—can be posed in air, water, dust, or another atmosphere.

### Consequences

- MEVE is not established by AMT-01; it is an extension motivated by transmedium claims.
- Pressure handling becomes a central requirement.
- Literal holes in the hull become less likely than sealed functional windows.

### Review trigger

Transmedium reports fail evidential review, or a medium-specific conventional architecture proves sufficient.

---

## DEC-016 — Treat vacuum as a protected state, not the mechanism

- **Status:** Accepted refinement
- **Scope:** MEVE boundary physics
- **Related documents:** `docs/04-speculative-models/02-meve.md`, `docs/04-speculative-models/04-high-speed-and-transmedium.md`

### Context

A simple vacuum cavity does not solve drag. The external medium still strikes the cavity boundary, producing pressure, shock, wake, and cavitation.

### Decision

Treat near-vacuum as the **interior state** of the envelope, while treating the active moving boundary as the actual technology. A viable high-speed envelope must include:

```text
precursor gradient
+ pressure-bearing exclusion boundary
+ protected near-vacuum region
+ wake-restoration gradient
```

### Rationale

This removes the false assumption that creating empty space alone eliminates environmental interaction.

### Consequences

- The key question becomes how the outer boundary couples to matter.
- A hard, abruptly translated boundary is insufficient.
- Underwater operation requires prevention of cavity collapse, vapor filling, shock, and ordinary cavitation.

### Review trigger

A conventional cavity mechanism demonstrates equivalent low-signature behavior across all relevant media.

---

## DEC-017 — Refine the “quantum liquid” idea into Q-MEVE Level-3 exclusion-boundary abstraction

- **Status:** Accepted highly speculative model
- **Scope:** Deep boundary-physics hypothesis
- **Related documents:** `docs/04-speculative-models/03-qmeve-level3.md`

### Context

A proposed idea suggested that the boundary might place matter into a quantum-fluid-like state in which exact position is undefined and contact does not occur. Ordinary room-temperature matter already has quantum uncertainty, but this does not prevent macroscopic collisions. Superfluidity also does not imply zero density or zero momentum exchange.

### Decision

Reformulate the idea as **Q-MEVE**: an effective field or quantum-like boundary that changes the admissible states or coupling of surrounding matter so that occupancy inside the protected region approaches zero.

Symbolic representation:

\[
\mathbf{F}=-\nabla U(\mathbf{x},t)
\]

\[
|\psi(\mathbf{x},t)|^2\rightarrow0
\quad\text{inside the protected region}
\]

### Rationale

This preserves the useful Level-3 concept—matter is excluded by altered boundary conditions rather than mechanically swept away—without misusing “quantum liquid” as a ready-made mechanism.

### Consequences

- The equations are an effective abstraction, not a claim that a macroscopic wavefunction has been engineered.
- The model must still explain neutral matter coupling, energy, pressure, momentum, decoherence, and observable side effects.

### Review trigger

A concrete field theory is proposed, a known interaction achieves the required exclusion, or the abstraction proves internally inconsistent.

---

## DEC-018 — Keep conservation-law accounting explicit

- **Status:** Accepted governing rule
- **Scope:** All physical models
- **Related documents:** `docs/00-foundation/01-epistemic-framework.md`, `docs/04-speculative-models/03-qmeve-level3.md`

### Context

Phrases such as “no interaction,” “inertia removed,” or “momentum avoided” can conceal rather than solve the physical problem.

### Decision

Every model must identify the accounting path for momentum, energy, pressure stress, and entropy. The current generic momentum ledger is:

\[
\frac{d}{dt}
\left(
P_{craft}+P_{medium}+P_{field}+P_{source}
\right)=0
\]

### Rationale

The observation may imply that local violent exchange is suppressed or redistributed; it does not justify assuming that conserved quantities disappear.

### Consequences

- A model that only labels an effect “antigravity” or “quantum” without a ledger is incomplete.
- Distributed transfer to a large volume, field reservoir, radiation, Earth, or another system may be considered, but must be stated and bounded.

### Review trigger

A tested physical theory demonstrates a modified conservation structure with explicit measurable consequences.

---

## DEC-019 — Keep warp/metric transport separate from local Force Skin/Q-MEVE explanations

- **Status:** Parked extension
- **Scope:** Model hierarchy
- **Related documents:** `docs/04-speculative-models/05-warp-relationship.md`

### Context

The discussion asked whether Q-MEVE is equivalent to a warp drive and how a non-terrestrial object might reach Earth. AMT-01 itself showed neither interstellar travel nor high acceleration.

### Decision

Treat warp or metric transport as a separate higher layer:

```text
Force Skin — local support/control
MEVE/Q-MEVE — local matter interaction
inertial layer — possible acceleration management
metric/warp layer — possible long-distance transport
```

### Rationale

Local matter exclusion and spacetime-metric engineering solve different problems. Merging them would make the low-speed case appear to prove far more than it observed.

### Consequences

- Warp remains a conditional research extension.
- A craft could use Q-MEVE without warp, or require both in different operational modes.

### Review trigger

Data directly constrain nonlocal displacement, superluminal apparent travel, metric effects, or topology change.

---

## DEC-020 — Adopt layered onboard control and autonomy; do not assume FTL quantum remote control

- **Status:** Accepted working architecture
- **Scope:** Guidance, stabilization, mission control, communication
- **Related documents:** `docs/04-speculative-models/06-control-autonomy-and-communications.md`

### Context

A Force Skin or Q-MEVE system would require fast control of support, pressure boundary, precursor geometry, attitude, sensing, and wake restoration. Human joystick control cannot close all such loops directly.

### Decision

Use a layered architecture:

```text
Level 0 — field/envelope stabilization
Level 1 — vehicle dynamics
Level 2 — navigation and sensor fusion
Level 3 — mission autonomy / AI
Level 4 — strategic tasking or network control
```

Known quantum entanglement is not accepted as a faster-than-light command channel.

### Rationale

Fast deterministic feedback and mission-level intelligence are different functions. Onboard autonomy is the simplest architecture under communication delay or uncertain external control.

### Consequences

- “AI” is primarily assigned to perception, planning, adaptation, and mission behavior.
- Quantum systems may still serve sensing, timing, cryptography, or field control.

### Review trigger

Evidence of real-time external control, a demonstrated nonclassical communication channel, or a non-computational control architecture.

---

## DEC-021 — Pause broad YouTube/public-video evidence farming

- **Status:** Paused
- **Scope:** Evidence collection workstream
- **Related documents:** `docs/05-external-evidence/03-video-mining-status.md`

### Context

A prototype video miner was created to detect one-to-few-frame transients. The core problem is that a single camera usually measures angular velocity, not linear speed:

\[
v=R\dot\theta
\]

Unknown distance makes insects, debris, birds, rolling-shutter artifacts, and distant objects difficult to distinguish.

### Decision

Pause broad YouTube evidence farming and do not spend the current project phase on mass collection of weak clips.

### Rationale

Expected false positives are high, metadata and original files are often unavailable, and apparent speed alone contributes little to the boundary-physics questions.

### Consequences

- The prototype is retained but not an active deliverable.
- Video analysis resumes only for calibrated, multi-camera, distance-constrained, or interaction-rich data.

### Review trigger

Access to preserved originals, fixed surveillance geometry, synchronized cameras/audio, or reliable distance anchors.

---

## DEC-022 — Establish a primary-source hierarchy and OCR verification rule

- **Status:** Accepted evidence rule
- **Scope:** PURSUE/UFO-USA and future source corpora
- **Related documents:** `docs/05-external-evidence/00-public-source-corpus.md`, `docs/05-external-evidence/02-evidence-quality-protocol.md`

### Context

The UFO-USA repository provides thousands of searchable Markdown pages converted from official source documents. The conversion is useful for discovery but may contain OCR or model transcription errors.

### Decision

Use this source order:

1. original sensor data or original government record;
2. original PDF/image/audio/video;
3. official metadata or summary;
4. converted Markdown transcription;
5. secondary journalism;
6. social-media retelling.

Exact wording and quantitative claims discovered through Markdown must be checked against the original source.

### Rationale

Searchability and authority are different properties. A government archive can contain raw reports, rumors, correspondence, and later cultural material; conversion adds another uncertainty layer.

### Consequences

- Repository text is a discovery index, not automatic proof.
- Comparative-case notes should retain source provenance and confidence.

### Review trigger

The conversion process adds verifiable page-level confidence metrics or a new source provides higher-fidelity structured data.

---

## DEC-023 — Use public UAP cases as comparative signatures, not proof of common origin or technology

- **Status:** Accepted evidence rule
- **Scope:** External case comparison
- **Related documents:** `docs/05-external-evidence/01-comparative-case-notes.md`

### Context

Initial searches found reports involving triangular/metallic appearance, no visible propulsion, no trail, rapid disappearance, and other partial overlaps. No reviewed case matched the complete AMT-01 signature set.

### Decision

Classify public cases by physical-signature overlap and evidence quality. Do not infer that two cases share a technology, operator, or origin solely because both are called UAP or share one feature.

### Rationale

A dark triangle may be a wind-borne object; a no-trail high-speed report may have uncertain range; a government file may preserve a weak or contradicted account.

### Consequences

Comparative labels include:

```text
shape match
kinematic match
signature match
negative control
credibility warning
not a physics match
```

### Review trigger

A strongly constrained case matches geometry, low-altitude behavior, propulsion signature, and environmental interaction simultaneously.

---

## DEC-024 — Limit active experimentation to safe optical, analytical, and simulation work

- **Status:** Accepted safety boundary
- **Scope:** Research program
- **Related documents:** `docs/06-research-program/02-predictions-falsifiers-and-experiments.md`

### Context

Candidate mechanisms mention high voltage, plasma, strong fields, pressure cavities, radiation, cryogenics, and extreme energy. Premature hardware experiments would be hazardous and scientifically underdetermined.

### Decision

The active program is limited to:

- optical and spectral mockups;
- geometry reconstruction;
- low-power sensor experiments;
- numerical force and pressure models;
- CFD and visibility simulations;
- literature and source analysis.

No uncontrolled high-voltage, plasma, radiation, strong-magnetic-field, vacuum-pressure, cryogenic, explosive, or flight experiments are authorized by the project documentation.

### Rationale

The present bottleneck is model definition and falsification, not access to extreme hardware.

### Consequences

Any future hazardous experiment requires a separate safety review, facility, qualified personnel, and a decision record.

### Review trigger

A well-specified mechanism produces a bounded, independently reviewed, legally compliant experiment with a credible signal-to-risk ratio.

---

## DEC-025 — Adopt a modular Markdown knowledge base with canonical-document ownership

- **Status:** Accepted documentation architecture
- **Scope:** Project knowledge management
- **Related documents:** `README.md`, `DOCUMENTATION_ARCHITECTURE.md`, `MANIFEST.md`

### Context

The discussion had grown into a monolithic dossier containing observations, calculations, theories, external sources, and plans. This made updates and traceability difficult.

### Decision

Use a repository-style Markdown knowledge base separated into:

```text
foundation
primary case
uncertainty
derived analysis
hypotheses
models
external evidence
research program
reference/governance
```

Each major statement has one canonical home. `MASTER_DOSSIER.md` is a generated convenience compilation, not the source of truth.

### Rationale

Modularity reduces contradiction, enables versioning, and allows one layer to change without silently rewriting the others.

### Consequences

- Material updates must change the canonical file, claim ledger, decision log, change log, and generated master dossier as applicable.
- Future cases can reuse templates without merging their facts into AMT-01.

### Review trigger

The project outgrows Markdown or requires a database/knowledge graph while preserving stable identifiers and history.

---

## DEC-026 — Use ADR-style records for every future material project decision

- **Status:** Accepted governance rule
- **Scope:** Future decision management
- **Related documents:** `templates/decision-record-template.md`, this file

### Context

The original v1.0 decision log contained only short one-line outcomes. It confirmed that decisions existed but did not let a new reader reconstruct the context, alternatives, rationale, consequences, and review conditions.

### Decision

Every future material decision must record, at minimum:

- stable decision ID;
- status;
- context;
- alternatives considered;
- decision;
- rationale;
- consequences and limitations;
- review trigger;
- affected canonical documents.

### Rationale

This provides an auditable reasoning trail without requiring access to private conversation history or undocumented assumptions.

### Consequences

- One-line decisions remain acceptable only in the index; the detailed record is canonical.
- Superseded decisions remain in the log and point to the replacing decision.
- Corrections must explain what changed and why.

### Review trigger

A dedicated ADR directory, issue tracker, or database becomes preferable; any migration must preserve IDs and history.

---

## DEC-027 — Keep the v1.1 meanings of DEC-001 through DEC-026 as the current canonical baseline and publish permanent source-qualified legacy mappings

- **Status:** Accepted
- **Recorded date:** 2026-07-20
- **Scope:** Governance, historical identifiers, and public release
- **Supersedes:** none
- **Superseded by:** none
- **Affected canonical documents:**
  - `docs/07-reference/02-decision-log.md`
  - `docs/07-reference/05-legacy-decision-id-map.md`
  - `docs/00-foundation/02-claim-ledger.md`

### Context

The v1.0 decision log and the v1.0 claim ledger both used bare `DEC-###` identifiers, but the same numbers described different decisions. The v1.1 log and ledger agree with each other on `DEC-001` through `DEC-026`, yet many of those numbers have different meanings from one or both v1.0 sources. Declaring only the newest meaning would erase a real historical collision.

### Inputs and evidence considered

- the immutable v1.0 decision log and claim ledger;
- the immutable v1.1 decision log and claim ledger;
- the archive and file hashes recorded in `docs/07-reference/05-legacy-decision-id-map.md`;
- the verified agreement of the v1.1 index, detailed records, and claim-ledger decision table;
- examples such as `DEC-002` and `DEC-006`, whose meanings differ across the v1.0 log, v1.0 ledger, and v1.1 record.

### Alternatives considered

1. Renumber the v1.1 decisions to preserve the v1.0 decision-log numbering.
2. Keep the v1.1 meanings, publish permanent source-qualified legacy mappings, and continue the current sequence.
3. Discard the legacy collision and treat every bare identifier as if it had always held the v1.1 meaning.

### Decision

Use option 2. The meanings assigned to `DEC-001` through `DEC-026` in v1.1 remain the current canonical baseline. New decisions continue sequentially from `DEC-027`. Historical identifiers must be cited with their source namespace:

```text
v1.0-log/DEC-###
v1.0-ledger/DEC-###
v1.0-ledger/DEC-AMT-020
v1.1/DEC-###
```

A bare `DEC-###` is valid only as a current in-repository identifier. A bare identifier quoted from v1.0 must not be interpreted without knowing whether its source was the decision log or the claim ledger. One-to-many migrations are recorded as typed lineage relations rather than false one-to-one aliases.

### Rationale

This preserves the internally consistent v1.1 register without pretending that the earlier collision did not exist. Permanent qualified mappings let a reader resolve old citations while avoiding a second disruptive renumbering immediately before public release.

### Consequences and limitations

- The v1.0 and v1.1 source packages remain immutable historical evidence.
- Current decision identifiers must not be rebound to new meanings in later releases.
- Pre-v1.1 citations require source context; an orphaned bare identifier may remain unresolved.
- A mapping records documentary lineage, not proof that the underlying engineering judgment is correct.
- “Accepted” means accepted as project policy or model state. It does not convert a hypothesis into an observation or establish that a speculative mechanism exists.

### Review trigger

A repository-wide identifier registry replaces Markdown identifiers, or a newly recovered pre-v1.1 source shows that a published mapping is incomplete or incorrect. Any replacement must preserve these aliases and source hashes.

### Traceability

- **Related claims:** all decision rows in `docs/00-foundation/02-claim-ledger.md`
- **Related hypotheses:** none directly; this decision governs how hypothesis decisions are identified
- **Related decisions:** `DEC-003`, `DEC-025`, `DEC-026`
- **Related files:** `docs/07-reference/05-legacy-decision-id-map.md`, `docs/07-reference/02-decision-log.md`, `docs/00-foundation/02-claim-ledger.md`

---

## DEC-028 — Record summer 2004 as a later witness amendment

- **Status:** Accepted
- **Recorded date:** 2026-07-20
- **Scope:** AMT-01 event-time record
- **Supersedes:** none; amends the previously unknown event-year field
- **Superseded by:** none
- **Affected canonical documents:**
  - `docs/00-foundation/02-claim-ledger.md`
  - `docs/01-case-amt01/00-case-summary.md`
  - `docs/01-case-amt01/01-full-observation-record.md`
  - `docs/01-case-amt01/03-uncertainty-register.md`
  - `docs/01-case-amt01/04-memory-and-correction-timeline.md`

### Context

The v1.0 and supplied v1.1 records did not establish the event year. During public-release preparation, the witness stated that the event occurred in summer 2004. The exact day and month were not recovered, and the current project archive contains no contemporaneous event record that independently dates it.

### Inputs and evidence considered

- the witness amendment entered into the project record on 2026-07-20;
- the earlier v1.0 and v1.1 state in which the event year was unknown;
- the absence of a contemporaneous photograph, video, sensor record, diary entry, or other currently available date anchor.

### Alternatives considered

1. Leave the event period entirely unknown.
2. Replace the old field with “summer 2004” without preserving how or when the value entered the record.
3. Record “summer 2004” as a later witness amendment, preserve the earlier unknown state, and keep the exact date unresolved.

### Decision

Use option 3. Add `OBS-AMT-020` to record that the witness currently recalls the event as occurring in summer 2004. State explicitly that this is a later recollection and that the exact day and month remain unknown.

### Rationale

The amendment materially improves the public event description, but its provenance and retrospective character are part of the evidence. Preserving both prevents a reader from mistaking the value for contemporaneously documented metadata.

### Consequences and limitations

- The public event period is narrowed to summer 2004.
- The amendment is not independent corroboration and does not establish an exact date.
- The immutable v1.0 and v1.1 packages continue to show the earlier state rather than being rewritten.
- Date-dependent source searches may use summer 2004 as a search range but must label it as retrospective.

### Review trigger

A contemporaneous record, independently dated source, recovered site record, or further witness correction materially changes the event period.

### Traceability

- **Related claims:** `OBS-AMT-020`
- **Related hypotheses:** none
- **Related decisions:** `DEC-004`, `DEC-031`
- **Related files:** `docs/00-foundation/02-claim-ledger.md`, `docs/01-case-amt01/04-memory-and-correction-timeline.md`
- **Source status:** maintainer-recorded witness amendment; no public contemporaneous date record is currently linked

---

## DEC-029 — Amend the closest lateral distance estimate from 10–15 m to 15–20 m

- **Status:** Accepted
- **Recorded date:** 2026-07-20
- **Scope:** AMT-01 proximity estimate and dependent analysis
- **Supersedes:** none; amends `EST-AMT-015`
- **Superseded by:** none
- **Affected canonical documents:**
  - `docs/00-foundation/02-claim-ledger.md`
  - `docs/01-case-amt01/00-case-summary.md`
  - `docs/01-case-amt01/01-full-observation-record.md`
  - `docs/01-case-amt01/03-uncertainty-register.md`
  - `docs/01-case-amt01/04-memory-and-correction-timeline.md`
  - dependent geometric or visual-angle analyses that use proximity

### Context

The v1.0 and supplied v1.1 records used a later closest-lateral-distance estimate of approximately 10–15 m. During public-release preparation, the witness revised that estimate to approximately 15–20 m. No recovered site survey, calibrated image, or contemporaneous measurement is available.

### Inputs and evidence considered

- the witness amendment entered into the project record on 2026-07-20;
- the earlier `EST-AMT-015` value of approximately 10–15 m;
- the retained event geometry and lamp context;
- the lack of recovered site calibration or a measured observer-to-path distance.

### Alternatives considered

1. Retain 10–15 m as the current estimate.
2. Replace it silently with 15–20 m.
3. Adopt 15–20 m as the current later estimate and preserve 10–15 m as the superseded historical value.

### Decision

Use option 3. `EST-AMT-015` now records approximately 15–20 m as the current later estimate. The earlier 10–15 m value remains visible in amendment history and immutable releases.

### Rationale

The witness is the source of the retrospective scale estimate and explicitly corrected it. Treating the change as an amendment preserves both the current account and the fact that the estimate evolved.

### Consequences and limitations

- Any calculation that used 10–15 m must be recalculated or labeled historical before being presented as current.
- The new range remains an uncalibrated retrospective estimate; the amendment changes the value, not its evidential class.
- The revision affects possible visual-angle and scale reconstructions but does not by itself change the remembered motion sequence.

### Review trigger

A recovered site, lamp-spacing measurement, photograph, map reconstruction, or further witness correction provides a stronger distance constraint.

### Traceability

- **Related claims:** `EST-AMT-015`
- **Related hypotheses:** none directly
- **Related decisions:** `DEC-004`, `DEC-031`
- **Related files:** `docs/00-foundation/02-claim-ledger.md`, `docs/01-case-amt01/04-memory-and-correction-timeline.md`
- **Superseded value:** approximately 10–15 m in v1.0 and the supplied v1.1 package

---

## DEC-030 — Amend the black-region count to 5–7 and separate observation from estimate

- **Status:** Accepted
- **Recorded date:** 2026-07-20
- **Scope:** AMT-01 underside appearance, claim typing, and topology estimate
- **Supersedes:** none; atomizes and amends the legacy compound `OBS-AMT-009` row
- **Superseded by:** none
- **Affected canonical documents:**
  - `docs/00-foundation/02-claim-ledger.md`
  - `docs/01-case-amt01/01-full-observation-record.md`
  - `docs/01-case-amt01/02-sketch-and-surface-record.md`
  - `docs/01-case-amt01/03-uncertainty-register.md`
  - `docs/01-case-amt01/04-memory-and-correction-timeline.md`

### Context

The v1.0 and supplied v1.1 ledger encoded two different kinds of information in one observation row: the remembered existence and appearance of completely black regions, and an approximate count of 5–10. During public-release preparation, the witness revised the later count estimate to approximately 5–7. Exact count, placement, size, shape, orientation, depth, material, and function remain uncertain.

### Inputs and evidence considered

- the witness amendment entered into the project record on 2026-07-20;
- the legacy compound `OBS-AMT-009` wording and its 5–10 count;
- the later reconstruction sketch and visual reconstructions, which are not original event evidence;
- the epistemic rule that remembered appearance and retrospective numerical estimates should use different claim types.

### Alternatives considered

1. Keep the compound observation row and its 5–10 count.
2. Replace 5–10 with 5–7 while continuing to label the entire compound statement as an observation.
3. Retain existence and remembered appearance in `OBS-AMT-009`, create `EST-AMT-022` for the later 5–7 count, and preserve the earlier range in amendment history.

### Decision

Use option 3. `OBS-AMT-009` records that several sharply bounded regions appeared completely black relative to the surrounding underside and that no internal reflection was visible to the witness. `EST-AMT-022` records the later approximate count of 5–7. The earlier 5–10 estimate is superseded but remains traceable in v1.0, v1.1, and the correction timeline.

### Rationale

Separating the stable qualitative memory from the weaker numerical reconstruction makes the ledger more faithful to the witness account and the project's own claim taxonomy.

### Consequences and limitations

- The existence and remembered appearance of the regions no longer inherit false precision from the count estimate.
- The 5–7 range is not an exact topology claim and does not guarantee the placement or shape shown in any reconstruction.
- Reconstructions and sketches remain secondary memory aids, not photographs or independent confirmation.
- Analyses that relied on 5–10 regions must be marked historical or reviewed.

### Review trigger

A further witness correction, a dated earlier sketch, a contemporaneous description, or new evidence materially constrains the count or topology.

### Traceability

- **Related claims:** `OBS-AMT-009`, `EST-AMT-022`
- **Related hypotheses:** `HYP-WIN-001`
- **Related decisions:** `DEC-003`, `DEC-012`, `DEC-013`, `DEC-031`
- **Related files:** `docs/00-foundation/02-claim-ledger.md`, `docs/01-case-amt01/02-sketch-and-surface-record.md`, `docs/01-case-amt01/04-memory-and-correction-timeline.md`
- **Superseded value:** approximately 5–10 regions in v1.0 and the supplied v1.1 package

---

## DEC-031 — Require amendment and provenance records for material witness corrections

- **Status:** Accepted
- **Recorded date:** 2026-07-20
- **Scope:** Case curation, witness amendments, and release provenance
- **Supersedes:** none
- **Superseded by:** none
- **Affected canonical documents:**
  - `docs/07-reference/02-decision-log.md`
  - `docs/00-foundation/02-claim-ledger.md`
  - case correction timelines and future structured claim records

### Context

`DEC-004` froze a structured observation record to prevent repetitive questioning, while allowing genuine corrections. `DEC-026` required ADR-style governance for future material decisions. The summer-2004, proximity, and black-region amendments show that the project also needs an explicit rule for preserving an earlier value, the date a correction entered the project, and the evidential class of the corrected statement.

### Inputs and evidence considered

- the immutable v1.0 and v1.1 source packages;
- `DEC-004` and `DEC-026`;
- the amendment pattern documented in `DEC-028` through `DEC-030`;
- the distinction between event time, memory time, statement-recording time, and publication time;
- the distinction between a remembered feature, a later estimate, an inference, and independent evidence.

### Alternatives considered

1. Silently replace old values with the latest wording.
2. Keep old values and mention corrections only in prose footnotes.
3. Use a versioned amendment procedure with claim-level links, decision records, source status, and review of dependent work.

### Decision

Use option 3. A material witness correction must:

1. preserve the earlier release or source record unchanged;
2. record when the correction entered the project without presenting that date as the event date;
3. state whether the corrected content is a remembered observation, later estimate, inference, or other claim type;
4. create or update a decision record explaining the change;
5. retain the earlier value through an explicit amendment or supersession link;
6. state the correction's source and whether a public source artifact is available;
7. identify calculations, reconstructions, summaries, or hypotheses that require review.

### Rationale

This policy allows the witness-curated record to improve without making later recollection look contemporaneous or erasing how the account changed. It also gives contributors a reproducible way to determine which value was current in a given release.

### Consequences and limitations

- Later witness corrections remain important first-person evidence but are not independent corroboration.
- Missing dates, sources, or values must be labeled `unknown`, `none`, or `not documented`; they must not be inferred for completeness.
- Public summaries may show only the current value, but they must link to the amendment history when the change is material.
- Dependent analyses are not automatically updated merely because a claim changes; they require explicit review.
- Privacy and consent rules still govern whether the underlying source artifact can be published.

### Review trigger

The project adopts a structured provenance standard or database that provides equal or stronger immutable revision history, typed relations, source authentication, and privacy controls.

### Traceability

- **Related claims:** `OBS-AMT-020`, `EST-AMT-015`, `OBS-AMT-009`, `EST-AMT-022`
- **Related hypotheses:** none directly
- **Related decisions:** `DEC-004`, `DEC-026`, `DEC-028`, `DEC-029`, `DEC-030`
- **Related files:** `docs/07-reference/02-decision-log.md`, `docs/00-foundation/02-claim-ledger.md`, `docs/01-case-amt01/04-memory-and-correction-timeline.md`

---

## DEC-032 — Adopt a scoped Apache-2.0 and CC BY 4.0 licensing policy for the public repository

- **Status:** Accepted
- **Recorded date:** 2026-07-20
- **Scope:** Public repository licensing, attribution, contributions, and media rights
- **Supersedes:** none
- **Superseded by:** none
- **Affected canonical documents:**
  - `LICENSE.md`
  - `NOTICE`
  - `RIGHTS_AND_ATTRIBUTION.md`
  - `docs/07-reference/02-decision-log.md`
  - `docs/00-foundation/02-claim-ledger.md`

### Context

The public repository contains materially different categories of work: software and schemas, project documentation and data, the witness record, website prose and code, reconstruction media, third-party sources, and internal material. A single blanket license would imply that the project controls the same rights in every file and grants the same permissions for every category. That is not true. The project owner therefore approved a two-license policy with explicit scope boundaries, attribution, and exclusions.

### Inputs and evidence considered

- the project owner's licensing approval recorded on 2026-07-20;
- the Apache License 2.0 copyright and patent grants and its notice, redistribution, and changed-file conditions;
- the Creative Commons Attribution 4.0 International license's permission for reuse and adaptation, including commercial reuse, subject to attribution, a license link, and indication of modifications;
- the repository's provenance boundary: the project can license only material for which it owns or controls the required rights;
- the need for one canonical attribution identity and a link back to the canonical repository or project page.

### Alternatives considered

1. Use the MIT License for code and select CC BY 4.0 or CC0 separately for each content category.
2. Use Apache-2.0 for the defined technical material and CC BY 4.0 for defined project-created or rights-controlled content, with explicit exclusions.
3. Apply one blanket license to the entire repository.
4. Keep all project material under all-rights-reserved terms.

### Decision

Use option 2, with the following authoritative scope:

1. **Apache License 2.0** applies to project software under `tools/`, project schemas, and website JavaScript and CSS.
2. **Creative Commons Attribution 4.0 International (CC BY 4.0)** applies to project-created documentation and data, the witness record, website prose, and reconstruction media only where the project controls the rights required to redistribute and license that material.
3. Required attribution for CC BY 4.0 material must credit **“AMT-01 Project contributors”**, link to the canonical repository or project page, link to the CC BY 4.0 license, and indicate whether modifications were made.
4. Third-party material and internal or non-public material are excluded from both grants unless they are explicitly listed with compatible rights.
5. `LICENSE.md` is the authoritative license-by-path and license-by-content-scope matrix. `RIGHTS_AND_ATTRIBUTION.md` records per-item rights, provenance, exclusions, and required credits. `NOTICE` preserves applicable software notices and attribution.
6. A file's presence in the public repository does not, by itself, place it under either license. The explicit scope statements and per-item rights record control.

### Rationale

Apache-2.0 provides a familiar open-source license with an explicit patent grant for technical contributions. CC BY 4.0 allows broad reuse of the project-created knowledge record while preserving the owner's requirement for attribution. Keeping the grants scoped by path, content type, and recorded rights prevents the project from purporting to sublicense third-party or private material it does not control.

### Consequences and limitations

- CC BY 4.0 permits copying, adaptation, and commercial reuse. Its permissions cannot be revoked for recipients who comply with its terms.
- CC BY 4.0 does not grant third-party copyright, privacy, publicity, personality, trademark, patent, or other rights. Reconstruction media is covered only when the project controls the necessary rights.
- Licensing the witness record under CC BY 4.0 permits downstream copies and adaptations with the required attribution. A later project takedown can stop new distribution by the project but cannot revoke permissions already validly granted to compliant recipients.
- Apache-2.0's applicable license-copy, notice, changed-file, and patent terms govern redistribution of covered technical material. Its grants are irrevocable subject to the license conditions and its patent-termination provision.
- Mixed works require clear file-level or section-level scope. In particular, website prose and website JavaScript or CSS are governed by different licenses.
- Internal or private intake material, consent records, identifying or exact private information, and third-party copyrighted sources remain outside these license grants unless a later explicit rights record states otherwise.
- Contributors may grant only rights they own or control and must be told which inbound license applies to each contribution category.
- The canonical repository was recorded as `https://github.com/verbitski/amt-01-open-investigation` before public release.

### Review trigger

Review this decision if the owner changes the desired permissions, a rights holder challenges the project's authority to license an item, a new content category is introduced, the canonical attribution identity or link changes, or qualified legal review finds that the scope does not implement the intended permissions.

### Traceability

- **Related claims:** none
- **Related hypotheses:** none
- **Related decisions:** `DEC-025`, `DEC-026`, `DEC-027`, `DEC-031`
- **Related files:** `LICENSE.md`, `NOTICE`, `RIGHTS_AND_ATTRIBUTION.md`, `docs/07-reference/02-decision-log.md`, `docs/00-foundation/02-claim-ledger.md`
- **Official license texts:** [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0), [Creative Commons Attribution 4.0 International](https://creativecommons.org/licenses/by/4.0/legalcode.en)
- **Attribution identity:** AMT-01 Project contributors
- **Attribution link:** https://github.com/verbitski/amt-01-ufo-investigation

---

## DEC-033 — Publish reconstruction media only as disclosure-baked, provenance-linked derivatives

- **Status:** Accepted
- **Recorded date:** 2026-07-20
- **Scope:** Public reconstruction media, disclosure rendering, responsive derivatives, private masters, and asset provenance
- **Supersedes:** none; formalizes the reconstruction release safeguards already identified during public-release preparation
- **Superseded by:** none
- **Affected canonical documents:**
  - `RIGHTS_AND_ATTRIBUTION.md`
  - `LICENSE.md`
  - `site/assets/provenance.json`
  - public reconstruction assets and delivery derivatives under `site/assets/`
  - `docs/01-case-amt01/02-sketch-and-surface-record.md`
  - `docs/07-reference/02-decision-log.md`
  - `docs/00-foundation/02-claim-ledger.md`

### Context

AMT-01 has no original event photograph, video, or sensor image. Every visual reconstruction was created after the event to illustrate the witness account. A disclosure shown only in HTML or CSS disappears when an image is downloaded, embedded, copied, or reposted, allowing a reconstruction to be mistaken for event media. At the same time, overwriting or discarding the unlabeled source would weaken provenance and make later verification or correction harder. The public release therefore needs a reproducible publication transformation, private preservation of the source master, and explicit lineage for every responsive derivative.

### Inputs and evidence considered

- the absence of original event media and the reconstruction-only evidentiary role of the website images;
- the current website's full-size PNG assets and responsive JPEG delivery copies;
- the release requirement that the disclosure remain attached when an image leaves the webpage;
- the need to distinguish a disclosure overlay from any undisclosed alteration of the image;
- the provenance and claim-separation rules in `DEC-003`, `DEC-022`, `DEC-030`, `DEC-031`, and the licensing boundary in `DEC-032`;
- the project's incomplete knowledge of some creator, AI provider, model, prompt, seed, reference-layer, background-source, and edit-history details;
- the owner's decision to release rights-controlled public reconstruction media under CC BY 4.0.

### Alternatives considered

1. Keep only an HTML/CSS badge over otherwise unlabeled public images.
2. Overwrite the only available master with a label and discard the unlabeled source.
3. Publish both labeled and unlabeled masters and rely on surrounding prose to explain their status.
4. Retain unlabeled masters privately, create deterministic disclosure-baked public masters, generate every public derivative from those labeled masters, and record the complete parent-child provenance chain.

### Decision

Use option 4, with the following publication rules:

1. Every project-published reconstruction image must contain the exact visible disclosure **“RECONSTRUCTION / NOT EVENT MEDIA”** baked into its pixels. HTML labels, captions, alt text, and metadata may repeat or expand the disclosure but do not replace the baked-in label.
2. The disclosure is applied to a lossless publication master through a deterministic transformation with a pinned script or tool version, bundled or identified font, label rectangle, position, padding, colors, opacity, and rendering parameters. Given the same source and parameters, the transformation must reproduce the same output.
3. The overlay operation may alter pixels only inside the recorded label rectangle. Decoded pixel values outside that rectangle must remain identical to the unlabeled input, and the verification result must be recorded. Metadata and file-hash changes caused by the new public file are expected.
4. Unlabeled masters are retained in a private, access-limited provenance archive. They must not be placed in public deployment paths, release archives, public repository history, or public asset URLs. A public provenance record may retain their asset identifier, dimensions, hash, and private-retention status without exposing the file or a private local path.
5. Only the labeled publication master and labeled public delivery derivatives are distributed by the project. Rights-controlled public reconstruction media and their delivery derivatives are released under CC BY 4.0 in accordance with `DEC-032`, `LICENSE.md`, and `RIGHTS_AND_ATTRIBUTION.md`.
6. Responsive derivatives are generated only from the labeled publication master. Each derivative must preserve a legible disclosure and inherit the parent asset ID or family ID, evidentiary role `reconstruction`, attribution identity, CC BY 4.0 status, source-parent hash, dimensions, format, transformation parameters, output hash, and modification history.
7. Resizing, resampling, color conversion, and lossy compression in responsive derivatives may change pixels throughout the image. The outside-label pixel-identity test applies to creation of the lossless labeled publication master, not to downstream responsive derivatives. Derivative provenance must make this distinction explicit.
8. Known creator, editor, creation date, AI involvement, provider, model, prompt, seed, input or reference source, background source, witness-review, and rights details are recorded when supported. Any unavailable value is stated as **unknown**; it must not be guessed, inferred from appearance, or silently omitted. Unknown production details do not change the image's `reconstruction` status.
9. The canonical record for each public reconstruction family is `site/assets/provenance.json`. It must link private-source identifiers and hashes, labeled public masters, responsive derivatives, transformations, disclosure status, rights status, and supersession history without publishing private machine paths.
10. A reconstruction remains post-event illustrative material. Neither a baked label, a provenance record, nor a CC BY 4.0 license turns it into evidence of the event or independent confirmation of the witness account.

### Rationale

A baked disclosure travels with the project's distributed image instead of depending on the webpage around it. Keeping the unlabeled master privately preserves a provenance baseline and permits correction without offering an ambiguity-prone public copy. A deterministic, region-bounded overlay and hash-linked derivative chain make the publication edit auditable and distinguish it from hidden image manipulation. Explicit unknown values preserve honesty where the production history cannot presently be recovered.

### Consequences and limitations

- The project must not deploy a reconstruction until its labeled public master, derivative lineage, rights status, and disclosure checks are complete.
- The label necessarily changes pixels inside its recorded rectangle and may cover underlying visual content there; placement must therefore minimize obstruction while remaining legible.
- Responsive JPEG or other delivery formats are not pixel-identical to the private or labeled master. Their integrity is established through recorded derivation and hashes, not an outside-label identity claim.
- Private retention does not make an unlabeled master part of the public release and does not authorize public access to it. This decision does not change that private file's separate rights or retention status.
- CC BY 4.0 permits downstream adaptation. The project can ensure that every copy it publishes carries the disclosure, but it cannot add a no-removal restriction beyond CC BY 4.0. Reusers must identify modifications, provide the required attribution and license information, and must not imply endorsement; the project should request that the non-event-media disclosure be preserved.
- A visible label is not a cryptographic authenticity mechanism. Hashes and transformation records establish the project's released lineage only.
- Unknown provider, model, prompt, source-layer, or editing details remain provenance limitations. If unknown inputs prevent confirmation that the project controls redistribution rights, the affected asset remains excluded from public distribution until resolved or replaced.
- Discovery of a hidden third-party component, identifying location detail, or other rights or privacy issue can require replacement or takedown, subject to the irrevocability limits already recorded in `DEC-032`.

### Review trigger

Review this decision if source or AI-production details are recovered; a creator, rights holder, or depicted person raises a rights or privacy concern; a deterministic rebuild produces a different hash or changes pixels outside the label rectangle; the disclosure becomes illegible or materially obstructive at a supported size; a new crop, aspect ratio, animation, video, or delivery format requires a different disclosure method; an unlabeled master is accidentally exposed; the public asset license changes; or a stronger authenticated-media standard is adopted.

### Traceability

- **Related claims:** `OBS-AMT-009`, `EST-AMT-022`; the media illustrate these and other retained claims but do not support them as event evidence
- **Related hypotheses:** none; reconstruction content must not encode a hypothesis as an observed feature
- **Related decisions:** `DEC-003`, `DEC-022`, `DEC-030`, `DEC-031`, `DEC-032`
- **Related files:** `RIGHTS_AND_ATTRIBUTION.md`, `LICENSE.md`, `site/assets/provenance.json`, `docs/01-case-amt01/02-sketch-and-surface-record.md`, `docs/07-reference/02-decision-log.md`, `docs/00-foundation/02-claim-ledger.md`
- **Required public disclosure:** `RECONSTRUCTION / NOT EVENT MEDIA`
- **Public license:** CC BY 4.0 for rights-controlled labeled public reconstruction media and their delivery derivatives
- **Private-source rule:** unlabeled masters are retained outside public repository, release, and deployment paths

---

## DEC-034 — Adopt steward-led public governance, DCO-based contributions, and guarded contribution channels

- **Status:** Accepted
- **Recorded date:** 2026-07-20
- **Scope:** Public governance, contributor licensing, community conduct, contribution routes, automated review gates, and witness-record authority
- **Supersedes:** none; formalizes the launch governance and contribution controls for the public repository and community
- **Superseded by:** `DEC-035` for private-intake clauses 7 and 8 only; otherwise none
- **Affected canonical documents:**
  - `CONTRIBUTING.md`
  - `GOVERNANCE.md`
  - `CODE_OF_CONDUCT.md`
  - `AI_USE_POLICY.md`
  - `PRIVACY.md`
  - `CONSENT_AND_TAKEDOWN.md`
  - `SECURITY.md`
  - `SUPPORT.md`
  - `DCO.txt`
  - `.github/**`
  - `LICENSE.md`
  - `RIGHTS_AND_ATTRIBUTION.md`
  - `docs/07-reference/02-decision-log.md`
  - `docs/00-foundation/02-claim-ledger.md`

### Context

Opening AMT-01 to public review creates two simultaneous needs. Contributors need clear, low-friction routes for bugs, corrections, sources, calculations, hypotheses, code, and media. The project must also protect a single retrospective witness record from silent rewriting, keep claim types and provenance intact, prevent public collection of sensitive witness material, and enforce the mixed-license and rights boundaries adopted in `DEC-032` and `DEC-033`.

At launch, the project remains steward-led and has limited maintainer capacity. The project steward is also the witness-curator, which requires an explicit boundary between authority over the accurate wording of a first-person memory and authority over external evidence or technical conclusions. Policy prose alone is not enough if public submission routes and automated checks permit contributors to bypass the stated rules.

### Inputs and evidence considered

- the claim-separation, frozen-record, ADR, amendment, licensing, and media-provenance rules in `DEC-003`, `DEC-004`, `DEC-026`, and `DEC-031` through `DEC-033`;
- the launch roles and decision thresholds described in `GOVERNANCE.md`;
- the repository's path-based Apache-2.0, CC BY 4.0, and CC BY-SA 4.0 license scopes;
- Developer Certificate of Origin 1.1 sign-off as a public contributor attestation of the right to submit a contribution;
- Contributor Covenant 3.0 as the basis for the project's adapted community conduct and enforcement policy;
- the privacy, consent, takedown, support, and security requirement that no raw witness intake operate through public GitHub, public Discord, or unsolicited private messages;
- the need to disclose AI assistance and independently verify AI-assisted text, code, calculations, citations, OCR, translation, data, and media;
- the structured issue forms, pull-request template, and repository validation workflow under `.github/**`;
- the operational need to check the case bundle, decision registers, media provenance, local links, JavaScript syntax, and DCO sign-offs before merge.

### Alternatives considered

1. Allow informal open contribution through unstructured issues, pull requests, and community messages with minimal role or traceability rules.
2. Keep the repository fully closed and publish only steward-authored releases.
3. Require every contributor to enter a separate Contributor License Agreement.
4. Accept unrestricted public or direct-message witness reports and personal evidence packages.
5. Publish governance and contribution prose but rely on contributors and reviewers to remember it without structured templates or continuous-integration checks.
6. Use steward-led launch governance, inbound-equals-outbound licensing with DCO sign-off, guarded public routes, narrow private triage, structured templates, and automated validation.

### Decision

Use option 6, with the following governance and contribution rules:

1. Launch roles are explicit. The **project steward** sets scope, appoints maintainers, approves governance and licensing changes, and retains final merge and release authority at launch. **Maintainers** triage, review, protect restricted material, and merge within delegated authority. **Domain reviewers** advise within a declared field and state assumptions and limitations. **Community moderators** enforce the conduct policy and route sensitive concerns. **Contributors** remain responsible for provenance, rights, disclosure, and corrections.
2. The steward's separate **witness-curator** authority is narrow. It covers whether wording accurately represents the steward's current first-person memory, whether a later amendment is genuinely the witness's statement, and whether a summary or reconstruction is described as consistent or inconsistent with that memory. It does not authenticate the external event, prove physical properties or origin, establish an external source as true, select a mechanism, override reproducible analysis or domain review, or promote an evidence tier.
3. Material witness amendments, evidence-tier changes, hypothesis-status changes, breaking schema or identifier changes, canonical-source changes, and material privacy, safety, AI, licensing, contribution, governance, reviewer, or release-policy changes require an ADR. Routine corrections remain subject to normal maintainer review without manufacturing a material decision record.
4. Contributions are accepted on an **inbound-equals-outbound** basis under the license assigned to their target path in `LICENSE.md` and `RIGHTS_AND_ATTRIBUTION.md`. Every commit must carry a Developer Certificate of Origin 1.1 `Signed-off-by` trailer. The project does not require a separate Contributor License Agreement at launch.
5. The adapted **Contributor Covenant 3.0** governs conduct across repository and community spaces. Moderation authority, reporting routes, confidentiality limits, and enforcement consequences are recorded in `CODE_OF_CONDUCT.md` and supporting policy documents.
6. Material AI assistance must be disclosed. Known tool, provider, model, purpose, inputs, affected output, and human verification are recorded; unavailable details are stated as unknown. A human contributor remains accountable for sources, claims, calculations, rights, privacy, and reproducibility. AI output is not a source, witness, domain reviewer, or independent verifier.
7. Private experience intake and raw witness-report intake remain closed. Raw reports, identifying information, exact private locations, sensitive media, credentials, and unreleased vulnerability details must not be submitted through GitHub issues or pull requests, public Discord channels, or unsolicited moderator messages.
8. Public orientation and discussion use the project Discord. Repository changes use the appropriate public GitHub issue form or pull request. A private direct message to a moderator is permitted only to request triage for conduct, privacy, security, or takedown concerns, using the minimum information needed to route the matter. A moderator direct message is not a witness-intake channel, evidence-submission route, or secure archive.
9. GitHub disables blank issues and provides structured forms for bugs or website problems, documentation or data corrections, source submissions, and analysis or hypothesis proposals. The pull-request template requires DCO confirmation, evidence type and source traceability, AI-use disclosure, rights and privacy review, media-provenance checks, validation status, and respect for the witness-record boundary.
10. Continuous integration runs on pushes and pull requests and checks the structured case bundle, decision-log and claim-ledger consistency, public media provenance and hashes, local documentation and website links, JavaScript syntax, and DCO sign-off for every pull-request commit. Passing automation is necessary but does not replace substantive maintainer or domain review.
11. Merge or catalogue acceptance means that material has entered the project under its stated provenance, license, uncertainty, and review status. It does not endorse a contributor's preferred interpretation or authenticate the event, a source report, a calculation input, or a proposed mechanism.

### Rationale

This model opens useful work to public scrutiny without creating an unmanaged evidence intake system or confusing ownership of the witness account with authority over analysis. Inbound-equals-outbound licensing and DCO sign-off give contributors a transparent, lightweight rights process suited to a small public project, while avoiding the administrative and legal overhead of a CLA at launch. Contributor Covenant 3.0 supplies a recognizable conduct baseline. Structured forms and CI turn policy into repeatable submission and review gates rather than leaving critical privacy, provenance, AI, media, and sign-off rules only in prose.

### Consequences and limitations

- The project steward remains the final merge and release authority at launch. This provides a clear decision path but creates centralization and continuity risk until additional maintainers are appointed.
- Witness-curator confirmation can establish whether project wording accurately represents the witness's present account, but it cannot serve as independent corroboration or settle technical disagreement.
- A contribution may be catalogued even when the project does not endorse its conclusion, and it may be rejected or left provisional despite being interesting if provenance, rights, safety, privacy, or review requirements are incomplete.
- DCO sign-offs are public and persistent in commit history. Contributors must use an identity and email address they are authorized and comfortable to publish, and every pull-request commit must pass the sign-off check.
- DCO replaces a launch-time CLA but does not eliminate the need to verify third-party rights, consent, license compatibility, trademarks, personal rights, or AI-provider terms.
- AI disclosure supports review but does not prove correctness, originality, or reproducibility; human verification remains mandatory.
- Closing raw witness intake limits near-term dataset growth. It avoids collecting material before consent, storage, access, retention, redaction, deletion, and takedown processes are operational.
- A private moderator direct message is triage, not intake. Discord remains a third-party service, and sensitive detail must be minimized until an appropriate route is confirmed.
- Templates and CI catch structured omissions and mechanical failures, but they cannot determine factual truth, source authenticity, domain validity, or whether a conclusion is well supported.
- Contribution, privacy, security, moderation, and governance policies must be reviewed when dedicated private channels become operational or when additional maintainers or moderators are appointed.

### Review trigger

Review this decision when the project appoints additional maintainers or introduces shared or elected authority; forms a legal entity or foundation; operates a dedicated private reporting, security, takedown, or consent-based witness-intake system; finds DCO sign-off insufficient for a material contribution class; considers a CLA; changes its license scopes; adds project-controlled accounts, storage, analytics, or submission services; adopts a later Contributor Covenant version; or repeated contribution and moderation experience shows that the launch roles, templates, or automated gates are inadequate.

### Traceability

- **Related claims:** none directly; this decision governs how claims and amendments may enter the public project record
- **Related hypotheses:** none directly; it governs submission and review without choosing a hypothesis
- **Related decisions:** `DEC-003`, `DEC-004`, `DEC-025`, `DEC-026`, `DEC-031`, `DEC-032`, `DEC-033`
- **Related files:** `CONTRIBUTING.md`, `GOVERNANCE.md`, `CODE_OF_CONDUCT.md`, `AI_USE_POLICY.md`, `PRIVACY.md`, `CONSENT_AND_TAKEDOWN.md`, `SECURITY.md`, `SUPPORT.md`, `DCO.txt`, `.github/**`, `LICENSE.md`, `RIGHTS_AND_ATTRIBUTION.md`, `docs/07-reference/02-decision-log.md`, `docs/00-foundation/02-claim-ledger.md`
- **Contribution attestation:** [Developer Certificate of Origin 1.1](https://developercertificate.org/)
- **Conduct baseline:** [Contributor Covenant 3.0](https://www.contributor-covenant.org/version/3/0/)
- **Public discussion route:** `https://discord.gg/JVvHf5cXhs`
- **Private-route boundary:** moderator direct messages are limited to conduct, privacy, security, and takedown triage and are not witness intake

---

## DEC-035 — Adopt a consent-based private Tally witness intake with explicit launch and data-handling gates

- **Status:** Accepted
- **Recorded date:** 2026-07-20
- **Scope:** Private witness intake, consent, data minimization, access, retention, publication permission, and privacy rights
- **Supersedes:** `DEC-034` clauses 7 and 8 only after the launch gates below are complete; until then the prior closure remains in force, and the prohibition on intake through GitHub, Discord, or unsolicited messages remains in force after activation
- **Superseded by:** none
- **Affected canonical documents:**
  - `PRIVACY.md`
  - `CONSENT_AND_TAKEDOWN.md`
  - `GOVERNANCE.md`
  - `CONTRIBUTING.md`
  - `AI_USE_POLICY.md`
  - `SUPPORT.md`
  - `README.md`
  - `DOCUMENTATION_ARCHITECTURE.md`
  - `MANIFEST.md`
  - `RIGHTS_AND_ATTRIBUTION.md`
  - `docs/07-reference/02-decision-log.md`
  - `docs/00-foundation/02-claim-ledger.md`
  - `docs/07-reference/04-change-log.md`

### Context

`DEC-034` deliberately kept private witness intake closed until the project could state what it would collect, why it would collect it, who could access it, how long it would be retained, how publication permission would be separated from private review, and how a submitter could exercise applicable privacy rights. The project also wants to learn from other witness accounts without asking people to expose raw reports or identifying details in public GitHub or Discord spaces.

A dedicated external form can now provide a narrow private route without adding website accounts, a custom database, or informal evidence collection through moderator messages. Using a third-party service creates its own processing, retention, and account-security dependencies, so opening the route requires an explicit policy rather than only a link.

### Inputs and evidence considered

- the public/private, witness-curator, contribution, and review boundaries in `DEC-003`, `DEC-004`, `DEC-031`, and `DEC-034`;
- the requirement in `DEC-032` that private intake material and consent records remain outside public license grants unless separately authorized;
- the project objective of building comparable, structured case records without treating submission as authentication;
- the fields and routing in the Tally form, including age confirmation, private-review consent, event description, memory-versus-estimate distinctions, optional ordinary follow-up details, restricted optional files, permission choices, and access, copy, correction, consent-withdrawal, deletion, and other privacy-request routes;
- Tally's [GDPR information](https://tally.so/help/gdpr), which describes Tally as processor for respondent data stored on behalf of the form creator;
- Tally's [submission-retention documentation](https://tally.so/help/submissions-data-retention), which identifies automatic retention control as a Business feature and requires manual deletion when that control is unavailable;
- Tally's [deletion documentation](https://tally.so/help/how-to-delete-and-recover-form-data), which describes its Trash and permanent-deletion lifecycle; and
- data-minimization, purpose-limitation, access-control, consent, correction, and deletion requirements appropriate to a small steward-led project.

### Alternatives considered

1. Keep private experience intake closed indefinitely.
2. Accept reports through public GitHub issues or Discord channels.
3. Accept reports through unsolicited moderator direct messages or informal email.
4. Build project accounts, a custom intake database, and an on-site submission system before accepting any report.
5. Use a dedicated Tally form with explicit consent, minimized optional identity fields, curator-only project access, a manual retention process, separate publication permission, and privacy-rights routing, with public website deployment gated on readable public policies and operational checks.

### Decision

Use option 5 under the following rules:

1. Publish the [AMT-01 witness-intake form](https://tally.so/r/5BgZMb) with the controller identified as the individual project operator associated with GitHub `@verbitski` and the durable private contact `werbitsky@gmail.com`. This form is the only private route for a new witness report and the primary route for a privacy request concerning an earlier private submission. GitHub, public Discord, ordinary email, and unsolicited moderator messages remain non-intake channels. Do not deploy the public website CTA until the linked privacy documents are publicly readable and the intended Tally account access, security, integrations, and retention procedure have been checked.
2. Tally hosts the form and acts as the processor for respondent data. At the project level, access to raw responses is limited to the project steward acting as private-intake curator. Tally and its authorized service providers may process the data as needed to operate the service under their own terms and privacy notice. Google reCAPTCHA is used for abuse prevention and is disclosed in the privacy notice.
3. The launch form is for submitters who confirm they are at least 18. It collects only the routing, consent, general event context, narrative, appearance, movement, duration, environmental, other-witness, media, memory-versus-estimate, confidence, permission, follow-up, and request details needed for structured review.
4. Name, pseudonym, ordinary follow-up email, and uploads are optional for a new report. A response email is required for the privacy-request route. Uploads are limited to five files of 10 MB each and restricted to images, video, audio, PDF, and plain text. Submitters are told to use a general location, avoid home addresses and precise private locations, remove unnecessary metadata, and omit identity documents, medical or legal records, credentials, classified information, and third-party personal data.
5. Submission authorizes private storage and review only. It does not authenticate an event, guarantee follow-up or inclusion, grant a public license, or authorize publication. Public quotation, repository inclusion, dataset release, media use, attribution, anonymity, redaction, and licensing require separate, specific permission.
6. Every raw Tally submission is reviewed and manually deleted from the active response list no later than 12 months after submission and may be deleted sooner. The current Tally plan does not enforce this automatically. A deleted response may remain in Tally Trash for up to 90 days unless emptied earlier. After permanent deletion, Tally states that clearing form data from backups can take up to 90 additional days.
7. Retaining identified material beyond the raw-response limit requires a separate agreement with the submitter that names the material, purpose, access boundary, period, publication status, and withdrawal or deletion consequences. Acceptance for further review does not create that agreement or authorize publication. The original raw Tally response remains subject to the 12-month active-list limit.
8. Access, copy, correction, consent-withdrawal, deletion, and other privacy requests use the same form and require a response email. They are handled as soon as practicable, with a target of response or initial assessment within 30 days. The target is not a guaranteed legal deadline; verification, safety, provider, backup, or legal complexity may require more time.
9. Private Tally submissions are reviewed manually. They are not sent to an AI system unless a later workflow obtains separate, specific permission and documents provider terms, purpose, access, retention, redaction, deletion, and human review under `AI_USE_POLICY.md`.

### Rationale

This route lets a person provide a structured account without making it public and gives the project a consistent way to separate memory, estimate, optional identity, optional media, use permission, and later data-subject requests. Tally avoids the operational and security burden of custom accounts and a project-managed database, while explicit processor, access, retention, and deletion disclosures make the third-party dependency visible.

Keeping publication consent separate prevents a private report from silently becoming an open-source asset or public case record. Minimizing location, identity, contact, and file collection reduces harm if an account or provider is compromised. A manual 12-month review cycle is implementable on the current plan without falsely claiming that Tally automatically enforces it.

### Consequences and limitations

- The published Tally URL can receive direct-link submissions before the project website is deployed. Each submission remains an unverified lead rather than evidence authenticated by the project, and the website release remains gated on public policy links and operational checks.
- The project steward becomes the sole project-level custodian of raw intake at launch, creating centralization, availability, and account-security risk.
- Respondents depend on Tally's infrastructure, terms, security, Trash behavior, backup lifecycle, and service continuity. The project cannot promise immediate erasure from every provider recovery layer.
- Manual retention requires a recurring curator review. Missing that review would violate project policy even though the provider would continue storing responses.
- The form deliberately excludes minors and discourages highly sensitive or precise private information. This limits the reports that can safely be accepted through the route.
- A private report cannot be published, licensed, or used as an open dataset row without an additional permission and curation step.
- Optional ordinary follow-up information protects anonymity but may make clarification more difficult. The privacy-request route requires a response email, and a private reference phrase provides an additional locator but is not proof of identity.
- The 30-day target is an operational objective, not a guarantee, and does not replace any rights or deadlines that applicable law may independently require.

### Review trigger

Review this decision if the controller identity or contact route, form owner, URL, questions, purpose, age boundary, processor, CAPTCHA provider, allowed file types, workspace plan, access list, storage region, security controls, integrations, retention capability, Trash or backup lifecycle, publication workflow, AI-use boundary, or privacy-request route changes; if additional curators require access; if the project forms a legal entity; if reports involving minors or highly sensitive data are proposed; if a privacy or security incident occurs; if the manual 12-month deletion review is missed; if submission volume exceeds safe curator capacity; or if qualified legal or privacy review identifies a stronger requirement.

### Traceability

- **Related claims:** none directly; private submissions do not enter the claim ledger merely by being received
- **Related hypotheses:** none; the intake route does not favor an explanation
- **Related decisions:** `DEC-003`, `DEC-004`, `DEC-025`, `DEC-026`, `DEC-031`, `DEC-032`, `DEC-034`
- **Related files:** `PRIVACY.md`, `CONSENT_AND_TAKEDOWN.md`, `GOVERNANCE.md`, `CONTRIBUTING.md`, `AI_USE_POLICY.md`, `SUPPORT.md`, `README.md`, `DOCUMENTATION_ARCHITECTURE.md`, `MANIFEST.md`, `RIGHTS_AND_ATTRIBUTION.md`, `docs/07-reference/02-decision-log.md`, `docs/00-foundation/02-claim-ledger.md`, `docs/07-reference/04-change-log.md`
- **Private intake route:** `https://tally.so/r/5BgZMb`
- **Processor documentation:** `https://tally.so/help/gdpr`
- **Retention documentation:** `https://tally.so/help/submissions-data-retention`
- **Deletion documentation:** `https://tally.so/help/how-to-delete-and-recover-form-data`
- **CAPTCHA documentation:** `https://tally.so/help/recaptcha`

---

## DEC-036 — Rename the canonical repository to include “UFO” while retaining the AMT-01 case identifier

- **Status:** Accepted
- **Recorded date:** 2026-07-20
- **Scope:** Canonical public repository name, source and attribution links, website navigation, and citation metadata
- **Supersedes:** the old repository URL only; no earlier research, evidence, licensing, or governance decision is superseded
- **Superseded by:** none
- **Affected canonical documents:**
  - `README.md`
  - `MANIFEST.md`
  - `NOTICE`
  - `CITATION.cff`
  - `LICENSE.md`
  - `RIGHTS_AND_ATTRIBUTION.md`
  - `site/index.html`
  - `site/site-config.js`
  - `docs/00-foundation/02-claim-ledger.md`
  - `docs/07-reference/02-decision-log.md`
  - `docs/07-reference/04-change-log.md`

### Context

The initial public repository slug, `amt-01-open-investigation`, preserved the internal case identifier and the project's open method, but it did not tell a first-time GitHub visitor what kind of investigation the repository contained. The public website already describes the work as a witness-led UFO investigation while keeping the reported object's identity and origin unresolved.

The repository name is part of the canonical source and attribution record. Changing it therefore requires a documented migration rather than an unrecorded cosmetic edit.

### Inputs and evidence considered

- the user's preference for a clearer GitHub name that includes the familiar term “UFO”;
- the established use of **AMT-01** as the stable case identifier;
- the project's explicit rule that “UFO” means unidentified in this context and does not establish extraterrestrial origin;
- the existing public website at `https://amt01.vercel.app/`, whose address does not need to change with the repository slug;
- GitHub's repository-rename behavior, which preserves repository identity and redirects the former URL; and
- the licensing and citation requirement that project-controlled material point to one current canonical source.

### Alternatives considered

1. Keep `amt-01-open-investigation` and explain the topic only in the description and README.
2. Replace AMT-01 with a generic UFO repository name, improving immediate recognition but weakening continuity with the case record.
3. Rename the repository to `amt-01-ufo-investigation`, retaining the case identifier while adding a plain-language subject cue.

### Decision

Use option 3. The canonical repository is `https://github.com/verbitski/amt-01-ufo-investigation`. Keep **AMT-01 Open Investigation** as the project title and **AMT-01** as the case identifier. Continue to use “UFO” descriptively, without treating origin or mechanism as established.

Update all active website, policy, license, attribution, citation, and repository-navigation links to the new canonical URL. Preserve the former URL only where it is explicitly part of the historical decision record.

### Rationale

The new slug makes the subject understandable before a visitor opens the README, while AMT-01 preserves continuity across the witness record, dataset, documentation, and website. This improves discoverability without changing the epistemic boundary of the investigation.

### Consequences and limitations

- Existing GitHub history, issues, pull requests, stars, and repository identity remain attached to the renamed repository.
- GitHub redirects the former repository address, but current project material should use the new address directly rather than depend on that redirect.
- Existing local clones may need their `origin` URL updated.
- The website remains at `https://amt01.vercel.app/`; this decision does not rename the Vercel project or public site.
- Adding “UFO” improves recognition but may carry cultural associations. Project copy must continue to state that unidentified does not mean extraterrestrial.

### Review trigger

Review this decision if AMT-01 becomes one case within a broader multi-case repository, the public project title changes, the website receives a permanent custom domain, the repository moves to an organization, the old GitHub slug is reused, or the current name repeatedly causes a material misunderstanding of scope.

### Traceability

- **Related claims:** none; this decision changes the public source address, not the witness record
- **Related hypotheses:** none
- **Related decisions:** `DEC-002`, `DEC-025`, `DEC-026`, `DEC-032`, `DEC-034`
- **Former repository URL:** `https://github.com/verbitski/amt-01-open-investigation`
- **Canonical repository URL:** `https://github.com/verbitski/amt-01-ufo-investigation`
- **Public website:** `https://amt01.vercel.app/`

---

## 5. Future decision procedure

When a material change is proposed:

1. identify the affected observation, calculation, hypothesis, model, source rule, or project scope;
2. assign the next sequential `DEC-###` identifier;
3. record the actual ADR recording date and use `unknown` or `not documented` for unavailable historical dates;
4. state status, scope, supersession, and affected canonical documents;
5. record inputs, evidence, and alternatives before stating the chosen outcome;
6. explain the rationale in terms of retained evidence and project rules;
7. list consequences, limitations, explicit review triggers, and typed traceability;
8. apply `DEC-031` when a witness claim is amended;
9. update all affected canonical documents and the claim ledger when applicable;
10. update the change log;
11. regenerate a master dossier only when its deterministic generator and drift check are available; otherwise omit it from the release.
