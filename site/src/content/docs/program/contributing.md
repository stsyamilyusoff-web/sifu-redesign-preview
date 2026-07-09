---
title: Contributing
description: The protocols that keep this system true.
---

- **Capture before design**: a screen's live capture must exist before its redesign starts.
- **ADAPT before drawing**: every screen redesign pins its references first; the approved reference board plus its disposition (pinned, dropped, ours) ships with the screen as its decision record.
- **No pair, not locked**: LOCKED includes the compare-map row, a refresh, and a green coverage guard.
- **Frame manifest on re-lock**: a re-lock that changes a mock's frame set sends the new frame order and meanings; the side-by-side owner updates the map.
- **Republish triggers refresh**: whoever republishes mocks re-runs the compare refresh, or hands it off explicitly.
- **CI**: every push builds the site (~90 seconds). A red check on the build means stop and ping the side-by-side owner; never retry-push.
