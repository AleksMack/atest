import { test } from '@playwright/test';
import { login } from '@steps/auth';
import { createPurchaseTrade, createSalesTrade } from '@steps/trading';
import { enterBillOfLading } from '@steps/logistics';
import { runCargoReceipt, runSalesOperation, expectPriceCalculated } from '@steps/operations';
import { getReportRowForTrade } from '@steps/reports';
import { createFlowContext } from '@utils/flow-context';

/**
 * Сквозной сценарий: покупка -> оприходование -> продажа -> отчет.
 * Читается как чек-лист, детали реализации в tests/steps и tests/pages.
 */
test.describe('Purchase-sale flow', () => {
  test('full cycle: purchase, cargo receipt, sale, report', async ({ page }) => {
    await login(
      page,
      process.env.TEST_USER_EMAIL!,
      process.env.TEST_USER_PASSWORD!,
      process.env.TEST_USER_OTP!,
    );

    const flow = createFlowContext();
    const purchaseTradeId = await createPurchaseTrade(page, flow);

    await enterBillOfLading(page, flow, 'purchase');

    await runCargoReceipt(page, flow);
    await expectPriceCalculated(page, purchaseTradeId);

    const salesTradeId = await createSalesTrade(page, flow);

    await enterBillOfLading(page, flow, 'sale');

    await runSalesOperation(page, flow);
    await expectPriceCalculated(page, salesTradeId);

    const reportRow = await getReportRowForTrade(page, salesTradeId);
    // TODO: конкретные проверки полей отчета после уточнения его структуры
    test.info().annotations.push({ type: 'report-row', description: JSON.stringify(reportRow) });
  });
});
