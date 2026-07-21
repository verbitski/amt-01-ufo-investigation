#!/usr/bin/env node

import { readdir, readFile, stat } from "node:fs/promises";
import { dirname, extname, relative, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const excludedTopLevel = new Set([".git", "internal", "LICENSES"]);
const checkedExtensions = new Set([".md", ".html", ".css"]);
const platformRoutes = new Set(["/_vercel/insights/script.js"]);
const findings = [];
let checkedFileCount = 0;
let checkedLinkCount = 0;

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    if (directory === projectRoot && excludedTopLevel.has(entry.name)) continue;
    const path = resolve(directory, entry.name);
    if (entry.isDirectory()) files.push(...await walk(path));
    if (entry.isFile() && checkedExtensions.has(extname(entry.name).toLowerCase())) files.push(path);
  }
  return files;
}

function lineNumber(text, offset) {
  return text.slice(0, offset).split("\n").length;
}

function normalizeTarget(raw) {
  let target = raw.trim();
  if (target.startsWith("<") && target.includes(">")) {
    target = target.slice(1, target.indexOf(">"));
  } else {
    target = target.split(/\s+["']/u, 1)[0];
  }
  return target;
}

function isExternalOrAnchor(target) {
  return target === "" || target.startsWith("#") || target.startsWith("//") || /^[a-z][a-z0-9+.-]*:/iu.test(target);
}

async function checkTarget(sourcePath, sourceText, rawTarget, offset) {
  const target = normalizeTarget(rawTarget);
  if (isExternalOrAnchor(target)) return;
  if (platformRoutes.has(target)) return;
  checkedLinkCount += 1;

  const pathPart = target.split("#", 1)[0].split("?", 1)[0];
  let decoded;
  try {
    decoded = decodeURIComponent(pathPart);
  } catch {
    findings.push(`${relative(projectRoot, sourcePath)}:${lineNumber(sourceText, offset)} invalid URL encoding: ${target}`);
    return;
  }
  if (decoded.startsWith("#")) return;

  const resolved = decoded.startsWith("/")
    ? resolve(projectRoot, `.${decoded}`)
    : resolve(dirname(sourcePath), decoded);
  const rel = relative(projectRoot, resolved);
  if (rel === ".." || rel.startsWith(`..${sep}`)) {
    findings.push(`${relative(projectRoot, sourcePath)}:${lineNumber(sourceText, offset)} local link escapes project root: ${target}`);
    return;
  }

  const targetStat = await stat(resolved).catch(() => null);
  if (!targetStat) {
    findings.push(`${relative(projectRoot, sourcePath)}:${lineNumber(sourceText, offset)} missing local target: ${target}`);
  }
}

const files = await walk(projectRoot);
for (const path of files) {
  checkedFileCount += 1;
  const text = await readFile(path, "utf8");
  const extension = extname(path).toLowerCase();
  const targets = [];

  if (extension === ".md") {
    for (const match of text.matchAll(/!?\[[^\]]*\]\(([^)]+)\)/gu)) {
      targets.push({ target: match[1], offset: match.index });
    }
  }

  if (extension === ".html") {
    for (const match of text.matchAll(/\b(?:href|src)\s*=\s*["']([^"']+)["']/giu)) {
      targets.push({ target: match[1], offset: match.index });
    }
    for (const match of text.matchAll(/\bsrcset\s*=\s*["']([^"']+)["']/giu)) {
      for (const candidate of match[1].split(",")) {
        targets.push({ target: candidate.trim().split(/\s+/u)[0], offset: match.index });
      }
    }
  }

  if (extension === ".css") {
    for (const match of text.matchAll(/url\(\s*["']?([^"')]+)["']?\s*\)/giu)) {
      targets.push({ target: match[1], offset: match.index });
    }
  }

  for (const { target, offset } of targets) {
    await checkTarget(path, text, target, offset);
  }
}

if (findings.length > 0) {
  console.error("Local-link validation failed:");
  for (const finding of findings) console.error(`- ${finding}`);
  process.exit(1);
}

console.log(`Local-link validation passed: ${checkedLinkCount} links across ${checkedFileCount} files.`);
