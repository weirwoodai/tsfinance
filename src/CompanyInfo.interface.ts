interface CompanyInfo {
  EntityCentralIndexKey: number;
  StandardIndustrialClassification: number;
  EntityRegistrantName: string;
  StateCountry: string;
  Office: string;
  IndustryTitle: string;
  TradingSymbol: string | null;
}

export default CompanyInfo;
