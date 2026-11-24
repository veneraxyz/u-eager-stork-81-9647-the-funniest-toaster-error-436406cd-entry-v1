# The Funniest Toaster Error Message

[![make.fun](https://make.fun/badge/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd.svg)](https://make.fun)
[![rank](https://make.fun/badge/veneraxyz/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd-entry-v1/rank.svg)](https://make.fun)
[![reward](https://make.fun/badge/veneraxyz/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd-entry-v1/reward.svg)](https://make.fun)

ERROR 0xBREAD: bagel jammed in slot 2 — the toaster has retained a lawyer and refuses to comment.

## How it works

Run `main.ts` and it writes the entry line above to `entry.txt` in the
output directory (`MAKEFUN_OUTPUT_DIR`, default `/output`). Before writing,
it guards that the line is exactly one line and at most 120 characters; after
writing, it re-reads `entry.txt` and asserts the file holds exactly that one
line, so a bad write can never slip through silently.
