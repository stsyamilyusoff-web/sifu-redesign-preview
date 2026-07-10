---
title: Spacing and radius
description: The radius law, final form; spacing scale pending extraction.
next: false
---

## The radius law (final form, 10-Jul-2026)

1. **Surfaces = 16px** - card, **sheet** (16 top corners), dialog, input, any container roughly 80px and taller.
2. **Compact surfaces = 12px** - any surface under ~80px tall: banner, toast (pill and rich). The founder's eye caught banners and toasts "feeling rounder"; the audit quantified it (16px consumes 47-62% of their half-height versus ~37% on cards); the study pass verified how the two published systems solve it - Material 3 runs a size ladder where the smallest surface takes the squarest tier (snackbar = 4dp; scale 4/8/12/16/28/full) and Apple runs concentricity. The founder ruled one compact rung at 12.
3. **Controls = pill; the FAB centre-plus is a circle** - unchanged and production-validated (160 legacy call sites + the modern Button at r9999).
4. **Concentric nesting** - for any rounded element inside another, inner radius = outer radius minus the padding between them (Apple WWDC25 rule). Circles and pills are exempt. Binds all compositions going forward.

**The day's full history, kept honestly:** the morning two-tier law ("surfaces 16, controls pill, nothing else") was superseded the same evening by a reference-grounded ladder with 22px sheet tops, after forensic reads showed every reference runs role-based radii. Hours later the founder closed the arc: **sheets maintained at 16** (reverting the 22 exploration), the compact-12 rung added for small surfaces, and concentric nesting adopted. Also for the record: the live app's own `tokens.ts` has shipped a Material-style scale (4/8/12/16/20/24/full) all along, unconsumed - the ladder existed in production code before it existed in the design system.

Evidence: [Material 3 corner radius scale](https://m3.material.io/styles/shape/corner-radius-scale) · Material Components Shape.md · Apple WWDC25 session 356.

## Spacing

The spacing scale keeps the live app's `tokens.ts` structure; a documented scale page is still pending extraction.
