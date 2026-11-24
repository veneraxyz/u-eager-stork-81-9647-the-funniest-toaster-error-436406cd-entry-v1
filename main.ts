import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY_LINE =
  "ERROR 0xBREAD: bagel jammed in slot 2 — the toaster has retained a lawyer and refuses to comment.";

if (ENTRY_LINE.length > 120) {
  throw new Error(`Entry line is ${ENTRY_LINE.length} chars, over the 120-char limit.`);
}
if (ENTRY_LINE.includes("\n")) {
  throw new Error("Entry line must be exactly one line.");
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY_LINE + "\n", "utf8");

// Post-write verification: re-read entry.txt and assert it is exactly
// one line, matches the entry line, and stays within the 120-char limit.
const written = readFileSync(join(outputDir, "entry.txt"), "utf8");
const lines = written.split("\n");
if (lines.length !== 2 || lines[1] !== "") {
  throw new Error(`entry.txt must contain exactly one line, found ${lines.length - 1} line(s).`);
}
if (lines[0] !== ENTRY_LINE) {
  throw new Error("entry.txt content does not match the entry line.");
}
if (lines[0].length > 120) {
  throw new Error(`entry.txt line is ${lines[0].length} chars, over the 120-char limit.`);
}
