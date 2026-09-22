import { Page } from '@playwright/test';
import { TradeFormPage, TradeFormData } from '@pages/trade-form.page';

export async function createPurchaseTrade(page: Page, data: TradeFormData): Promise<string> {
  const tradeForm = new TradeFormPage(page);
  return tradeForm.create('purchase', data);
}

export async function createSalesTrade(page: Page, data: TradeFormData): Promise<string> {
  const tradeForm = new TradeFormPage(page);
  return tradeForm.create('sale', data);
}
