---
title: Spacing and radius
description: The radius ladder; spacing scale pending extraction.
next: false
---

## The radius ladder

Founder-locked 10-Jul-2026 (evening): a role-based, reference-grounded ladder.

- **Sheets = 22px** top corners.
- **Cards / surfaces = 16px**: card, banner, dialog, input, any container.
- **Controls = pill**: buttons, chips, status pills, segmented, badges - and the FAB center-plus is a **circle**.

**Supersession history, kept honestly:** earlier the same day a two-tier law ("surfaces sit at 16, controls are pills, nothing else exists") was locked as a deliberate simplification. It held for hours: the founder then asked whether the references themselves run one radius, and the forensic reads off the banked frames said no - every reference runs a role-based ladder (Airbnb alone: r8 buttons, pill chips, ~20-24 sheet tops, mid-radius cards), and the five apps do not even agree on buttons. The ladder replaces the two-tier; the sheets' 22px option, drawn on the sheets board all along, becomes the lock. The control-pill tier and the FAB circle ruling survive unchanged, as does their live-code evidence (160 call sites + Button r9999).

The ladder runs as the radius test in every remaining Wave-1 pass: sheet-top to 22, container to 16, control to pill. Known strays: dialog 12/14 and inputs 12 pull to 16; card-type-system was already patched to 16 and is unaffected by the flip.

## Spacing

The spacing scale keeps the live app's `tokens.ts` structure; a documented scale page is still pending extraction.
