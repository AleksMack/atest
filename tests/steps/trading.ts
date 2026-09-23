import { Page } from '@playwright/test';
import { TradeFormPage } from '@pages/trade-form.page';
import { FlowContext } from '@utils/flow-context';

export async function createPurchaseTrade(page: Page, flow: FlowContext): Promise<string> {
  const tradeForm = new TradeFormPage(page);
  const tradeId = await tradeForm.create('purchase', flow.purchase.trade);
  flow.purchase.trade.id = tradeId;
  return tradeId;
}

export async function createSalesTrade(page: Page, flow: FlowContext): Promise<string> {
  const tradeForm = new TradeFormPage(page);
  const tradeId = await tradeForm.create('sale', flow.sale.trade);
  flow.sale.trade.id = tradeId;
  return tradeId;
}
