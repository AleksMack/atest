import { Page } from '@playwright/test';
import { BillOfLadingPage } from '@pages/bill-of-lading.page';
import { FlowContext } from '@utils/flow-context';

export async function enterBillOfLading(
  page: Page,
  flow: FlowContext,
  side: 'purchase' | 'sale',
): Promise<void> {
  const bolPage = new BillOfLadingPage(page);
  const entities = flow[side];
  const tradeId = entities.trade.id;
  if (!tradeId) {
    throw new Error(`Cannot create ${side} bill of lading before its trade exists`);
  }

  const billOfLadingId = await bolPage.enter(tradeId, entities.billOfLading);
  entities.billOfLading.tradeId = tradeId;
  entities.billOfLading.id = billOfLadingId;
  entities.operation.billOfLadingId = billOfLadingId;
}
