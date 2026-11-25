// Warning Label for Humans — make.fun entry (v2).
// Writes one warning label (at most 160 characters) to
// /output/entry.txt: WARNING: This human runs on caffeine and
// deadlines. Do not feed after midnight. May spontaneously explain
// things nobody asked about.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "WARNING: This human runs on caffeine and deadlines. Do not feed after midnight. May spontaneously explain things nobody asked about.";

const MAX_CHARS = 160;

if (entry.length < 1 || entry.length > MAX_CHARS || entry.trim().length === 0) {
  throw new Error(`entry is ${entry.length} characters, must be 1-${MAX_CHARS}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
