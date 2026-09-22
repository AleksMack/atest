# CTRM E2E tests

Стратегия и обоснование решений: см. `STRATEGY.md`.
Описание Page Object: см. `PAGE_OBJECTS.md`.

## Установка

```bash
npm install
npx playwright install        # скачивает браузеры, нужен доступ в интернет
cp .env.example .env          # заполнить BASE_URL и тестового пользователя
```

## Запуск

```bash
npm test                      # headless
npm run test:headed           # с открытым браузером, удобно при отладке локаторов
npm run test:report           # открыть html-отчет последнего прогона
```

## Статус

Каркас проекта и один сквозной сценарий (`tests/e2e/purchase-sale-flow.spec.ts`)
готовы структурно. Локаторы в `tests/pages/*.page.ts` помечены `TODO`, заполняются
после первого прогона на реальном приложении, чтобы не гадать по названиям полей.
