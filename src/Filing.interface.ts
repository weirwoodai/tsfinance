interface Filing {
  EntityRegistrantName: string;
  CurrentFiscalYearEndDate: string;
  EntityCentralIndexKey: number;
  EntityFilerCategory: string;
  TradingSymbol: string;
  DocumentPeriodEndDate: string;
  DocumentFiscalYearFocus: string;
  DocumentFiscalPeriodFocus: string;
  DocumentFiscalYearFocusContext: string;
  DocumentFiscalPeriodFocusContext: string;
  DocumentType: string;
  BalanceSheetDate: string;
  IncomeStatementPeriodYTD: string;
  ContextForInstants: string;
  ContextForDurations: string;
  Assets: number;
  CurrentAssets: number;
  NoncurrentAssets: number;
  LiabilitiesAndEquity: number;
  Liabilities: number;
  CurrentLiabilities: number;
  NoncurrentLiabilities: number;
  CommitmentsAndContingencies: number;
  TemporaryEquity: number;
  Equity: number;
  EquityAttributableToNoncontrollingInterest: number;
  EquityAttributableToParent: number;
  Revenues: number;
  CostOfRevenue: number;
  GrossProfit: number;
  OperatingExpenses: number;
  CostsAndExpenses: number;
  OtherOperatingIncome: number;
  OperatingIncomeLoss: number;
  NonoperatingIncomeLoss: number;
  InterestAndDebtExpense: number;
  IncomeBeforeEquityMethodInvestments: number;
  IncomeFromEquityMethodInvestments: number;
  IncomeFromContinuingOperationsBeforeTax: number;
  IncomeTaxExpenseBenefit: number;
  IncomeFromContinuingOperationsAfterTax: number;
  IncomeFromDiscontinuedOperations: number;
  ExtraordaryItemsGainLoss: number;
  NetIncomeLoss: number;
  NetIncomeAvailableToCommonStockholdersBasic: number;
  PreferredStockDividendsAndOtherAdjustments: number;
  NetIncomeAttributableToNoncontrollingInterest: number;
  NetIncomeAttributableToParent: number;
  OtherComprehensiveIncome: number;
  ComprehensiveIncome: number;
  ComprehensiveIncomeAttributableToParent: number;
  ComprehensiveIncomeAttributableToNoncontrollingInterest: number;
  NonoperatingIncomeLossPlusInterestAndDebtExpense: number;
  NonoperatingIncomePlusInterestAndDebtExpensePlusIncomeFromEquityMethodInvestments: number;
  NetCashFlow: number;
  NetCashFlowsOperating: number;
  NetCashFlowsInvesting: number;
  NetCashFlowsFinancing: number;
  NetCashFlowsOperatingContinuing: number;
  NetCashFlowsInvestingContinuing: number;
  NetCashFlowsFinancingContinuing: number;
  NetCashFlowsOperatingDiscontinued: number;
  NetCashFlowsInvestingDiscontinued: number;
  NetCashFlowsFinancingDiscontinued: number;
  NetCashFlowsDiscontinued: number;
  ExchangeGainsLosses: number;
  NetCashFlowsContinuing: number;
  SGR: number;
  ROA: number | null;
  ROE: number | null;
  ROS: number | null;
}

export default Filing;
