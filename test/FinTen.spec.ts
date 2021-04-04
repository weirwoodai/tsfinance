import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { expect } from 'chai';
import { FinTen } from '../src/FinTen';
import { GetFilingsResponse } from '../src/GetFilingsResponse.interface';

describe('FinTen tests', function () {
  it('should create a new FinTen instance', () => {
    const finten = new FinTen();
    expect(finten).to.not.be.undefined;
  });

  it('should log in successfully with default settings', async function () {
    const mock = new MockAdapter(axios);
    mock.onPost('/users/login').reply(200, {
      username: 'tsfinance',
      email: 'tsfinance@weirwood.ai',
      isPremium: false,
      token: 'mocked_token'
    });

    const finten = new FinTen();
    await finten.login();
    expect(finten.token).to.not.be.null;
    expect(finten.token).to.not.be.undefined;
  });

  it('should get the tickers from FinTen', async function () {
    const mock = new MockAdapter(axios);
    mock.onGet('/company/tickers').reply(200, {
      tickers: ['AAPL', 'FB', 'GOOG']
    });

    const finten = new FinTen();
    const { tickers } = await finten.getTickers();
    expect(tickers).to.not.be.undefined;
    expect(tickers.length).to.be.greaterThan(0);
  });

  it('should get the filings for AAPL', async function () {
    const mock = new MockAdapter(axios);
    mock.onPost('/users/login').reply(200, {
      username: 'tsfinance',
      email: 'tsfinance@weirwood.ai',
      isPremium: false,
      token: 'mocked_token'
    });
    mock
      .onGet('/company/filings', {
        params: { ticker: 'AAPL' },
        headers: {
          Authorization: 'Bearer mocked_token'
        }
      })
      .reply(200, mockFilingsResponse());

    const finten = new FinTen();
    const { filings } = await finten.getFilings('AAPL');
    expect(filings).to.not.be.undefined;
    expect(filings.length).to.not.be.greaterThan(8);
  });
});

function mockFilingsResponse(): GetFilingsResponse {
  return {
    ticker: 'AAPL',
    filings: [
      {
        EntityRegistrantName: 'APPLE INC',
        CurrentFiscalYearEndDate: '--09-30',
        EntityCentralIndexKey: 320193,
        EntityFilerCategory: 'Large Accelerated Filer',
        TradingSymbol: 'AAPL',
        DocumentPeriodEndDate: '2017-04-01',
        DocumentFiscalYearFocus: '2017',
        DocumentFiscalPeriodFocus: 'Q2',
        DocumentFiscalYearFocusContext: 'FD2017Q2YTD',
        DocumentFiscalPeriodFocusContext: 'FD2017Q2YTD',
        DocumentType: '10-Q',
        BalanceSheetDate: '2017-04-01',
        IncomeStatementPeriodYTD: '2016-09-25',
        ContextForInstants: 'FI2017Q2',
        ContextForDurations: 'FD2017Q2YTD',
        Assets: 334532000000,
        CurrentAssets: 101990000000,
        NoncurrentAssets: 232542000000,
        LiabilitiesAndEquity: 334532000000,
        Liabilities: 200450000000,
        CurrentLiabilities: 73342000000,
        NoncurrentLiabilities: 127108000000,
        CommitmentsAndContingencies: 0,
        TemporaryEquity: 0,
        Equity: 134082000000,
        EquityAttributableToNoncontrollingInterest: 0,
        EquityAttributableToParent: 134082000000,
        Revenues: 131247000000,
        CostOfRevenue: 80480000000,
        GrossProfit: 50767000000,
        OperatingExpenses: 13311000000,
        CostsAndExpenses: 93791000000,
        OtherOperatingIncome: 0,
        OperatingIncomeLoss: 37456000000,
        NonoperatingIncomeLoss: 1408000000,
        InterestAndDebtExpense: 0,
        IncomeBeforeEquityMethodInvestments: 38864000000,
        IncomeFromEquityMethodInvestments: 0,
        IncomeFromContinuingOperationsBeforeTax: 38864000000,
        IncomeTaxExpenseBenefit: 9944000000,
        IncomeFromContinuingOperationsAfterTax: 28920000000,
        IncomeFromDiscontinuedOperations: 0,
        ExtraordaryItemsGainLoss: 0,
        NetIncomeLoss: 28920000000,
        NetIncomeAvailableToCommonStockholdersBasic: 28920000000,
        PreferredStockDividendsAndOtherAdjustments: 0,
        NetIncomeAttributableToNoncontrollingInterest: 0,
        NetIncomeAttributableToParent: 28920000000,
        OtherComprehensiveIncome: -1056000000,
        ComprehensiveIncome: 27864000000,
        ComprehensiveIncomeAttributableToParent: 27864000000,
        ComprehensiveIncomeAttributableToNoncontrollingInterest: 0,
        NonoperatingIncomeLossPlusInterestAndDebtExpense: 1408000000,
        NonoperatingIncomePlusInterestAndDebtExpensePlusIncomeFromEquityMethodInvestments: 1408000000,
        NetCashFlow: -5327000000,
        NetCashFlowsOperating: 39579000000,
        NetCashFlowsInvesting: -33324000000,
        NetCashFlowsFinancing: -11582000000,
        NetCashFlowsOperatingContinuing: 39579000000,
        NetCashFlowsInvestingContinuing: -33324000000,
        NetCashFlowsFinancingContinuing: -11582000000,
        NetCashFlowsOperatingDiscontinued: 0,
        NetCashFlowsInvestingDiscontinued: 0,
        NetCashFlowsFinancingDiscontinued: 0,
        NetCashFlowsDiscontinued: 0,
        ExchangeGainsLosses: 0,
        NetCashFlowsContinuing: -5327000000,
        SGR: 0.27500427911222686,
        ROA: 0.08644912893235923,
        ROE: 0.21568890678838323,
        ROS: 0.22034789366614094
      },
      {
        EntityRegistrantName: 'APPLE INC',
        CurrentFiscalYearEndDate: '--09-30',
        EntityCentralIndexKey: 320193,
        EntityFilerCategory: 'Large Accelerated Filer',
        TradingSymbol: 'AAPL',
        DocumentPeriodEndDate: '2017-07-01',
        DocumentFiscalYearFocus: '2017',
        DocumentFiscalPeriodFocus: 'Q3',
        DocumentFiscalYearFocusContext: 'FD2017Q3YTD',
        DocumentFiscalPeriodFocusContext: 'FD2017Q3YTD',
        DocumentType: '10-Q',
        BalanceSheetDate: '2017-07-01',
        IncomeStatementPeriodYTD: '2016-09-25',
        ContextForInstants: 'FI2017Q3',
        ContextForDurations: 'FD2017Q3YTD',
        Assets: 345173000000,
        CurrentAssets: 112875000000,
        NoncurrentAssets: 232298000000,
        LiabilitiesAndEquity: 345173000000,
        Liabilities: 212748000000,
        CurrentLiabilities: 81302000000,
        NoncurrentLiabilities: 131446000000,
        CommitmentsAndContingencies: 0,
        TemporaryEquity: 0,
        Equity: 132425000000,
        EquityAttributableToNoncontrollingInterest: 0,
        EquityAttributableToParent: 132425000000,
        Revenues: 176655000000,
        CostOfRevenue: 108400000000,
        GrossProfit: 68255000000,
        OperatingExpenses: 20031000000,
        CostsAndExpenses: 128431000000,
        OtherOperatingIncome: 0,
        OperatingIncomeLoss: 48224000000,
        NonoperatingIncomeLoss: 1948000000,
        InterestAndDebtExpense: 0,
        IncomeBeforeEquityMethodInvestments: 50172000000,
        IncomeFromEquityMethodInvestments: 0,
        IncomeFromContinuingOperationsBeforeTax: 50172000000,
        IncomeTaxExpenseBenefit: 12535000000,
        IncomeFromContinuingOperationsAfterTax: 37637000000,
        IncomeFromDiscontinuedOperations: 0,
        ExtraordaryItemsGainLoss: 0,
        NetIncomeLoss: 37637000000,
        NetIncomeAvailableToCommonStockholdersBasic: 37637000000,
        PreferredStockDividendsAndOtherAdjustments: 0,
        NetIncomeAttributableToNoncontrollingInterest: 0,
        NetIncomeAttributableToParent: 37637000000,
        OtherComprehensiveIncome: -1179000000,
        ComprehensiveIncome: 36458000000,
        ComprehensiveIncomeAttributableToParent: 36458000000,
        ComprehensiveIncomeAttributableToNoncontrollingInterest: 0,
        NonoperatingIncomeLossPlusInterestAndDebtExpense: 1948000000,
        NonoperatingIncomePlusInterestAndDebtExpensePlusIncomeFromEquityMethodInvestments: 1948000000,
        NetCashFlow: -1913000000,
        NetCashFlowsOperating: 47942000000,
        NetCashFlowsInvesting: -36504000000,
        NetCashFlowsFinancing: -13351000000,
        NetCashFlowsOperatingContinuing: 47942000000,
        NetCashFlowsInvestingContinuing: -36504000000,
        NetCashFlowsFinancingContinuing: -13351000000,
        NetCashFlowsOperatingDiscontinued: 0,
        NetCashFlowsInvestingDiscontinued: 0,
        NetCashFlowsFinancingDiscontinued: 0,
        NetCashFlowsDiscontinued: 0,
        ExchangeGainsLosses: 0,
        NetCashFlowsContinuing: -1913000000,
        SGR: 0.39706502932860704,
        ROA: 0.10903807655871114,
        ROE: 0.2842137058712479,
        ROS: 0.21305369222495826
      }
    ],
    companyInfo: {
      EntityCentralIndexKey: 320193,
      StandardIndustrialClassification: 3571,
      EntityRegistrantName: 'Apple Inc.',
      StateCountry: 'CA',
      Office: 'Office of Technology',
      IndustryTitle: 'ELECTRONIC COMPUTERS',
      TradingSymbol: 'AAPL'
    }
  };
}
