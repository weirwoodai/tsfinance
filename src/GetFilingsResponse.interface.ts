import { CompanyInfo } from './CompanyInfo.interface';
import { Filing } from './Filing.interface';

export interface GetFilingsResponse {
  ticker: string;
  filings: Filing[];
  companyInfo: CompanyInfo;
}
