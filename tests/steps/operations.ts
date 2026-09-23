import { Page, expect } from '@playwright/test';
import { OperationsPage } from '@pages/operations.page';
import { PriceCalculationPage } from '@pages/price-calculation.page';
import { FlowContext } from '@utils/flow-context';

export async function runCargoReceipt(page: Page, flow: FlowContext): Promise<void> {
  const operationsPage = new OperationsPage(page);
  const tradeId = flow.purchase.trade.id;
  if (!tradeId) {
    throw new Error('Cannot run cargo receipt before the purchase trade exists');
  }
  const operationId = await operationsPage.run('cargo-receipt', {
    ...flow.purchase.operation,
    tradeId,
  });
  flow.purchase.operation.tradeId = tradeId;
  flow.purchase.operation.id = operationId;
  await operationsPage.expectCompleted();
}

export async function runSalesOperation(page: Page, flow: FlowContext): Promise<void> {
  const operationsPage = new OperationsPage(page);
  const tradeId = flow.sale.trade.id;
  if (!tradeId) {
    throw new Error('Cannot run sale before the sales trade exists');
  }
  const operationId = await operationsPage.run('sale', {
    ...flow.sale.operation,
    tradeId,
  });
  flow.sale.operation.tradeId = tradeId;
  flow.sale.operation.id = operationId;
  await operationsPage.expectCompleted();
}

export async function expectPriceCalculated(
  page: Page,
  tradeId: string,
  expected?: number,
): Promise<number> {
  const priceCalcPage = new PriceCalculationPage(page);
  const actual = await priceCalcPage.getCalculatedPrice(tradeId);
  expect(actual).toBeGreaterThan(0);
  if (expected !== undefined) {
    expect(actual).toBeCloseTo(expected, 2);
  }
  return actual;
}
