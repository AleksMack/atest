import { defineConfig, devices } from '@playwright/test';

/**
 * Базовый конфиг. Запуск только локальный, CI пока не настроен (см. STRATEGY.md).
 * BASE_URL и креды берутся из .env, файл .env не коммитится.
 */
export default defineConfig({
  testDir: './tests/e2e',
  timeout: 60_000,
  expect: {
    timeout: 10_000,
  },
  fullyParallel: false, // сценарий стейтфул (покупка -> продажа), сначала стабилизируем последовательный запуск
  retries: 0,
  reporter: [['html', { open: 'never' }], ['list']],
  use: {
    baseURL: process.env.BASE_URL ?? 'http://localhost:3000',
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
