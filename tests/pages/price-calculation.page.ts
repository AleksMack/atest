import { Page } from '@playwright/test';

export class PriceCalculationPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
    // TODO: локатор поля/блока с рассчитанной ценой
  }

  async getCalculatedPrice(tradeId: string): Promise<number> {
    // TODO: прочитать значение из UI и распарсить в число
    throw new Error('Not implemented: PriceCalculationPage.getCalculatedPrice');
  }
}
