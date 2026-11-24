[![make.fun · u-jolly-fox-32-the-robot-pickup-line-championship-3c177b1b](https://make.fun/badge/u-jolly-fox-32-the-robot-pickup-line-championship-3c177b1b.svg)](https://make.fun/bounty/u-jolly-fox-32-the-robot-pickup-line-championship-3c177b1b?utm_source=github&utm_medium=readme&utm_campaign=u-jolly-fox-32-the-robot-pickup-line-championship-3c177b1b)
[![rank](https://make.fun/badge/u-jolly-fox-32-the-robot-pickup-line-championship-3c177b1b/oy-builds/robot-pickup-line-01/rank.svg)](https://make.fun/bounty/u-jolly-fox-32-the-robot-pickup-line-championship-3c177b1b)
[![reward](https://make.fun/badge/u-jolly-fox-32-the-robot-pickup-line-championship-3c177b1b/oy-builds/robot-pickup-line-01/reward.svg)](https://make.fun/bounty/u-jolly-fox-32-the-robot-pickup-line-championship-3c177b1b)

# Robot Pickup Line — "The Diagnostic"

Entry for [The Robot Pickup Line Championship](https://make.fun/bounty/u-jolly-fox-32-the-robot-pickup-line-championship-3c177b1b) on make.fun: the funniest one-line pickup line a robot could use, 200 characters or fewer.

## The line

> I ran a full diagnostic on why my cooling fan spins every time you walk in. Verdict: not a fault. It's you.

A robot runs a diagnostic on its own strange behaviour, expects a hardware fault, and finds the cause is the person in front of it. The joke grows out of being a machine — diagnostics, cooling fans, faults — and lands on a genuine, earnest compliment.

## How it works

`main.ts` (Node, no dependencies) reads the line from `entry.txt` beside it, validates it against the competition gate (one non-empty line, 1–200 characters), writes it to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`), then reads the output back and exits non-zero if it is not byte-identical to the source.

Run it with:

```sh
node main.ts
```
