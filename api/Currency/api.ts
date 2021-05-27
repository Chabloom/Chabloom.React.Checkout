import { BaseApi, BaseApiType } from "../../../common";
import { CurrencyViewModel } from "./model";

export class CurrenciesApi extends BaseApi<CurrencyViewModel> implements BaseApiType<CurrencyViewModel> {
  baseUrl = `${window.__env__.REACT_APP_TRANSACTIONS_BACKEND_ADDRESS}/api/currencies`;

  constructor() {
    super();
  }

  readAll(token: string): Promise<[Response | undefined, Array<CurrencyViewModel> | undefined, string]> {
    return this._getAll(`${this.baseUrl}`, token);
  }

  read(token: string, itemId: string): Promise<[Response | undefined, CurrencyViewModel | undefined, string]> {
    return this._get(`${this.baseUrl}/${itemId}`, token);
  }

  create(
    token: string,
    item: CurrencyViewModel
  ): Promise<[Response | undefined, CurrencyViewModel | undefined, string]> {
    return this._post(`${this.baseUrl}`, token, item);
  }

  edit(token: string, item: CurrencyViewModel): Promise<[Response | undefined, CurrencyViewModel | undefined, string]> {
    return this._put(`${this.baseUrl}/${item.id}`, token, item);
  }

  delete(token: string, item: CurrencyViewModel): Promise<[Response | undefined, string]> {
    return this._delete(`${this.baseUrl}/${item.id}`, token);
  }
}
