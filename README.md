# Simple React LLM Boilerplate

A smaller, more generic React boilerplate designed so an LLM can recreate the
same structure in another project without carrying extra demo layers.

## Stack

- React + Vite
- Tailwind CSS
- React Router with file-based pages
- React Context for theme
- Shared `fetch` and `axios` helpers
- Error Boundary at the app level

## Getting started

```bash
npm install
npm run dev
```

## Project structure

```text
.
├── project-structure.json
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── ErrorBoundary.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Layout.jsx
│   │   └── ThemeToggle.jsx
│   ├── context/
│   │   └── ThemeContext.jsx
│   ├── pages/
│   │   ├── index.jsx
│   │   └── not-found.jsx
│   ├── router/
│   │   ├── index.jsx
│   │   └── route-builder.jsx
│   ├── services/
│   │   └── http.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── jsconfig.json
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

## Routing

- `src/pages/index.jsx` maps to `/`
- `src/pages/not-found.jsx` maps to `*`
- Add more files inside `src/pages` to create more routes

The route generator lives in `src/router/route-builder.jsx` and uses
`import.meta.glob()` so new pages are discovered automatically.

## Core conventions

- Keep the structure shallow
- Keep shared shell UI in `src/components`
- Keep theme or other global context in `src/context`
- Keep HTTP setup in `src/services/http.js`
- Add more folders only when the real project needs them

## Exported structure JSON

`project-structure.json` is the machine-readable version of this boilerplate.
It is intentionally small and avoids sample content folders, docs routes, and
feature demo modules so another LLM can reproduce the same base more reliably.
