# AGENTS.md

## Project overview
This repository contains a Playwright + TypeScript end-to-end test suite for the CTRM application.

Primary objective: verify the business flow from trade creation through logistics, operations, and reporting without depending on brittle implementation details.

## Architecture
- `tests/e2e/` contains scenario-level specs. Keep them readable and thin.
- `tests/steps/` contains user actions and business flows.
- `tests/pages/` contains page objects for screens and complex interactions.
- `tests/api/` contains API helpers and typed client logic when it is needed for setup or verification.
- `tests/utils/` contains reusable utilities and unique test-data generation.

## Working rules
- Prefer role- and label-based locators (`getByRole`, `getByLabel`) over CSS selectors.
- Keep selectors and form logic inside page objects or steps, not directly in the spec.
- Do not rely on a clean environment; create unique entity names and identifiers per test run.
- Preserve the sequential flow in the main purchase-sale scenario because the business process is stateful.
- If a real app contract is unclear, prefer the existing strategy and leave a TODO instead of guessing at a locator.

## Commands
- `npm install`
- `npx playwright install`
- `cp .env.example .env` and fill in `BASE_URL`, `TEST_USER_EMAIL`, and `TEST_USER_PASSWORD`
- `npm test` for headless execution
- `npm run test:headed` for browser debugging
- `npm run test:report` to open the HTML report

## Test-practice expectations
- Use unique counterparty or contract IDs for each run.
- Keep scenario names descriptive and business-oriented.
- Favor one flow over broad duplication; the main spec is the full purchase-sale cycle.
- Prefer assertions that validate user-visible outcomes.

## Repository-specific constraints
- No CI wiring is currently set up; local execution is the default.
- The base URL comes from `BASE_URL` in `.env` and defaults to `http://localhost:3000` when unset.
- Browser traces, screenshots, and videos are retained on failure via Playwright config.
- `data-testid` is not assumed to exist; tests should be resilient to current UI constraints.

## When making changes
- Update the relevant page object or step file rather than editing every scenario.
- Keep the scenario file as a checklist of business actions.
- Ensure new code is TypeScript-safe and consistent with the existing path aliases and structure.
