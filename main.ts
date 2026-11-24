// Entry for post-x-promote-make-your-own-bounty-01 (Node 22, standard library only).
// The entry itself is one X post by @asepmoskov39 that quotes make.fun's
// make-your-own-bounty post. This program only hands that post in: it copies
// POST.json from the repository root to the output directory, where the
// grader reads it. No network, no wall clock, no files outside the repo.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const MAX_POST_JSON_BYTES = 16384;

const sourcePath = join(BOT_DIR, 'POST.json');

// Guard: POST.json must exist and be at most 16384 bytes.
let size: number;
try {
  size = statSync(sourcePath).size;
} catch (err) {
  console.error(`POST.json could not be read from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
if (size > MAX_POST_JSON_BYTES) {
  console.error(`POST.json is too large: ${size} bytes (max ${MAX_POST_JSON_BYTES} bytes)`);
  process.exit(1);
}

// Guard: POST.json must parse as JSON and carry a non-empty string `url`.
let parsed: unknown;
try {
  parsed = JSON.parse(readFileSync(sourcePath, 'utf8'));
} catch (err) {
  console.error(`POST.json is not valid JSON: ${(err as Error).message}`);
  process.exit(1);
}
if (typeof parsed !== 'object' || parsed === null || Array.isArray(parsed)) {
  console.error('POST.json must contain a JSON object with a string `url` field');
  process.exit(1);
}
const url = (parsed as { url?: unknown }).url;
if (typeof url !== 'string' || url.trim().length === 0) {
  console.error('POST.json must contain a non-empty string `url` field');
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(sourcePath, join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
