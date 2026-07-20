#!/usr/bin/env node

import { execFileSync } from "node:child_process";

const [baseSha, headSha] = process.argv.slice(2);

if (!baseSha || !headSha) {
  console.error("Usage: node tools/check_dco_signoff.mjs <base-sha> <head-sha>");
  process.exit(2);
}

function git(args) {
  return execFileSync("git", args, { encoding: "utf8" }).trim();
}

const revisionRange = `${baseSha}..${headSha}`;
let commits;
try {
  commits = git(["rev-list", "--reverse", "--no-merges", revisionRange])
    .split("\n")
    .filter(Boolean);
} catch (error) {
  console.error(`Unable to inspect pull-request commits in ${revisionRange}.`);
  console.error(error.message);
  process.exit(2);
}

if (commits.length === 0) {
  console.log("DCO validation passed: no non-merge commits to inspect.");
  process.exit(0);
}

const signoffPattern = /^Signed-off-by:\s+\S(?:.*\S)?\s+<[^<>\s]+@[^<>\s]+>\s*$/imu;
const missing = [];

for (const commit of commits) {
  const message = git(["show", "-s", "--format=%B", commit]);
  if (!signoffPattern.test(message)) missing.push(commit);
}

if (missing.length > 0) {
  console.error("DCO validation failed. These commits have no valid Signed-off-by trailer:");
  for (const commit of missing) console.error(`- ${commit}`);
  console.error("Amend or recreate each commit with `git commit -s`, then update the pull request.");
  process.exit(1);
}

console.log(`DCO validation passed: ${commits.length} non-merge commit(s) signed off.`);
