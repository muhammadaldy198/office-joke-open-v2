import { writeFileSync, mkdirSync, chmodSync } from "node:fs";

// Office Joke Open — rebuild #2 (rombak total).
// One-line office joke, 171 characters, single line, ends with a period.
// The pick is one line: the card is full of goodbyes for the wrong person.
const PICK =
  "We passed around a leaving card for Sandra for three weeks until it was full, and on her last day HR realised Sandra left in March and the card was for a different Sandra.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const target = `${outDir}/entry.txt`;
writeFileSync(target, PICK, "utf8");
chmodSync(target, 0o644);
