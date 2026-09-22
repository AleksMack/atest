import { Page, Locator } from '@playwright/test';

export interface BillOfLadingData {
  number: string;
  volume: string;
  date?: string;
}

export class BillOfLadingPage {
  readonly page: Page;
  readonly saveButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.saveButton = page.getByRole('button', { name: /сохранить|save/i });
    // TODO: локаторы полей коносамента
  }

  async enter(tradeId: string, data: BillOfLadingData): Promise<void> {
    // TODO: реализация после уточнения экрана
    throw new Error('Not implemented: BillOfLadingPage.enter');
  }
}
