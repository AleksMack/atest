import { uniqueCounterparty, uniqueContractNumber, uniqueSuffix } from '@utils/test-data';

export interface FlowTrade {
  id?: string;
  type: 'purchase' | 'sale';
  counterparty: string;
  product: string;
  volume: string;
  contractId?: string;
}

export interface FlowContract {
  id?: string;
  number: string;
  product: string;
  counterparty: string;
  volume: string;
  unitPrice: string;
  currency: string;
  incoterms?: string;
}

export interface FlowBillOfLading {
  id?: string;
  number: string;
  product: string;
  vessel: string;
  volume: string;
  tradeId?: string;
  date?: string;
}

export interface FlowOperation {
  id?: string;
  type: 'cargo-receipt' | 'sale';
  product: string;
  vessel: string;
  freight: string;
  tradeId?: string;
  billOfLadingId?: string;
}

export interface FlowWarehouseBatch {
  id?: string;
  product: string;
  vessel: string;
  volume: string;
  receiptOperationId?: string;
  unitCost?: string;
  totalCost?: string;
}

export interface FlowInvoice {
  id?: string;
  number: string;
  tradeId?: string;
  product: string;
  volume: string;
  amount?: string;
  currency: string;
  status?: string;
}

export interface FlowPayment {
  id?: string;
  number: string;
  invoiceId?: string;
  amount?: string;
  currency: string;
  status?: string;
}

export interface FlowBankStatement {
  id?: string;
  number: string;
  paymentId?: string;
  amount?: string;
  currency: string;
  status?: string;
}

export interface FlowEconomics {
  purchaseAmount?: string;
  freightAmount?: string;
  otherCostAmount?: string;
  totalCost?: string;
  revenue?: string;
  result?: string;
  margin?: string;
}

export interface FlowMasterData {
  commodityId?: string;
  productId?: string;
  subproductId?: string;
  supplierId?: string;
  buyerId?: string;
  sellerLegalEntityId?: string;
  buyerLegalEntityId?: string;
  currencyId?: string;
  unitOfMeasureId?: string;
  loadPortId?: string;
  dischargePortId?: string;
  incotermsId?: string;
  paymentTermsId?: string;
  quoteIndexId?: string;
  characteristicId?: string;
  escalationId?: string;
  insurerId?: string;
  carrierId?: string;
  shipperId?: string;
  vesselId?: string;
  bankId?: string;
  projectId?: string;
  subprojectId?: string;
  warehouseId?: string;
  resourceId?: string;
  bankAccountId?: string;
}

export interface FlowContext {
  flowId: string;
  product: string;
  vessel: string;
  freight: string;
  masterData: FlowMasterData;
  purchaseContract: FlowContract;
  purchase: {
    trade: FlowTrade;
    billOfLading: FlowBillOfLading;
    operation: FlowOperation;
  };
  sale: {
    trade: FlowTrade;
    billOfLading: FlowBillOfLading;
    operation: FlowOperation;
  };
  warehouse: FlowWarehouseBatch;
  invoice: FlowInvoice;
  payment: FlowPayment;
  bankStatement: FlowBankStatement;
  economics: FlowEconomics;
}

export interface CreateFlowContextOptions {
  product?: string;
  vessel?: string;
  freight?: string;
  volume?: string;
  purchaseUnitPrice?: string;
  currency?: string;
  masterData?: FlowMasterData;
}

export function createFlowContext(options: CreateFlowContextOptions = {}): FlowContext {
  const flowId = uniqueSuffix();
  const product = options.product ?? `Commodity-A-${flowId}`;
  const vessel = options.vessel ?? `Vessel-A-${flowId}`;
  const freight = options.freight ?? `Фрахт-${vessel}`;
  const volume = options.volume ?? '1000';
  const currency = options.currency ?? 'USD';
  const purchaseUnitPrice = options.purchaseUnitPrice ?? '700';
  const purchaseCounterparty = uniqueCounterparty('Supplier');
  const purchaseContractNumber = uniqueContractNumber('CONTRACT-P');
  const salesCounterparty = uniqueCounterparty('Buyer');

  return {
    flowId,
    product,
    vessel,
    freight,
    masterData: options.masterData ?? {},
    purchaseContract: {
      number: purchaseContractNumber,
      product,
      counterparty: purchaseCounterparty,
      volume,
      unitPrice: purchaseUnitPrice,
      currency,
    },
    purchase: {
      trade: {
        type: 'purchase',
        counterparty: purchaseCounterparty,
        product,
        volume,
      },
      billOfLading: {
        number: uniqueContractNumber('BOL-P'),
        product,
        vessel,
        volume,
      },
      operation: {
        type: 'cargo-receipt',
        product,
        vessel,
        freight,
      },
    },
    sale: {
      trade: {
        type: 'sale',
        counterparty: salesCounterparty,
        product,
        volume,
      },
      billOfLading: {
        number: uniqueContractNumber('BOL-S'),
        product,
        vessel,
        volume,
      },
      operation: {
        type: 'sale',
        product,
        vessel,
        freight,
      },
    },
    warehouse: {
      product,
      vessel,
      volume,
    },
    invoice: {
      number: uniqueContractNumber('INVOICE'),
      product,
      volume,
      currency,
    },
    payment: {
      number: uniqueContractNumber('PAYMENT'),
      currency,
    },
    bankStatement: {
      number: uniqueContractNumber('STATEMENT'),
      currency,
    },
    economics: {},
  };
}