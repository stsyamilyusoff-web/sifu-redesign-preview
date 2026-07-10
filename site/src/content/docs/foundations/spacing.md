---
title: Spacing and radius
description: The two-tier radius law; spacing scale pending extraction.
next: false
---

## The two-tier radius law

Founder-locked 10-Jul-2026, after a founder-raised challenge and an evidence run: **"Surfaces sit at 16. Controls are pills. Nothing else exists."**

- **Surfaces = 16px**: card, sheet, banner, dialog, input, any container.
- **Controls = pill**: buttons (primary, secondary, row action-pill), chips, status pills, segmented, badges - and the FAB center-plus is a **circle**.

Evidence: the control-pill is production reality in live code (160 legacy call sites at h55/r30 plus the modern Button at r9999). The challenge verdict was PARTIAL per the challenge discipline: codify the two-tier structure, do not flatten controls into the surface radius.

The law runs as a radius test in every remaining Wave-1 board pass; known strays (dialog 12/14, inputs 12, card-type-system variants 12/14/18) pull to 16 at their turn, each through the founder eyeball.

## Spacing

The spacing scale keeps the live app's `tokens.ts` structure; a documented scale page is still pending extraction.
