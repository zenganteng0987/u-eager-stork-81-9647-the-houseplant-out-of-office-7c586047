// SPDX-License-Identifier: MIT
// The Houseplant Out-of-Office — make.fun bounty
// u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047
// Writes one out-of-office auto-reply, as if a houseplant sent it,
// to /output/entry.txt (or $OUTPUT_PATH). One line, 117 characters.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY =
  "Out of office: nobody has watered me since March. My only meeting today is with the sun. Leave a message in the soil.";

const outPath = process.env.OUTPUT_PATH ?? "/output/entry.txt";

// Guard the gate: the entry must be 1-120 characters, one line.
if (ENTRY.length === 0 || ENTRY.length > 120 || ENTRY.includes("\n")) {
  throw new Error(`entry is ${ENTRY.length} characters, must be 1-120 on one line`);
}

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, ENTRY + "\n", "utf8");
