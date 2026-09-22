import { Page, Locator } from '@playwright/test';

export interface BillOfLadingData {
  number: string;
  volume: string;
  date?: string;
}

export class BillOfLadingPage {
  static readonly listPath = '/pages/bills-of-lading/list?qp=0';

  readonly page: Page;
  readonly createButton: Locator;
  readonly fileInput: Locator;
  readonly saveButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.createButton = page.getByRole('button', { name: 'Коносамент', exact: true });
    this.fileInput = page.locator('input[type="file"]');
    this.saveButton = page.getByRole('button', { name: /сохранить|save/i });
    // TODO: локаторы полей коносамента
  }

  async gotoList(): Promise<void> {
    await this.page.goto(BillOfLadingPage.listPath);
  }

  async openCreateDialog(): Promise<void> {
    await this.createButton.click();
  }

  async uploadFile(filePath: string): Promise<void> {
    await this.fileInput.setInputFiles(filePath);
  }

  async enter(tradeId: string, data: BillOfLadingData): Promise<void> {
    // TODO: реализация после уточнения экрана
    throw new Error('Not implemented: BillOfLadingPage.enter');
  }
}
