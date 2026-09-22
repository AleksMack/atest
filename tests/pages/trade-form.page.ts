import { Page, Locator } from '@playwright/test';

export type TradeType = 'purchase' | 'sale';

export interface TradeFormData {
  counterparty: string;
  volume: string;
  incoterms?: string;
  // TODO: остальные поля формы, после первого прогона на реальном приложении
}

export class TradeFormPage {
  readonly page: Page;
  readonly saveButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.saveButton = page.getByRole('button', { name: /сохранить|save/i });
    // TODO: локаторы полей формы сделки
  }

  async create(type: TradeType, data: TradeFormData): Promise<string> {
    // TODO: реализация. Должна вернуть id/номер созданной сделки для использования
    // на следующих шагах сценария (коносамент, операция, отчет).
    throw new Error('Not implemented: TradeFormPage.create');
  }
}
