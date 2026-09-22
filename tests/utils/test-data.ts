/**
 * Среда не сбрасывается между прогонами (см. STRATEGY.md), поэтому каждая
 * сущность создается с уникальным суффиксом, чтобы тест находил свои данные
 * и не зависел от состояния среды.
 */
export function uniqueSuffix(): string {
  return `${Date.now()}-${Math.floor(Math.random() * 1000)}`;
}

export function uniqueCounterparty(base = 'TestCounterparty'): string {
  return `${base}-${uniqueSuffix()}`;
}

export function uniqueContractNumber(base = 'TST'): string {
  return `${base}-${uniqueSuffix()}`;
}
