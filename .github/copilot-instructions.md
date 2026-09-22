# Copilot instructions

This repository contains a Playwright end-to-end suite for the CTRM application.

## Project structure
- `tests/e2e/` — test scenarios
- `tests/steps/` — reusable flow actions
- `tests/pages/` — page object models
- `tests/api/` — API helpers
- `tests/utils/` — test data and shared utilities

## Working style
- Prefer readable, business-oriented test flow over low-level implementation detail.
- Put selectors and UI logic in page objects or step helpers, not directly in specs.
- Favor role/label selectors and avoid guessing at unsupported selectors.
- Use unique values per run so tests can be rerun without assuming a clean state.

## Commands
- `npm install`
- `npx playwright install`
- `cp .env.example .env`
- `npm test`
- `npm run test:headed`
- `npm run test:report`

## Notes
- The main scenario is the purchase-sale flow and should remain the reference pattern.
- Base URL is configured via `BASE_URL`; default is `http://localhost:3000`.
- Do not add tests that rely on `data-testid` attributes not present in the app.
- Keep implementation consistent with the existing project conventions and TypeScript path aliases.
