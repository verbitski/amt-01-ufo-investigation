---
title: "Lift, Downwash, and Energy Constraints"
project: "AMT-01 Open Investigation"
section: "derived-analysis"
version: "1.2"
last_updated: "2026-07-20"
status: "analysis"
canonical: "yes"
---

# Lift, Downwash, and Energy Constraints

## Evidence boundary

This document is a scenario analysis. Its size, speed, height, area, and mass inputs are not measurements. They are later witness estimates or explicit test assumptions. The calculations show consequences **if** those inputs are approximately right; they do not authenticate the object, determine its mass, or establish an exotic support mechanism.

## 1. Aerodynamic lift at the later-estimated speed

Dynamic pressure:

\[q=\frac{1}{2}\rho v^2\]

Using air density approximately 1.2 kg/m³ and velocity 2.7–4.2 m/s:

\[q\approx4.4-10.6\;\text{Pa}\]

Lift:

\[L=qSC_L\]

For area 7.5–12 m² and an optimistic lift coefficient of 1:

\[L\approx33-127\;\text{N}\]

Equivalent supported mass:

\[m\approx3.4-13\;\text{kg}\]

Even at an unusually high 
\(C_L=2\), support remains only on the order of approximately 7–26 kg.

### Interpretation

Under these assumed inputs, ordinary wing lift would support only a very light object. This does not rule out a lightweight body, a scale or speed error, an unrecognized airflow condition, or a different geometry.

## 2. Conventional hover through airflow

For an ideal actuator disk:

\[v_i=\sqrt{\frac{T}{2\rho A}}\]

\[P_{ideal}=Tv_i\]

where \(T=mg\), \(A\) is effective disk area, and \(v_i\) is induced velocity.

For \(A\approx10\text{ m}^2\):

| Assumed mass | Ideal induced velocity | Ideal hover power |
|---:|---:|---:|
| 20 kg | ~2.9 m/s | ~0.6 kW |
| 50 kg | ~4.5 m/s | ~2.2 kW |
| 100 kg | ~6.4 m/s | ~6.3 kW |
| 300 kg | ~11.1 m/s | ~32.6 kW |
| 500 kg | ~14.3 m/s | ~70 kW |
| 1000 kg | ~20.2 m/s | ~198 kW |

These are ideal lower bounds. Real systems add losses, noise, nonuniform flow, and thermal load.

### Interpretation

Under the later height and proximity estimates, an ordinary air-reaction system supporting more than a few tens of kilograms would normally be expected to produce airflow and acoustic signatures. The project has not reconstructed the actual ambient noise, perceptual thresholds, ground response, or object mass, so the remembered absence of an obvious signature is a constraint to test rather than a measured null.

## 3. Distributed support pressure

If an unknown interface supports the object uniformly:

\[p=\frac{mg}{S}\]

For a nominal 9.6 m² area:

| Assumed mass | Required average support pressure | Fraction of sea-level atmospheric pressure |
|---:|---:|---:|
| 50 kg | ~51 Pa | ~0.05% |
| 100 kg | ~102 Pa | ~0.10% |
| 300 kg | ~306 Pa | ~0.30% |
| 1000 kg | ~1019 Pa | ~1.0% |

### Interpretation

The integrated force is large, but the average pressure over a broad assumed area is modest. A distributed-support abstraction is therefore useful for bookkeeping. This calculation supplies no evidence that such an interface existed or is physically realizable.

## 4. Horizontal movement after weight compensation

At nominal velocity 3.5 m/s:

\[q\approx7.35\;\text{Pa}\]

\[D=qC_DA\]

If the effective drag area \(C_DA\) is 1–5 m², drag is approximately 7–37 N. Translation power is then tens to low hundreds of watts.

### Interpretation

In the hypothetical case where support is already provided, the estimated slow translation requires less force than weight support. A small tilt in a hypothetical resultant could provide that component while producing little visible attitude change. This is a model consequence, not an observation of a force system.

## 5. Wind rejection

The account describes motion approximately perpendicular to a shore-to-sea breeze, with no drift noticed. If those recollections are accurate, the sequence is compatible with one or more of:

- high inertia;
- active lateral force compensation;
- weak coupling to surrounding airflow;
- some combination of the above.

It is not by itself evidence for a field system, and the wind was not instrumentally measured.
