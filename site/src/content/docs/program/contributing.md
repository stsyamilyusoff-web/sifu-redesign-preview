---
title: Contributing
description: The protocols that keep this system true.
next: false
---

- **Capture before design**: a screen's live capture must exist before its redesign starts.
- **ADAPT before drawing**: every screen redesign pins its references first; the approved reference board plus its disposition (pinned, dropped, ours) ships with the screen as its decision record.
- **No pair, not locked**: LOCKED includes the compare-map row, a refresh, and a green coverage guard.
- **Frame manifest on re-lock**: a re-lock that changes a mock's frame set sends the new frame order and meanings; the side-by-side owner updates the map.
- **Republish triggers refresh**: whoever republishes mocks re-runs the compare refresh, or hands it off explicitly.
- **CI**: every push builds the site (~90 seconds). A red check on the build means stop and ping the side-by-side owner; never retry-push.

## Kit-built screen sends: the 1:1 spec

Binding for every screen composed from the element library (effective 10-Jul-2026):

1. **Shape**: bare HTML, body = the screen at **402px wide**; height 874 minimum, taller if the content scrolls (the pipeline captures full content height). No framewrap, no chrome. One file per state; the main state is the plain file, variants suffix `--<state>`.
2. **Fonts**: Circular Std Book/Medium/Bold **embedded as base64** - file:// font paths silently fall back in real browsers and are banned in banked files. (The Lineto web-license check remains the standing open item for all published Circular.)
3. **Tokens**: canonical set only, per [Kit composition](https://stsyamilyusoff-web.github.io/sifu-redesign-preview/patterns/kit-composition/); exact hexes ride the manifest so the record pins them.
4. **Type law**: weights 400/500/700 only, tokens.ts sizes, sentence-case eyebrows, leading >= 1.2, 8pt/4pt spacing. Build-side gates (font-trust sweep + type-space lint) run green BEFORE the send; catalogue-side guards (coverage, whiteness, links) run at publish.
5. **Light only**: no dark variants - no dark design exists in the system.
6. **The manifest** accompanies every send: screen name + stage · file per state with one-line meanings + which is main · the live capture name (or net-new / capture-pending) · what it supersedes · the decision record (reference board + disposition, or "kit-composed" plus any NEW composition decisions, which become Patterns canon) · the sweeps-green attestation · any honest flags for the registry.
