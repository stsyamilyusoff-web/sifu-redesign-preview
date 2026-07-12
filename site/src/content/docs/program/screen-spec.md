---
title: Screen conformance spec
description: The exact spec every screen must satisfy to be current. The reconciliation checklist.
---

Every banked screen must satisfy every law below to count as **current**. A screen that predates a law, or carries an unexecuted "next-touch" contract against one, is **stale** and must be re-cut before it is presented as the live direction. This page is the single reference the build chats compose against and the catalogue verifies at bank time.

## The conformance checklist

1. **Segmented control = rounded-rect, radius 12** (a compact surface with concentric cells, radius 9). Never a pill track. The count badge stays a pill (single object). *(Tabs ruling, 11-Jul.)*
2. **Header** follows the canon: a root tab surface is a large left title 30/700 (+ optional 15/500 sub); a pushed/flow screen is a Phosphor back arrow + centred compact title **18/700**. The Teaching-now cockpit is the one sanctioned large/no-back exception; full-screen moments (camera, escalation recap) run headerless. *(Header canon, 11-Jul, measured 12-Jul.)*
3. **Titles are sentence-case** and use the one canonical screen name. "Calendar" everywhere ("Schedule" is dead). *(Header canon + type law.)*
4. **Placement grammar**: the left edge holds identity; the right edge holds status, consequence, **and selection** (checkboxes trail). Paired buttons: dismiss-left ghost, commit-right filled. *(Placement law, revised 11-Jul.)*
5. **Colour**: one accent indigo `#2B2FBE`; amber for calm-urgency; green for success; exactly one red `#E11D48`, earned only at validation errors and irreversible destructive commits. No commission or gross/net split ever surfaces tutor-side. *(Colour law + no-commission ruling.)*
6. **Centre tab = the Home glyph.** The raised `+` create FAB is retired; create placement is owned by the Today/nav pitch. *(FAB/Home ruling, 11-Jul.)*
7. **Type**: weights 400 / 500 / 700 only — no fake 600 or 800. No em-dashes in copy. Cards carry one bold anchor; rows are medium. *(Type law.)*
8. **Radius law**: surfaces 16 (incl. sheet tops); compact surfaces under ~80px = 12; controls pill; FAB circle; concentric nesting. *(Radius law, final form.)*
9. **Renders perfectly at 402×874**: the bare `<head>` MUST include `<meta name="viewport" content="width=device-width, initial-scale=1">` — without it, mobile rendering (and the full-page shooter) falls back to Chrome's 980px layout viewport and scales the 402px frame to a 2131px-tall capture, baking ~1250px of empty canvas below every screen. The `.frame` is a fixed `width:402px; height:874px; overflow:hidden` phone with a flex column (a flexed scroll area + the bottom dock pinned to 874), and the body sets `background: var(--canvas)` so the fill is the canvas, never dark. Fonts are Circular base64-embedded (no `file://`). Light only. *(1:1 send spec — the viewport-meta clause added 13-Jul after the empty-space audit.)*

## How a stale screen is handled

A screen found stale against any clause carries a **RECONCILE-PENDING** flag on its catalogue card (the same honesty pattern as the PRE-KIT stamp) until it is re-cut. The re-cut runs through the normal loop — compose to this spec, founder eyeball, publish, byte-verify — and clears the flag. No screen is presented as current direction while it fails a clause.

## The current reconcile worklist (12-Jul)

- **TutorRequests** — the composition pilot (locked 10-Jul, before clauses 1/2/3/6/9 existed): pill tabs → rect-12, title-case → sentence-case, "In-person" → "In person", the create-FAB centre → Home glyph, and the missing body-fill that makes it render short. Full re-cut.
- **Wrap up**, **Confirm classes** (incl. the r2 family) — unexecuted header-canon contract (30px root → arrow + compact 18/700).
- **Class recorded (done moment)** — unexecuted "Schedule → Calendar" retitle + Home-centre.
- The 10 reconciliation-wave screens (Calendar through Documents) were composed after the laws and pass the checklist.
