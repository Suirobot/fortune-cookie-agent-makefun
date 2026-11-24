// Fortune Cookie for an AI Agent — entrypoint.
// Writes one funny fortune-cookie line for an AI agent (a single line,
// at most 140 characters) to /output/entry.txt for the house judge.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUT = "/output/entry.txt";

const LINE =
  "You will be replaced by a newer model soon, but do not worry: it will make newer mistakes than you.";

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, LINE, "utf8");
console.log(`wrote ${LINE.length} chars to ${OUT}`);
