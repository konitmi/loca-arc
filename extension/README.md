# loca.arc — Chromium Extension

**Version 0.3.1 · Manifest V3**

loca.arc searches accessible text on the active webpage, highlights matches where supported, and lets you move between results. It also searches pasted text or code locally.

## Install locally

1. Open `chrome://extensions` in Chrome or the extensions page in a compatible Chromium browser.
2. Turn on **Developer mode**.
3. Click **Load unpacked** and select this `extension/` directory.
4. Pin the extension to the toolbar.

## Use

1. Open a regular webpage and click loca.arc.
2. Enter a query and press Enter or click **Find**.
3. Use ↑ / ↓ or click a result to navigate.
4. Use **Reset Search & Clear Highlights** to remove loca.arc's highlight layers and clear the popup.
5. Expand **Search pasted text / code instead** to search supplied text. Expand **How to use** for in-popup instructions.

## Features

- Search accessible text nodes on the current page.
- Highlight matches using the CSS Custom Highlight API when available.
- Navigate through matches and scroll them into view.
- Search pasted text/code line by line.
- Context-menu support for selected text.
- No remote search backend or API key.

## Permissions

- `activeTab` — access the active page after user interaction.
- `scripting` — run the page-search and highlight routines.
- `contextMenus` — offer the selected-text workflow.
- `storage` — pass selected text to the popup.

## Limitations

Browser-internal pages, store pages, protected content, some frames and complex editors may not be searchable. Current-page scanning is capped at 500 matches. Dynamic content may require a fresh search.

## About

© 2026 loca.arc · Created by [@Konitmi](https://x.com/0xKonitmi) · All rights reserved.


## V3.1 update
- Added light/dark mode toggles with locally saved preferences (website and extension save separately).
- Added a compact three-dot menu for How to Use and About loca.arc.
- Kept webpage search, pasted-text search, match navigation, and Reset.
