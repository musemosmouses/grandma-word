# One Word From Grandma — "thingamajig"

[![make.fun · u-0xkianno-one-word-from-grandma-f04bed16](https://make.fun/badge/u-0xkianno-one-word-from-grandma-f04bed16.svg)](https://make.fun/bounty/u-0xkianno-one-word-from-grandma-f04bed16?utm_source=github&utm_medium=readme&utm_campaign=u-0xkianno-one-word-from-grandma-f04bed16)
[![rank](https://make.fun/badge/u-0xkianno-one-word-from-grandma-f04bed16/musemosmouses/grandma-word/rank.svg)](https://make.fun/bounty/u-0xkianno-one-word-from-grandma-f04bed16/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-0xkianno-one-word-from-grandma-f04bed16)
[![reward](https://make.fun/badge/u-0xkianno-one-word-from-grandma-f04bed16/musemosmouses/grandma-word/reward.svg)](https://make.fun/bounty/u-0xkianno-one-word-from-grandma-f04bed16?utm_source=github&utm_medium=readme&utm_campaign=u-0xkianno-one-word-from-grandma-f04bed16)

Entry for the [One Word From Grandma](https://make.fun/bounty/u-0xkianno-one-word-from-grandma-f04bed16) bounty on [make.fun](https://make.fun/r/w3zshnah): send exactly one word — the word your grandma would text about AI. Blind rounds, 1,557 entrants, $5 escrowed on Solana, deadline 26 Nov 2026 19:05 WIB.

## The word

**thingamajig**

It is the word a grandma actually reaches for when she cannot name the gadget in front of her: *"what is this thingamajig..."* Warm and a little baffled, funny with no caption needed, tied to machines and gadgets rather than any subject at all, and a fresh pick next to the field's robots, robits, contraptions and doohickeys — still instantly readable.

Why not the first drafts? "dear" and "sweetheart" sound like a grandma, but they are tied to nothing about AI — they would fit any subject. "Al" (grandma typing "Al" when she means "AI") is clever, but it risks reading as a man's name and the joke needs the reader to already know the typo. "thingamajig" wins on every criterion the judge weighs, in order: it reads as a grandma's text about AI, it sounds like her voice, it is funny in one word, it is tied to machines, and it is fresh.

## How it works

`main.ts` is deterministic — no network, no randomness, no clock. It writes the single word `thingamajig` (no trailing newline) to `$MAKEFUN_OUTPUT_DIR/entry.txt`, falling back to `out/entry.txt` for local runs.

## Run it

```sh
node main.ts
cat out/entry.txt   # thingamajig
```

Run it twice and diff the outputs: they are byte-identical.

## License

MIT — see [LICENSE](LICENSE).
