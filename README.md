<div align="center">
  <img src="logo-original.png" alt="loca.arc logo" width="112">
  <h1>loca.arc</h1>
  <p><strong>Find the signal. Get back to building.</strong></p>
  <p>A local-first text and code locator for pasted content and accessible text on webpages.</p>
  <p>
    <img src="https://img.shields.io/badge/version-0.3.1-d7ff79?style=flat-square&labelColor=111216" alt="Version 0.3.1">
    <img src="https://img.shields.io/badge/privacy-local--first-22252b?style=flat-square" alt="Local first">
    <img src="https://img.shields.io/badge/extension-Manifest%20V3-22252b?style=flat-square" alt="Manifest V3">
  </p>
  <p><a href="https://x.com/0xKonitmi"><img alt="X profile" src="https://img.shields.io/badge/Follow-@0xKonitmi-111111?style=flat-square&logo=x&logoColor=white"></a></p>
</div>

---

> [!NOTE]
> **Project status:** Community-ready prototype. Test the extension on your target websites before relying on it for critical workflows.

## Overview

`loca.arc` helps you locate matching text without losing your place. Use the static website to search text or code you paste, or load the Chromium extension to search accessible text on the current webpage, highlight matches, and move through results. Core search runs locally in your browser; no search API key or hosted search service is required.

## Features

- **Current-page search:** Find phrases in accessible text nodes on the active webpage.
- **Inline highlighting:** Highlights matching text where the browser supports the CSS Custom Highlight API.
- **Match navigation:** Jump between matches using the previous/next controls or result list.
- **Reset search:** Clear the popup state and remove loca.arc's own page highlights.
- **Pasted text/code search:** Search your own snippets line by line.
- **Context-menu workflow:** Send selected text to the extension where supported.
- **Local-first design:** Search content is processed on-device; no remote search backend is included.
- **Keyboard-friendly:** Press Enter to search; use the up/down arrow keys to navigate page-search matches while the query field is focused. Pasted text mode supports Ctrl/⌘ + Enter.

## Preview

The project includes a dark, compact interface and bundled logo/icon assets. Add screenshots or a short GIF here when you have captures from your own browser build.

<!-- Suggested assets: docs/screenshots/website.png and docs/screenshots/extension-popup.png -->

## Installation

### Website (GitHub Pages)

1. Put `index.html`, `style.css`, `app.js`, and the website logo/icon assets in the repository root.
2. Open **Settings → Pages** on GitHub.
3. Choose **Deploy from a branch**, select `main` and `/(root)`, then save.
4. Open the published Pages URL. The website is static and does not need a build step.

### Chromium extension (developer mode)

1. Download or clone this repository and extract it if needed.
2. Open `chrome://extensions` in Chrome, or the equivalent extensions page in a Chromium-based browser.
3. Enable **Developer mode**.
4. Select **Load unpacked** and choose the `extension/` folder.
5. Pin loca.arc to the toolbar for quick access.
6. After editing extension files, return to the extensions page and click **Reload**.

## Usage

### Search a webpage

1. Open a regular webpage and click the loca.arc toolbar icon.
2. Enter a word or phrase in **Search this page**.
3. Press Enter or click **Find**.
4. Use the arrow buttons or click a result to navigate between matches.
5. Click **Reset Search & Clear Highlights** to clear the search and remove loca.arc's highlight layers.

### Search pasted text or code

1. Expand **Search pasted text / code instead**.
2. Paste your content into the text area.
3. Enter the term in the search field and click **Search Text** (or press Ctrl/⌘ + Enter while focused in the text area).
4. Review matching lines in the result list.

### Website finder

Paste text or code into the website text area, enter a query, and use the result list to inspect matching lines. The website's **Clear All** control clears the current website session.

## Project structure

```text
loca-arc/
├── index.html              # Static website interface
├── style.css               # Website styles
├── app.js                  # Website search behavior
├── logo.svg                # Vector logo asset
├── logo-original.png       # Website branding
├── icon-original.png       # Main icon asset
├── README.md
└── extension/
    ├── manifest.json        # Chromium Manifest V3 configuration
    ├── background.js        # Context-menu/background workflow
    ├── popup.html           # Extension popup markup
    ├── popup.css            # Popup interface styles
    ├── popup.js             # Search, highlighting and navigation
    ├── README.md
    ├── logo.svg
    └── icon-16/32/48/128.png
```

## Technology

- HTML, CSS and vanilla JavaScript
- Chromium Extensions Manifest V3
- `chrome.scripting`, `chrome.tabs`, `chrome.storage`, and context menus
- DOM text-node traversal and the CSS Custom Highlight API when available
- GitHub Pages for optional static hosting

## Permissions and privacy

The extension manifest requests `activeTab`, `scripting`, `contextMenus`, and `storage`. These support searching the active tab when invoked, injecting the search routine, providing a selected-text context-menu workflow, and temporarily passing selected text to the popup. The core project does not include analytics, an external search API, or a server-side content upload. As with any extension, review the source before installing and only load it from a source you trust.

## Compatibility and limitations

- Designed for Chrome and compatible Chromium-based browsers that support Manifest V3.
- Browser-internal pages, the Chrome Web Store, some protected pages, and certain PDF or application surfaces may block extension access.
- Search is based on accessible DOM text nodes; text rendered only in canvas, inaccessible frames, or complex editor internals may not be searchable.
- Highlight support depends on the browser's CSS Custom Highlight API. If unavailable, search results may still be returned but inline highlighting may not work.
- The current-page search caps the collected matches at 500 to keep the operation bounded.
- Search results represent the page state at the time of the search. Dynamic pages may change after scanning.

## Troubleshooting

**The extension says the page is unavailable.** Try a regular website instead of a browser-internal page or store page.

**No highlight appears.** Confirm the phrase exists in visible/accessibly exposed page text. Some browsers or page structures may not support inline highlighting.

**The popup does not reflect recent code changes.** Open the extensions page, click **Reload**, then close and reopen the popup.

**A dynamic page changed after searching.** Run the search again to refresh the matches.

## Contributing

Bug reports and focused improvements are welcome. Please include the browser/version, steps to reproduce, expected behavior, and actual behavior. Keep changes dependency-light and preserve the local-first approach. Test both the website and extension separately when changing shared behavior.

## License

No license file is currently included. Unless a license is added to the repository, reuse and redistribution are not explicitly granted. Add a `LICENSE` file before presenting the project as open source.

## Version history

- **0.3.1** — Rounded popup redesign, reset/clear-highlights control, expandable How to Use and About sections, X profile link, and refreshed documentation.
- **0.2.1** — Current-page search, result navigation, pasted text/code search, and context-menu workflow.

---

<div align="center">
  <strong>loca.arc</strong><br>
  © 2026 loca.arc · Created by <a href="https://x.com/0xKonitmi">@Konitmi</a> · All rights reserved.
</div>


## V3.1 update
- Added light/dark mode toggles with locally saved preferences (website and extension save separately).
- Added a compact three-dot menu for How to Use and About loca.arc.
- Kept webpage search, pasted-text search, match navigation, and Reset.
