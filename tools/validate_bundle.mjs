#!/usr/bin/env node

import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const inputPath = resolve(process.argv[2] ?? "data/cases/amt-01.migration-example.json");
const schemaPath = resolve(process.argv[3] ?? "schemas/v1/case-bundle.schema.json");

const loadJson = (path) => JSON.parse(readFileSync(path, "utf8"));
const bundle = loadJson(inputPath);
const schema = loadJson(schemaPath);
const errors = [];

const check = (condition, message) => {
  if (!condition) errors.push(message);
};

const idPattern = /^[A-Z][A-Z0-9-]{2,79}$/;
const hashPattern = /^[a-f0-9]{64}$/;

check(schema.$schema === "https://json-schema.org/draft/2020-12/schema", "Schema must declare JSON Schema 2020-12.");
check(/^\d+\.\d+\.\d+$/.test(bundle.schema_version ?? ""), "schema_version must be semantic x.y.z.");
check(bundle.case && typeof bundle.case === "object", "case object is required.");
check(Array.isArray(bundle.claims), "claims array is required.");
check(Array.isArray(bundle.sources), "sources array is required.");
check(Array.isArray(bundle.assets), "assets array is required.");
check(Array.isArray(bundle.reviews), "reviews array is required.");

const claims = new Map((bundle.claims ?? []).map((item) => [item.claim_id, item]));
const sources = new Map((bundle.sources ?? []).map((item) => [item.source_id, item]));
const assets = new Map((bundle.assets ?? []).map((item) => [item.asset_id, item]));
const reviews = new Map((bundle.reviews ?? []).map((item) => [item.review_id, item]));
const allEntities = [bundle.case, ...(bundle.claims ?? []), ...(bundle.sources ?? []), ...(bundle.assets ?? []), ...(bundle.reviews ?? [])];
const allIds = allEntities
  .map((item) => item?.claim_id ?? item?.source_id ?? item?.asset_id ?? item?.review_id ?? item?.case_id)
  .filter(Boolean);

for (const id of allIds) check(idPattern.test(id), `Invalid ID: ${id}`);
check(new Set(allIds).size === allIds.length, "Entity IDs must be globally unique in the bundle.");
check(claims.size === (bundle.claims ?? []).length, "Claim IDs must be unique.");
check(sources.size === (bundle.sources ?? []).length, "Source IDs must be unique.");
check(assets.size === (bundle.assets ?? []).length, "Asset IDs must be unique.");
check(reviews.size === (bundle.reviews ?? []).length, "Review IDs must be unique.");

const caseId = bundle.case?.case_id;
for (const id of bundle.case?.claim_ids ?? []) check(claims.has(id), `Case references missing claim: ${id}`);
for (const id of bundle.case?.source_ids ?? []) check(sources.has(id), `Case references missing source: ${id}`);
for (const id of bundle.case?.asset_ids ?? []) check(assets.has(id), `Case references missing asset: ${id}`);
for (const id of bundle.case?.evidence_assessment?.review_ids ?? []) check(reviews.has(id), `Evidence assessment references missing review: ${id}`);

for (const claim of bundle.claims ?? []) {
  check(claim.case_id === caseId, `${claim.claim_id}: case_id does not match bundle case.`);
  check(typeof claim.statement === "string" && claim.statement.length > 0, `${claim.claim_id}: statement is required.`);
  check(claim.normalized && typeof claim.normalized.value_status === "string", `${claim.claim_id}: normalized value_status is required.`);

  if (["OBS", "EXT"].includes(claim.type)) {
    check(Array.isArray(claim.evidence_links) && claim.evidence_links.length > 0, `${claim.claim_id}: ${claim.type} requires evidence_links.`);
  }
  if (claim.type === "EST") check(typeof claim.estimate_basis === "string" && claim.estimate_basis.length > 0, `${claim.claim_id}: EST requires estimate_basis.`);
  if (claim.type === "DER") {
    check(Array.isArray(claim.derived_from) && claim.derived_from.length > 0, `${claim.claim_id}: DER requires derived_from.`);
    check(claim.method && typeof claim.method.equation === "string", `${claim.claim_id}: DER requires a method/equation.`);
    for (const id of claim.derived_from ?? []) check(claims.has(id), `${claim.claim_id}: derived_from references missing claim ${id}.`);
  }
  if (claim.normalized?.value_status === "not_detected") {
    check(Boolean(claim.observation_conditions), `${claim.claim_id}: not_detected requires observation_conditions.`);
    check(claim.observation_conditions?.calibrated_threshold !== undefined, `${claim.claim_id}: calibrated threshold must be explicit, including null.`);
    check(typeof claim.observation_conditions?.threshold_unknown_reason === "string", `${claim.claim_id}: unknown detection threshold needs a reason.`);
  }
  for (const link of claim.evidence_links ?? []) check(sources.has(link.source_id), `${claim.claim_id}: evidence link references missing source ${link.source_id}.`);
  for (const relation of claim.relations ?? []) {
    if (["derived_from", "supports", "contradicts", "supersedes"].includes(relation.relation)) {
      check(claims.has(relation.target_id), `${claim.claim_id}: relation references missing claim ${relation.target_id}.`);
    }
  }
  const quantity = claim.normalized?.quantity;
  if (quantity) {
    check(typeof quantity.unit === "string" && quantity.unit.length > 0, `${claim.claim_id}: quantity unit is required.`);
    if (quantity.min !== undefined && quantity.max !== undefined) check(quantity.min <= quantity.max, `${claim.claim_id}: quantity min must not exceed max.`);
  }
}

for (const source of bundle.sources ?? []) {
  check((source.case_ids ?? []).includes(caseId), `${source.source_id}: source must reference the bundle case.`);
  check(source.rights && Object.hasOwn(source.rights, "redistribution_allowed"), `${source.source_id}: rights/redistribution state must be explicit.`);
  check(source.privacy && typeof source.privacy.redaction_status === "string", `${source.source_id}: privacy/redaction status is required.`);
}

for (const asset of bundle.assets ?? []) {
  check((asset.case_ids ?? []).includes(caseId), `${asset.asset_id}: asset must reference the bundle case.`);
  check(hashPattern.test(asset.sha256 ?? ""), `${asset.asset_id}: SHA-256 is missing or invalid.`);
  if (asset.synthetic === true) {
    check(["illustrative", "reconstruction"].includes(asset.evidentiary_role), `${asset.asset_id}: synthetic media cannot be primary evidence.`);
    check(Boolean(asset.generation), `${asset.asset_id}: synthetic media requires generation provenance.`);
  }
  for (const parentId of asset.parent_asset_ids ?? []) check(assets.has(parentId), `${asset.asset_id}: missing parent asset ${parentId}.`);
}

if (errors.length) {
  console.error(`Validation failed with ${errors.length} error(s):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`Validation passed: ${bundle.case.case_id}; ${claims.size} claims, ${sources.size} sources, ${assets.size} assets, ${reviews.size} reviews.`);
