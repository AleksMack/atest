import { Page, Locator } from '@playwright/test';

export type OperationType = 'cargo-receipt' | 'sale';

export class OperationsPage {
  readonly page: Page;
  readonly runButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.runButton = page.getByRole('button', { name: /выполнить|run|провести/i });
    // TODO: локаторы экрана операции
  }

  async run(type: OperationType, tradeId: string): Promise<void> {
    // TODO: реализация после уточнения экрана
    throw new Error('Not implemented: OperationsPage.run');
  }

  async expectCompleted(): Promise<void> {
    // TODO: реальный признак завершения операции (статус, тост, etc.)
    throw new Error('Not implemented: OperationsPage.expectCompleted');
  }
}
