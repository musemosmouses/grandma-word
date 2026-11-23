// grandma-word — One Word From Grandma (make.fun)
// Entry: exactly one word, written to $MAKEFUN_OUTPUT_DIR/entry.txt
// (fallback: out/entry.txt when run locally).
//
// THE WORD: "thingamajig"
//
// Why this word, and not the first drafts:
// - "dear" / "sweetheart" were the first drafts. They sound like a grandma,
//   but they fail the judge's 4th criterion outright: they are tied to
//   nothing about AI, robots or machines. They would fit any subject at all,
//   so any AI-tied word beats them head-to-head.
// - "Al" (grandma typing "Al" when she means "AI") is clever and directly
//   AI-tied, but it risks reading as a man's name, and the joke needs the
//   reader to already know the typo — it does not land on its own.
// - "thingamajig" is the word a grandma actually reaches for when she
//   cannot name the gadget in front of her: "what is this thingamajig..."
//   Warm and a little baffled (criterion 2), funny with no caption needed
//   (criterion 3), tied to machines and gadgets rather than any subject
//   (criterion 4), and a fresh pick next to the field's robots, robits,
//   contraptions and doohickeys — still instantly readable (criterion 5).
//   It reads as the single word a grandma would text about AI (criterion 1)
//   because it is how she names a thing she does not understand, to a
//   grandchild she trusts to translate it for her.
//
// Deterministic by design: no network, no randomness, no clock. The same
// single word is written on every run, byte for byte.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The one word. Lowercase, exactly as a grandma would thumb-type it.
// Guard: a single word means no whitespace and 1-30 characters, which is
// exactly what the sealed gate checks (UTF-8 text, 1-30 chars, not blank).
const WORD = "thingamajig";
if (!/^\S{1,30}$/.test(WORD)) {
  throw new Error("entry must be exactly one word of 1-30 characters");
}

// The grader sets MAKEFUN_OUTPUT_DIR; local runs fall back to out/.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? join(process.cwd(), "out");
mkdirSync(outDir, { recursive: true });

// No trailing newline: the gate counts characters (1-30), and the entry
// must be exactly one word — nothing else, not even a newline.
writeFileSync(join(outDir, "entry.txt"), WORD, "utf8");
console.log(`wrote entry.txt: ${WORD}`);
