import { Page } from '@playwright/test';

export interface ReportRow {
  [key: string]: string;
}

export class ReportPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
    // TODO: локаторы отчета (таблица, фильтры)
  }

  async open(): Promise<void> {
    // TODO: переход в раздел отчета
    throw new Error('Not implemented: ReportPage.open');
  }

  async findRowByTradeId(tradeId: string): Promise<ReportRow> {
    // TODO: найти строку по id сделки и вернуть значения для сверки
    throw new Error('Not implemented: ReportPage.findRowByTradeId');
  }
}
