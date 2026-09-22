import { Page } from '@playwright/test';
import { BillOfLadingPage, BillOfLadingData } from '@pages/bill-of-lading.page';

export async function enterBillOfLading(page: Page, tradeId: string, data: BillOfLadingData): Promise<void> {
  const bolPage = new BillOfLadingPage(page);
  await bolPage.enter(tradeId, data);
}
