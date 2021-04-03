import axios, { AxiosInstance } from 'axios';
import GetFilingsResponse from './GetFilingsResponse.interface';
import GetTickersResponse from './GetTickersResponse.interface';
import LoginResponse from './LoginResponse.interface';

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
    const response = (
      await this.http.post('/users/login', {
        username: this.username,
        password: this.password
      })
    ).data as LoginResponse;

    this._token = response.token;
  }

  async getTickers(): Promise<GetTickersResponse> {
    return (await this.http.get('/company/tickers')).data as GetTickersResponse;
  }

  async getFilings(ticker: string): Promise<GetFilingsResponse> {
    if (this._token === null) {
      await this.login();
    }

    const params = {
      ticker
    };

    return (
      await this.http.get('/company/filings', {
        params,
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      })
    ).data as GetFilingsResponse;
  }
}

export default FinTen;
