

## 🔋 ⚡ Battery Packed template

- ✔️ toolings for linting, formatting, and conventions configured

  `eslint`, `prettier`, `husky`, `lint-staged`, `commitlint`, `commitizen`, and `standard-version`

- 📱 PWA-ready

  `next-pwa` configured, disabled by default, just enable it through `next.config.js`

- 🔎 SEO optimization configured

  with `next-seo` and `next-sitemap`. you'll need to reconfigure or tinker with it to get it right according to your needs, but it's there if you need it.

- 🎨 basic responsive layout configured

  don't need it? just remove it 😃

## Pre-requisites

1. [Node.js](https://nodejs.org/en/) or nvm installed.
2. `yarn` installed.

## Getting Started

1. After cloning the project, run this command: `yarn` or `yarn install`

2. Then, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/lib/pages/index.tsx`. The page auto-updates as you edit the file.

## How to Run e2e Test (in local machine)

1. Build production with `yarn build`, then run the production build using `yarn start`.
2. Open another terminal (or new terminal tab, don't cancel / close the production server), then run the test with `yarn test:e2e`.
