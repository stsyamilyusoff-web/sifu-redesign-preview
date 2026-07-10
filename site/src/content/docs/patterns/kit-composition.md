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
