# Page Objects

Правило: Page Object отвечает за то, **как** взаимодействовать с конкретным экраном
(локаторы, низкоуровневые действия). Файлы в `tests/steps/` отвечают за то, **что**
делает пользователь на уровне бизнес-сценария, и используют Page Object внутри себя.
Сам тест в `tests/e2e/` не знает про локаторы вообще.

## Список объектов (по шагам сценария)

| Page Object | Файл | Отвечает за |
|---|---|---|
| `LoginPage` | `tests/pages/login.page.ts` | Форма логина: поля, кнопка входа, проверка ошибки авторизации |
| `TradeFormPage` | `tests/pages/trade-form.page.ts` | Форма создания сделки (покупка/продажа): общие поля контракта, сохранение, переход в статус |
| `BillOfLadingPage` | `tests/pages/bill-of-lading.page.ts` | Ввод коносамента: номер, объем, дата, привязка к сделке |
| `OperationsPage` | `tests/pages/operations.page.ts` | Операция оприходования / операция продажи: запуск операции, статус выполнения |
| `PriceCalculationPage` | `tests/pages/price-calculation.page.ts` | Отображение и чтение рассчитанной цены (покупка/продажа) |
| `ReportPage` | `tests/pages/report.page.ts` | Открытие отчета, чтение строк/значений для сверки |

Разделение сделано по экранам, а не по шагам 1:1, потому что `TradeFormPage`
переиспользуется и для покупки, и для продажи (форма та же, разные типы сделки),
это снижает дублирование при изменениях формы.

## Пример: LoginPage

```ts
// tests/pages/login.page.ts
import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly submitButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailInput = page.getByLabel(/email|логин/i);
    this.passwordInput = page.getByLabel(/пароль|password/i);
    this.submitButton = page.getByRole('button', { name: /войти|log ?in/i });
  }

  async goto() {
    await this.page.goto('/login');
  }

  async login(email: string, password: string) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.submitButton.click();
  }

  async expectLoggedIn() {
    // TODO: заменить на реальный признак успешного логина (дашборд, меню и т.п.)
    await expect(this.page).not.toHaveURL(/login/);
  }
}
```

## Пример: TradeFormPage (каркас, требует уточнения полей формы)

```ts
// tests/pages/trade-form.page.ts
import { Page, Locator } from '@playwright/test';

export type TradeType = 'purchase' | 'sale';

export class TradeFormPage {
  readonly page: Page;
  readonly saveButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.saveButton = page.getByRole('button', { name: /сохранить|save/i });
    // TODO: локаторы конкретных полей сделки (контрагент, объем, incoterms и т.д.)
    // заполняются после первого прогона на реальном приложении
  }

  async create(type: TradeType, data: TradeFormData): Promise<string> {
    // TODO: реализация после уточнения структуры формы
  }
}
```

Данные, общие для нескольких экранов одного сценария, не создаются внутри
Page Object. Они хранятся в `FlowContext` из `tests/utils/flow-context.ts` и
передаются шагам; Page Object получает только данные своего экрана.

Остальные Page Object (`BillOfLadingPage`, `OperationsPage`, `PriceCalculationPage`,
`ReportPage`) создаются по тому же принципу: сначала каркас с TODO на локаторы,
наполнение после прогона на реальном приложении, чтобы не гадать по названиям полей.
