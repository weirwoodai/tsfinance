import CompanyInfo from './CompanyInfo.interface';
import Filing from './Filing.interface';

interface GetFilingsResponse {
  ticker: string;
  filings: Filing[];
  companyInfo: CompanyInfo;
}

export default GetFilingsResponse;
