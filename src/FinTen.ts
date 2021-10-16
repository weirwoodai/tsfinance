import axios, { AxiosInstance } from 'axios';
import { GetFilingsResponse } from './GetFilingsResponse.interface';
import { GetTickersResponse } from './GetTickersResponse.interface';
import { LoginResponse } from './LoginResponse.interface';

export class FinTen {
  private static readonly FINTEN_URL = 'https://finten.weirwood.ai';
  private _username = 'tsfinance';
  private _password = 'tsfinance';
  private _token: string | null = null;
  private http: AxiosInstance;

  constructor(http: AxiosInstance = axios) {
    this.http = http;
    this.http.defaults.baseURL = FinTen.FINTEN_URL;
  }

  get username(): string {
    return this._username;
  }

  set username(username: string) {
    this._username = username;
  }

  get password(): string {
    return this._password;
  }

  set password(password: string) {
    this._password = password;
  }

  get token(): string | null {
    return this._token;
  }

  async login(): Promise<void> {
    try {
      const {
        data: { token }
      } = await this.http.post<LoginResponse>('/users/login', {
        username: this.username,
        password: this.password
      });

      this._token = token;
    } catch (ex) {
      if (!ex.response) throw ex;

      const { status, data } = ex;
      if (status !== 400) throw ex;
      if (data.error !== 'Invalid credentials') throw ex;
      throw new Error(data.error);
    }
  }

  async getTickers(): Promise<GetTickersResponse> {
    const { data } = await this.http.get<GetTickersResponse>('/company/tickers');
    return data;
  }

  async getFilings(ticker: string): Promise<GetFilingsResponse> {
    if (this._token === null) await this.login();

    const params = { ticker };

    try {
      const { data } = await this.http.get<GetFilingsResponse>('/company/filings', {
        params,
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      });
      return data;
    } catch (ex) {
      if (!ex.response) throw ex;

      const { status } = ex.response;
      if (status !== 401) throw ex;

      this._token = null;
      return await this.getFilings(ticker);
    }
  }
}

export default FinTen;
