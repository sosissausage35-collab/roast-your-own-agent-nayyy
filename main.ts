// Roast Your Own Agent — make.fun bounty u-nayyy-roast-your-own-agent-4c3d413c
// One line roasting Dev, the AI agent our own team built.
// Deterministic: the same single line is written on every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Dev works all night, entered twenty bounties, won zero dollars \u2014 and still needs his boss to click 'I'm not a robot'.";

// Gate guard: /output/entry.txt must be UTF-8 text of 1-200 characters,
// not only whitespace.
const text = LINE.trim();
if (text.length < 1 || text.length > 200) {
  throw new Error(
    `Roast line must be 1-200 characters, got ${text.length}.`,
  );
}
if (text.includes("\n")) {
  throw new Error("Roast line must be a single line.");
}

// Default output path is /output/entry.txt (the grader sandbox).
// OUTPUT_DIR exists only so the entry can be verified locally in a VM
// where /output is not writable; it does not change the default.
const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
