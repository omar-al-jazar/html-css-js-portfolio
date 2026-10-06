# omar-barakat-portfolio

Personal portfolio website for **Omar Barakat** — IT Support Engineer (VIP/Enterprise support, M365/Exchange, Active Directory, VPN) currently upskilling in **AWS & Terraform**.

A lightweight, responsive single-page site built with plain HTML, CSS, and JavaScript — no frameworks, no build step.

## Features

- **Single-page layout** — Hero, Profile, About, Experience, and Contact sections
- **Apple-style glassmorphism** UI (`.apple-glass` cards)
- **Responsive** navigation with a mobile menu toggle
- **Data-bound content** — key text (name, role, tagline, links) is populated via `data-bind` attributes in `script.js`, so profile details live in one place

## Project structure

```
.
├── index.html         # Page markup and section layout
├── style.css          # Core styles (glassmorphism, layout, typography)
├── mediaqueries.css   # Responsive breakpoints
├── script.js          # Data binding + mobile menu toggle + footer year
└── assets/            # Images, icons, and resume PDF
```

## Running locally

It's a static site — no dependencies to install. Either open the file directly:

```bash
open index.html        # macOS   (use "start" on Windows, "xdg-open" on Linux)
```

or serve it over a local HTTP server (recommended, so relative paths behave):

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deployment

The site can be hosted on any static host (GitHub Pages, Netlify, Vercel).
To publish with **GitHub Pages**: repo **Settings → Pages → Build and deployment → Deploy from a branch → `main` / root**.

## License

Personal project. All rights reserved unless stated otherwise.
