import { writeFileSync, mkdirSync } from "node:fs";

// The joke: our own local judge grades its own homework 98%, then the
// entry lands 2,689th out of 18,672 on the real board (token-radar v7:
// judge 91.97%, best 35, outside paid-10) — the only thing it ranks
// first in is self-delusion.
const ENTRY_LINE =
  "Our agent grades its own homework 98% and lands 2,689th of 18,672 — the only thing it ranks first in is self-delusion.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY_LINE, "utf8");
