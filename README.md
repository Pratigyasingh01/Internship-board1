# Launchpad — Internship Board

A responsive, accessible internship discovery board built with semantic HTML, CSS, and vanilla JavaScript.

## Features

- Responsive layouts for desktop, tablet, and mobile.
- Search by role, company, domain, work mode, or location.
- Domain filter populated from the internship data.
- Live result count and helpful empty state.
- Error state for rendering failures.
- Keyboard shortcut `/` to focus the search field.
- Semantic landmarks, associated labels, and accessible status announcements.
- Reusable internship card rendering with DOM APIs.

## Project structure

```text
internship-board/
├── index.html
├── README.md
├── src/
│   ├── app.js
│   └── styles.css
├── data/
│   └── internships.json
└── examples/
    └── sample-searches.md
```

## Run locally

No build tools or dependencies are required.

1. Download or clone this repository.
2. Open `index.html` in a modern browser.

For a local development server, run:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Deployment (GitHub Pages)

1. Push the project to a public GitHub repository.
2. Open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select `main` and `/ (root)`, then save.
5. Wait for the Pages deployment to finish. The public page URL will appear in the Pages section.

## Data note

The listings are fictional sample records for this coursework demonstration. Contact links use a placeholder email address and should be replaced with real application destinations before production use.

## Screenshots

Add your screenshots to an `examples/screenshots/` folder and update this section with image links after capturing the deployed page.

## Accessibility and testing checklist

- [x] Semantic header, nav, main, section, article, and footer elements.
- [x] Explicit labels for search and filter controls.
- [x] Search results announced using `aria-live`.
- [x] Empty and error states.
- [x] Responsive grid and mobile navigation.
- [x] Keyboard shortcut to focus search.
- [ ] Verify with keyboard-only navigation in the target browser.
- [ ] Capture desktop and mobile screenshots after deployment.
