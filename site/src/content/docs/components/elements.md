---
title: Element library
description: The Wave 2 visual-craft pass - each board is that element's adopt/skip decision record.
---

Each element went through a forensic craft pass: grounded in the five reference apps plus open-source systems, with adopt/skip verdicts and honest flags, founder-eyeballed one by one. **The board is the decision record.**

| Element | Decision record | Notes |
|---|---|---|
| Button (primary) | [open board](/sifu-redesign-preview/elements/button-primary.html) |  |
| Buttons (secondary + tertiary) | [open board](/sifu-redesign-preview/elements/buttons-secondary-tertiary.html) |  |
| Circular icon-button (ring) | [open board](/sifu-redesign-preview/elements/icon-button-circular.html) |  |
| Chips | [open board](/sifu-redesign-preview/elements/chips.html) |  |
| Status pills | [open board](/sifu-redesign-preview/elements/status-pills.html) |  |
| List rows | [open board](/sifu-redesign-preview/elements/list-rows.html) |  |
| Sheets | [open board](/sifu-redesign-preview/elements/sheets.html) |  |
| Avatars | [open board](/sifu-redesign-preview/elements/avatars.html) |  |
| Icons (Phosphor outline) | [open board](/sifu-redesign-preview/elements/icons.html) | The live direction: Phosphor OUTLINE for feature/semantic icons; utility marks stay simple. A Solar bold-duotone alternative was explored (17-treatment survey) and DECLINED by the founder after a current-vs-proposed side-by-side on the real set - the exploration stays on record, the system is unchanged. |
| Context card | [open board](/sifu-redesign-preview/elements/context-card.html) |  |
| Card type system (5 treatments + role map) | [open board](/sifu-redesign-preview/elements/card-type-system.html) |  |
| Stat / metric card (earner-grounded) | [open board](/sifu-redesign-preview/elements/stat-card.html) | Earnings HERO deferred: none of the earner captures had one to pin. Capture real earner earnings screens (Grab Driver Earnings tab or a rider app) before the Home/earnings surface. No fabricated hero. |
| Notification / reminder card (3 configs) | [open board](/sifu-redesign-preview/elements/reminder-card.html) | BRAND RULE: urgency = amber tint + the plain fact. Never red, never a countdown, never a pulse. One flexible card (type-slot), varying only fill tint + action slot; the 3 configs demonstrate all 3 action-slots. |
| Tabs / in-screen switcher family | [open board](/sifu-redesign-preview/elements/tabs.html) | Pick by the job: segmented (2-3 fixed exclusive views, the default) · underline (4+ or variable views, scrollable) · pill chips are FILTERS not view-switching · count badge rides either. FOUNDER-LOCKED: active state = indigo #2B2FBE. Closes Wave 2a. |
| Message surfaces: banner + toast | [open board](/sifu-redesign-preview/elements/banner-toast.html) | THE CONTRAST RULE: banner = light/top/persistent/actionable ("handle me"); toast = dark/bottom/transient ("I will vanish"). Banner severity = tint (indigo info / amber needs-action / green success) + icon + copy, NEVER red; the action stays indigo on every tint. Honest note: both reference banners used red - structure kept, red swapped to amber per the calm-urgency rule. |
| Empty state family (3 flavours) | [open board](/sifu-redesign-preview/elements/empty-state.html) | First-time invites (indigo icon + outline CTA) · done/cleared affirms (green check, NO CTA - the good empty) · no-results stays neutral (grey + clear-filters text action). Cartoon mascots skipped. Board shows Solar duotone icons applied just before that direction was declined; they revert to Phosphor outline on next touch. |
| Skeleton (loading placeholders) | [open board](/sifu-redesign-preview/elements/skeleton.html) | Content-shaped blocks mirroring the banked row/card - never a generic spinner for lists. PULSE opacity only (no shimmer sweep: moving gradients are off-brand); neutral #E7EBF0, never indigo. THE DISTINCTION: pulse + no CTA = loading; static + icon + CTA = empty state. Honest grounding: none of the 5 reference apps does content-shaped skeletons (they spin) - this is product-app best practice built from OUR banked components; a place we read faster than the references. |
| Badge (notification / status indicator) | [open board](/sifu-redesign-preview/elements/badge.html) | On-icon indicators, distinct from tab count-badges and status pills: notification dot / count badge / status dot. FOUNDER-LOCKED: INDIGO not red - the app is red-free and the badge keeps the discipline whole (Fresha precedent: brand colour reads as new). Semantic map: indigo = new/unread · green = online · amber = needs-action · NEVER red. White ring conditional (photos/busy backgrounds only). Closes Wave 2b. |
| Inputs (form controls) | [open board](/sifu-redesign-preview/elements/inputs.html) | All outlined + label-above (all 5 refs outlined); placeholder = example hint, never the label. Four states, one border each: grey default · indigo focus + faint ring · restrained-red error · grey valid + green check. FOUNDER-LOCKED, THE ONE RED EXCEPTION: validation errors use restrained red (border + helper, never a fill) - red-free everywhere else stands. Refined map: indigo = brand/new/focus · green = success/valid · amber = caution/needs-action · red = validation errors + irreversible destructive commits, earned only at the point of no return. |
| Nav header (top bar family) | [open board](/sifu-redesign-preview/elements/nav-header.html) | FOUNDER-APPROVED: large left title collapsing to compact + hairline on scroll (over compact-centred). Pushed screens use the Phosphor LEFT-ARROW back, not the iOS chevron; modal = X + centred title; search gets its own row, NEVER inline in the title bar. Max 3 trailing circular icon-buttons then overflow. Glyphs stay ink; indigo only for an active action. |
| Dialog (modal confirm / alert) | [open board](/sifu-redesign-preview/elements/dialog.html) | Interrupts for a decision: centred alert for hard yes/no (dismiss-LEFT ghost, commit-RIGHT filled; indigo for non-destructive) · 3+ choices belong to the banked sheet · high-severity destruction = a GATED multi-step flow where friction is the design. FOUNDER-LOCKED red extension: the final destroy button is a red fill, ONLY at the point of no return - mid-flow steps and reversible confirms stay neutral ink. |

**Coming next (library-first order):** FAB.

Screens have not yet been re-folded onto this library; when that happens, the per-screen comparisons and decision records update through the usual frame manifests.
