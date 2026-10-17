# BSIT Student Portfolio

A responsive, dark/light portfolio built with plain HTML, CSS and JavaScript. No build step, no dependencies.

**Live site:** `https://YOUR-USERNAME.github.io/YOUR-REPO/` (after you follow the steps below)

## Features
- Dark and light themes, responsive layout, smooth scrolling, keyboard-accessible
- Skills with filters, project modals, expandable case studies
- IPv4 subnet calculator with input validation
- Contact form with validation (opens the visitor's email app)

## Project structure
```
index.html        page structure
css/style.css     styling and themes
js/data.js        ALL your content (edit this)
js/main.js        behavior (rendering, theme, calculator, forms)
assets/           resume.pdf, profile photo
```

## Customize
1. Open `js/data.js` and replace every `[bracketed]` placeholder with your real details. Only list skills and experience you actually have.
2. Replace `assets/resume.pdf` with your resume (keep the same file name).
3. Add images to `assets/`, then set their paths in `data.js`.
4. Put your name in `LICENSE`, or delete the file.

## Run locally
Open `index.html` in a browser, or run `python -m http.server` in this folder and visit `http://localhost:8000`.

## Publish on GitHub Pages
```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git push -u origin main
```
Then on GitHub: **Settings > Pages > Build and deployment > Deploy from a branch > main / (root) > Save**. The site goes live in about a minute.

Later updates: `git add . && git commit -m "Update" && git push`.

## Contact form note
GitHub Pages is static, so the form opens the visitor's email app. To receive messages directly, connect Formspree, EmailJS or your own backend.
