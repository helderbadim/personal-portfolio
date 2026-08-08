# H&eacute;lder Badim &mdash; Software Engineer Portfolio

A responsive Angular portfolio presenting my software engineering work, professional experience, and engineering toolkit.

**Live site:** [helderbadim.github.io/personal-portfolio](https://helderbadim.github.io/personal-portfolio/)

## Highlights

- Responsive layout for mobile, tablet, and desktop
- Accessible mobile navigation and project-detail dialogs
- Project case studies with live and source links
- Light and dark themes with persisted preferences
- Semantic markup, keyboard support, and reduced-motion handling
- Scroll reveals and lightweight CSS interactions
- Social metadata for link previews
- Automated GitHub Pages deployment

## Built with

- Angular 21
- TypeScript
- SCSS
- RxJS
- Vitest
- Angular SSR tooling

## Local development

Requirements:

- Node.js 22
- npm 10 or later

Install dependencies and start the development server:

```bash
npm ci
npm start
```

Open [http://localhost:4200](http://localhost:4200).

When developing through WSL with the repository stored under `/mnt/c`, use polling if file changes are not detected:

```bash
npm start -- --poll=1000
```

## Production build

```bash
npm run build
```

The generated application is written to `dist/personal-portfolio`.

## Deployment

The GitHub Actions workflow in `.github/workflows/deploy.yml` builds and deploys the portfolio to GitHub Pages whenever changes are pushed to `master`.

```bash
git push origin master
```

Deployment progress is available in the repository's **Actions** tab.

## Content

Portfolio content is maintained primarily in:

- `src/app/data/portfolio.data.ts` &mdash; projects, experience, and skills
- `src/app/components/` &mdash; section templates and interactions
- `src/app/app.scss` &mdash; global component and responsive styling
- `public/` &mdash; project previews, social imagery, and static assets
