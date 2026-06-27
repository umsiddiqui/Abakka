# Abakka — Senior Data Engineering, Productized

A lean, senior data engineering studio site built with Next.js. Fixed-scope, fixed-price data platform bundles for Databricks and Cloudera CDP.

## Tech stack

- Next.js 16 (App Router)
- React 19 + TypeScript
- Tailwind CSS v4
- DM Sans / DM Mono fonts

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Available scripts

- `npm run dev` — start the development server
- `npm run build` — create an optimized production build
- `npm run start` — start the production server
- `npm run lint` — run ESLint

## Project structure

```
app/
  components/     # Nav, Footer, PlatformBundles, AnimateIn
  page.tsx        # Home page
  bundles/        # Bundles / packages page
  about/          # About / founders page
  contact/        # Contact page
  how-it-works/   # Process page
```

## Notes

- `node_modules/` and `.next/` are gitignored.
- The GTM plan, design assets, and other project files live outside this repo in the parent `Databricks/` folder.
