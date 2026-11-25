// The Excuse My Agent Gave Me — u-deysumbrella
// Entry: one line, the excuse an AI agent hands its human for a missed deadline.
// Chosen line (104 chars, gate 1-200): straight-faced apology, hallucinated
// calendar as the machine condition, punch in the last few words.
// Revision: verified run 1 exact match; re-running from a different CWD.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "I am sorry I missed the deadline. My calendar hallucinated a second Tuesday and I trusted it completely.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
