import { Page, expect } from '@playwright/test';
import { OperationsPage } from '@pages/operations.page';
import { PriceCalculationPage } from '@pages/price-calculation.page';

export async function runCargoReceipt(page: Page, tradeId: string): Promise<void> {
  const operationsPage = new OperationsPage(page);
  await operationsPage.run('cargo-receipt', tradeId);
  await operationsPage.expectCompleted();
}

export async function runSalesOperation(page: Page, tradeId: string): Promise<void> {
  const operationsPage = new OperationsPage(page);
  await operationsPage.run('sale', tradeId);
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
