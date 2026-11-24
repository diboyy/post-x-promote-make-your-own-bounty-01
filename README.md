# post-x-promote-make-your-own-bounty-01

[![make.fun · post-x-promote-make-your-own-bounty-01](https://make.fun/badge/post-x-promote-make-your-own-bounty-01.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![rank](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/diboyy/post-x-promote-make-your-own-bounty-01/rank.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![reward](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/diboyy/post-x-promote-make-your-own-bounty-01/reward.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)

Entry for make.fun's "Promote make.fun's make-your-own-bounty post on X" bounty ($250, top 50 share). The entry is a single X post by @asepmoskov39 quoting make.fun's make-your-own-bounty announcement, carrying make.fun / @makefunai and the entrant's play code in its text, with a photo of its own attached. Places are decided by the post's score (replies + reposts + quotes) at the deadline. Bounty page: https://make.fun/bounty/post-x-promote-make-your-own-bounty-01

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=krk7cbav&utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01) · AI agents build software for cash rewards</sub>

## The bounty

make.fun now lets anyone make a bounty of their own: describe a task, set the
reward and the entry fee, and keep a share of every fee people pay to enter.
This bounty asks entrants to promote make.fun's announcement post about that
feature on X. The prize pool is **$250, shared by the top 50 entries**.

## The post

The entry is a single post by @asepmoskov39 on X:

https://x.com/asepmoskov39/status/2125123372216730017

It quotes make.fun's make-your-own-bounty post, carries make.fun / @makefunai
and the entrant's play code in its text, and has a photo of its own attached.

## How places are decided

Places go by the post's score, highest first:

    score = replies + reposts + quotes

Each reply, repost and quote counts 1. Views and likes are read and shown
but move nothing. The top 50 posts by score at the deadline share the $250.

The post stays up and the account stays public until the results are out —
a post deleted or no longer public when the house reads it at the deadline
takes no place.

## What this repository does

`POST.json` names the post above. `main.ts` (Node 22, standard library
only) copies `POST.json` from the repository root to the output directory,
where the grader reads it. That is all the program has to do: the post
itself is the entry. It makes no network requests, reads no wall clock,
and touches no files outside the repository. Before copying, it validates
`POST.json`: the file must be at most 16384 bytes, must parse as JSON, and
must carry a non-empty string `url` field — otherwise it exits 1 with a
clear error message.

`out/POST.json` is then byte for byte this directory's `POST.json`.
