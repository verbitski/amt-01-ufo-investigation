---
title: "Video Mining Workstream Status"
project: "AMT-01 Open Investigation"
section: "external-evidence"
version: "1.2"
last_updated: "2026-07-20"
status: "paused"
canonical: "yes"
---

# Video Mining Workstream Status

## Original idea

Search large public video corpora for one-to-few-frame fast transients, then use motion detection and object models to identify candidates that human editors missed.

An internal prototype concept named **MEVE Evidence Miner v0.1** was explored with:

- frame extraction;
- stabilization;
- frame differencing/background subtraction;
- transient/streak detection;
- optional YOLO filtering;
- angular-speed estimation;
- artifact flags;
- candidate reports.

The prototype is not included in this public release, and no result from it is admitted as case evidence.

## Core limitation discovered

A single camera usually provides angular velocity, not linear speed:

\[v=R\dot\theta\]

where distance \(R\) is often unknown. A nearby insect can cross a frame faster than a distant aircraft in angular terms.

## Decision

Broad YouTube evidence farming is paused.

Reasons:

- very high false-positive rate;
- poor metadata;
- unknown distance and lens geometry;
- compression and rolling-shutter artifacts;
- low expected value relative to current theory work;
- risk of spending time confirming only apparent speed.

## Conditions for reactivation

Resume only if the input set has one or more of:

- known camera calibration;
- fixed surveillance geometry;
- multiple camera views;
- distance anchors;
- preserved original files;
- synchronized audio;
- water/cloud/terrain interaction useful for physical constraints.
