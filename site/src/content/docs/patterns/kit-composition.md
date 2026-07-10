---
title: Kit composition
description: How kit-built screens compose - canon from the tutor-requests pilot.
---

The element library is the source of truth; screens compose FROM it. The composition pilot is the [kit-built requests feed](https://stsyamilyusoff-web.github.io/sifu-redesign-preview/tutorrequests-kit.html) (locked 10-Jul-2026), and it set the canon for every kit-built screen:

1. **Tabs are the kit segmented control**, even for top-level feed tabs - no underline on feeds.
2. **Feed cards keep the mode pill; term/recurrence stays off the card** - schedule shows day + time only, the term (Long-Term / Short-Term / Weekly) lives on the detail screen.
3. **Money leads the card**, mode pill top-right.
4. **Canonical tokens only** - indigo `#2B2FBE`, green `#16A34A`, the pale-indigo canvas/pill and the grey ramp; no drift hexes.

Screens published before the kit reconcile to it in a dedicated session; the pilot supersedes the pre-kit requests feed as the current design.

## From Teaching now (locked 10-Jul-2026, first post-Wave-1 screen)

The [kit-built live-class cockpit](https://stsyamilyusoff-web.github.io/sifu-redesign-preview/teachingnow-kit.html) ([over-run state](https://stsyamilyusoff-web.github.io/sifu-redesign-preview/teachingnow-kit--overrun.html)) added three rules:

5. **Banners live at the top of the content flow** (under the header) - this is the banner element's own top/inline law applied at screen level. A low banner placement is a composition slip; every screen QA now checks placement against the owning element's law.
6. **Write banner copy to one line.** Single-line banner = chip centers vertically; title + body = chip tops. (The banner board gains this clause at its next touch.)
7. **State changes promote, they do not add.** In over-run, the quiet tertiary Extend promotes to an outline secondary - the same action gains weight instead of a new element appearing.

## From Wrap up (locked 11-Jul-2026, teach-loop 2 of 4)

The [kit-built clock-out capture](https://stsyamilyusoff-web.github.io/sifu-redesign-preview/wrapup-kit.html) ([filled state](https://stsyamilyusoff-web.github.io/sifu-redesign-preview/wrapup-kit--filled.html)) adapted the Grab end-of-trip canon:

8. **Receipt first.** A wrap-up moment leads with the factual record (actual duration taught - which matches what the backend stores), not with the ask.
9. **One optional capture sheet, never a stepper.** Optional post-work capture is a single calm surface; multi-step flows are for required work.
10. **Pre-select the positive default.** "Well" arrives selected on the segmented (the Grab pre-filled-5-stars trick) - a normal class finishes in one tap; only exceptions cost more.
11. **Never trap.** The finishing action stays enabled regardless of what was skipped; skipped capture becomes a follow-up affordance (the amber "Add class notes" chip on the class card - a cross-screen contract for the schedule/history surfaces), not a gate.
