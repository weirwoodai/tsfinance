export interface Filing {
  DocumentType: string;
  EntityRegistrantName: string;
  CurrentFiscalYearEndDate: string;
  EntityCentralIndexKey: number;
  EntityFilerCategory: string;
  TradingSymbol: string;
  DocumentPeriodEndDate: string;
  DocumentFiscalYearFocus: string;
  DocumentFiscalPeriodFocus: string;
  Assets: number;
  CurrentAssets: number;
  NoncurrentAssets: number;
  LiabilitiesAndEquity: number;
  Liabilities: number;
  CurrentLiabilities: number;
  NoncurrentLiabilities: number;
  Equity: number;
  Revenues: number;
  CostOfRevenue: number;
  GrossProfit: number;
  OperatingExpenses: number;
  NetCashFlow: number;
  NetCashFlowsInvesting: number;
  NetCashFlowsFinancing: number;
}
