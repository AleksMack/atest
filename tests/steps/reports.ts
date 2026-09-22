import { Page } from '@playwright/test';
import { ReportPage, ReportRow } from '@pages/report.page';

export async function getReportRowForTrade(page: Page, tradeId: string): Promise<ReportRow> {
  const reportPage = new ReportPage(page);
  await reportPage.open();
  return reportPage.findRowByTradeId(tradeId);
}
