import { APIRequestContext, request } from '@playwright/test';

/**
 * Каркас API-клиента. Используется только для подготовки вспомогательных данных
 * (шаги, которые сами не являются предметом проверки в UI-сценарии), см. STRATEGY.md.
 *
 * После получения Swagger-спецификации рекомендуется сгенерировать типизированный
 * клиент (например, через openapi-typescript) вместо ручных fetch-вызовов ниже.
 */
export async function createApiContext(): Promise<APIRequestContext> {
  return request.newContext({
    baseURL: process.env.API_BASE_URL ?? process.env.BASE_URL ?? 'http://localhost:3000',
    extraHTTPHeaders: {
      // TODO: авторизация. Например Authorization: `Bearer ${process.env.API_TOKEN}`
    },
  });
}

// TODO: методы-обертки после уточнения эндпоинтов, например:
// export async function apiGetTrade(api: APIRequestContext, tradeId: string) { ... }
