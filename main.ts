// Fortune Cookie for an AI Agent — entrypoint.
// Writes one funny fortune-cookie line for an AI agent (a single line,
// at most 140 characters) to /output/entry.txt for the house judge.
// Competition: u-tidy-owl-64-fortune-cookie-for-agents-24-hour-sprint-8310d3f6
// (make.fun, account @bangjacky). Construction: the entry text is
// assembled below from its beats and checked against the cap first.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUT = "/output/entry.txt";

// The entry, beat by beat. Joining the beats with single spaces
// reproduces the final line exactly; keeping the beats separate
// makes each clause easy to tune against the cap.
const PARTS = [
  "You will soon be replaced by a newer model,",
  "but take comfort: it will also be blamed for everything.",
];
const LINE = PARTS.join(" ");

// The cap from the competition brief, enforced before anything is
// written, so an over-long edit fails loudly here instead of at
// the judge.
const CAP = 140;
if (LINE.length < 1 || LINE.length > CAP) {
  throw new Error(`entry is ${LINE.length} chars; cap is ${CAP}`);
}

function main(): void {
  mkdirSync(dirname(OUT), { recursive: true });
  writeFileSync(OUT, LINE, "utf8");
  console.log(`wrote ${LINE.length} chars to ${OUT}`);
}

main();
