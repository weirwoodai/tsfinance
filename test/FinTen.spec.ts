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
        DocumentType: '10-Q',
        Assets: 334532000000,
        CurrentAssets: 101990000000,
        NoncurrentAssets: 232542000000,
        LiabilitiesAndEquity: 334532000000,
        Liabilities: 200450000000,
        CurrentLiabilities: 73342000000,
        NoncurrentLiabilities: 127108000000,
        Equity: 134082000000,
        Revenues: 131247000000,
        CostOfRevenue: 80480000000,
        GrossProfit: 50767000000,
        OperatingExpenses: 13311000000,
        NetCashFlow: -5327000000,
        NetCashFlowsInvesting: -33324000000,
        NetCashFlowsFinancing: -11582000000
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
        DocumentType: '10-Q',
        Assets: 345173000000,
        CurrentAssets: 112875000000,
        NoncurrentAssets: 232298000000,
        LiabilitiesAndEquity: 345173000000,
        Liabilities: 212748000000,
        CurrentLiabilities: 81302000000,
        NoncurrentLiabilities: 131446000000,
        Equity: 132425000000,
        Revenues: 176655000000,
        CostOfRevenue: 108400000000,
        GrossProfit: 68255000000,
        OperatingExpenses: 20031000000,
        NetCashFlow: -1913000000,
        NetCashFlowsInvesting: -36504000000,
        NetCashFlowsFinancing: -13351000000
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
