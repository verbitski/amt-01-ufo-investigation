#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

const args = process.argv.slice(2);
const strict = args.includes('--strict');
const paths = args.filter((arg) => arg !== '--strict');

if (paths.length !== 2) {
  console.error('Usage: node tools/audit_decision_log.mjs <decision-log.md> <claim-ledger.md> [--strict]');
  process.exit(64);
}

const [decisionLogPath, claimLedgerPath] = paths.map((item) => path.resolve(item));

for (const filePath of [decisionLogPath, claimLedgerPath]) {
  if (!fs.existsSync(filePath)) {
    console.error(`File not found: ${filePath}`);
    process.exit(66);
  }
}

const decisionLog = fs.readFileSync(decisionLogPath, 'utf8');
const claimLedger = fs.readFileSync(claimLedgerPath, 'utf8');

const errors = [];
const warnings = [];

function countBy(items) {
  const counts = new Map();
  for (const item of items) counts.set(item, (counts.get(item) ?? 0) + 1);
  return counts;
}

function duplicates(items) {
  return [...countBy(items)].filter(([, count]) => count > 1).map(([item, count]) => `${item} (${count})`);
}

function numericId(id) {
  return Number(id.slice(4));
}

function sameIdSet(labelA, idsA, labelB, idsB) {
  const a = new Set(idsA);
  const b = new Set(idsB);
  const onlyA = [...a].filter((id) => !b.has(id));
  const onlyB = [...b].filter((id) => !a.has(id));
  if (onlyA.length || onlyB.length) {
    errors.push(`${labelA}/${labelB} ID sets differ; only ${labelA}: ${onlyA.join(', ') || 'none'}; only ${labelB}: ${onlyB.join(', ') || 'none'}`);
  }
}

function parseTable(markdown, startMarker, endMarker = null) {
  const start = markdown.indexOf(startMarker);
  if (start < 0) return [];
  const tail = markdown.slice(start);
  const end = endMarker ? tail.indexOf(endMarker) : -1;
  const region = end >= 0 ? tail.slice(0, end) : tail;
  const rows = [];
  for (const line of region.split('\n')) {
    const match = line.match(/^\| `?(DEC-\d{3})`? \| (.*?) \| (.*?) \|$/);
    if (match) rows.push({ id: match[1], title: match[2].trim(), status: match[3].trim() });
  }
  return rows;
}

function parseDetailedRecords(markdown) {
  const starts = [...markdown.matchAll(/^## (DEC-\d{3}) — (.+)$/gm)];
  return starts.map((match, index) => {
    const start = match.index;
    const end = index + 1 < starts.length ? starts[index + 1].index : markdown.length;
    const body = markdown.slice(start, end);
    const headings = [...body.matchAll(/^### (.+)$/gm)].map((item) => item[1].trim());
    const metadata = new Map(
      [...body.matchAll(/^- \*\*([^*]+):\*\*\s*(.*)$/gm)].map((item) => [item[1].trim(), item[2].trim()]),
    );
    return { id: match[1], title: match[2].trim(), body, headings, metadata };
  });
}

const indexRows = parseTable(decisionLog, '## 4. Decision index', '# Detailed Decision Records');
const detailed = parseDetailedRecords(decisionLog);
const ledgerRows = parseTable(claimLedger, '## Project decisions');
const indexIds = indexRows.map((row) => row.id);
const detailIds = detailed.map((record) => record.id);
const ledgerIds = ledgerRows.map((row) => row.id);

for (const [label, ids] of [['decision index', indexIds], ['detailed records', detailIds], ['ledger decision table', ledgerIds]]) {
  const repeated = duplicates(ids);
  if (repeated.length) errors.push(`${label} contains duplicate IDs: ${repeated.join(', ')}`);
}

sameIdSet('decision index', indexIds, 'detailed records', detailIds);
sameIdSet('decision index', indexIds, 'ledger decision table', ledgerIds);

const ordered = [...new Set(indexIds)].sort((a, b) => numericId(a) - numericId(b));
if (ordered.length) {
  const expected = Array.from({ length: numericId(ordered.at(-1)) }, (_, index) => `DEC-${String(index + 1).padStart(3, '0')}`);
  if (JSON.stringify(ordered) !== JSON.stringify(expected)) errors.push('Decision index is not a contiguous sequence beginning at DEC-001.');
}

const indexById = new Map(indexRows.map((row) => [row.id, row]));
const detailById = new Map(detailed.map((record) => [record.id, record]));
const ledgerById = new Map(ledgerRows.map((row) => [row.id, row]));

for (const id of indexIds) {
  const indexRow = indexById.get(id);
  const record = detailById.get(id);
  const ledgerRow = ledgerById.get(id);
  if (record && record.metadata.get('Status') !== indexRow.status) {
    errors.push(`${id} status differs between index (${indexRow.status}) and detailed record (${record.metadata.get('Status') ?? 'missing'}).`);
  }
  if (ledgerRow && ledgerRow.status !== indexRow.status) {
    errors.push(`${id} status differs between index (${indexRow.status}) and ledger (${ledgerRow.status}).`);
  }
  if (ledgerRow) {
    const clean = (value) => value.toLowerCase().replace(/[.]/g, '').replace(/\s+/g, ' ').trim();
    if (clean(ledgerRow.title) !== clean(indexRow.title)) warnings.push(`${id} wording differs between the decision index and ledger.`);
  }
}

const allLedgerDecisionIds = [...claimLedger.matchAll(/^\| `?(DEC-\d{3})`? \|/gm)].map((match) => match[1]);
const ledgerWideDuplicates = duplicates(allLedgerDecisionIds);
if (ledgerWideDuplicates.length) warnings.push(`Decision IDs appear more than once across the full claim ledger: ${ledgerWideDuplicates.join(', ')}`);

const requiredMetadata = ['Status', 'Recorded date', 'Scope', 'Supersedes', 'Superseded by', 'Affected canonical documents'];
const requiredHeadings = [
  'Context',
  'Inputs and evidence considered',
  'Alternatives considered',
  'Decision',
  'Rationale',
  'Consequences and limitations',
  'Review trigger',
  'Traceability',
];

const metadataCoverage = Object.fromEntries(requiredMetadata.map((field) => [field, 0]));
const headingCoverage = Object.fromEntries(requiredHeadings.map((field) => [field, 0]));

for (const record of detailed) {
  for (const field of requiredMetadata) if (record.metadata.has(field)) metadataCoverage[field] += 1;
  for (const heading of requiredHeadings) if (record.headings.includes(heading)) headingCoverage[heading] += 1;
}

const allowedStatuses = new Set(['proposed', 'accepted', 'rejected as primary', 'deprioritized', 'parked', 'paused', 'superseded']);
const nonstandardStatuses = [...new Set(detailed.map((record) => record.metadata.get('Status')).filter(Boolean))]
  .filter((status) => !allowedStatuses.has(status.toLowerCase()));
if (nonstandardStatuses.length) warnings.push(`Nonstandard base Status values: ${nonstandardStatuses.join('; ')}`);

const fullyConformant = detailed.filter((record) =>
  requiredMetadata.every((field) => record.metadata.has(field))
  && requiredHeadings.every((heading) => record.headings.includes(heading)),
).length;

if (fullyConformant !== detailed.length) warnings.push(`${fullyConformant}/${detailed.length} detailed records conform exactly to the declared ADR template.`);

console.log('Decision-log integrity audit');
console.log(`- Index: ${indexRows.length} rows`);
console.log(`- Detailed records: ${detailed.length}`);
console.log(`- Ledger decision table: ${ledgerRows.length} rows`);
console.log(`- Sequence: ${ordered[0] ?? 'none'} through ${ordered.at(-1) ?? 'none'}`);
console.log('');

if (errors.length) {
  console.log('Core errors');
  for (const error of errors) console.log(`- ${error}`);
} else {
  console.log('Core integrity: PASS');
}

console.log('');
console.log('ADR template coverage');
for (const field of requiredMetadata) console.log(`- ${field}: ${metadataCoverage[field]}/${detailed.length}`);
for (const heading of requiredHeadings) console.log(`- ${heading}: ${headingCoverage[heading]}/${detailed.length}`);

if (warnings.length) {
  console.log('');
  console.log('Warnings');
  for (const warning of warnings) console.log(`- ${warning}`);
}

if (errors.length) process.exit(1);
if (strict && warnings.length) process.exit(2);
