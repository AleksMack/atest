import { test } from '@playwright/test';
import { login } from '@steps/auth';
import { createPurchaseTrade, createSalesTrade } from '@steps/trading';
import { enterBillOfLading } from '@steps/logistics';
import { runCargoReceipt, runSalesOperation, expectPriceCalculated } from '@steps/operations';
import { getReportRowForTrade } from '@steps/reports';
import { uniqueCounterparty, uniqueContractNumber } from '@utils/test-data';

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

    const purchaseCounterparty = uniqueCounterparty('Supplier');
    const purchaseTradeId = await createPurchaseTrade(page, {
      counterparty: purchaseCounterparty,
      volume: '1000',
    });

    await enterBillOfLading(page, purchaseTradeId, {
      number: uniqueContractNumber('BOL-P'),
      volume: '1000',
    });

    await runCargoReceipt(page, purchaseTradeId);
    await expectPriceCalculated(page, purchaseTradeId);

    const salesCounterparty = uniqueCounterparty('Buyer');
    const salesTradeId = await createSalesTrade(page, {
      counterparty: salesCounterparty,
      volume: '1000',
    });

    await enterBillOfLading(page, salesTradeId, {
      number: uniqueContractNumber('BOL-S'),
      volume: '1000',
    });

    await runSalesOperation(page, salesTradeId);
    await expectPriceCalculated(page, salesTradeId);

    const reportRow = await getReportRowForTrade(page, salesTradeId);
    // TODO: конкретные проверки полей отчета после уточнения его структуры
    test.info().annotations.push({ type: 'report-row', description: JSON.stringify(reportRow) });
  });
});
