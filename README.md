# nodejs-ci-starter

A tiny Node.js repo tailored for the provided GitHub Actions workflow. It has:
- a **build** step (creates `dist/index.js`), and
- a **test** step (runs a basic assertion-based test),
with **no external dependencies**, so `npm ci` succeeds with the included lockfile.

## Scripts
- `npm run build` – copies `src/index.js` into `dist/index.js` with a small banner.
- `npm test` – runs `tests/test.js` using Node's built-in `assert`.

## Local usage
```bash
nvm use 14   # optional; matches CI
npm ci
npm run build
npm test
npm start
```

## GitHub Actions
The workflow lives at `.github/workflows/nodejs-ci.yml` and exactly matches your YAML.
