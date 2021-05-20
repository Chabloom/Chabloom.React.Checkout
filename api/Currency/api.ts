import { BaseApi, BaseApiType } from "../../../common";
import { CurrencyViewModel } from "./model";

export class CurrenciesApi extends BaseApi<CurrencyViewModel> implements BaseApiType<CurrencyViewModel> {
  baseUrl = "";

  constructor() {
    super();
    this.baseUrl = `${window.__env__.REACT_APP_TRANSACTIONS_BACKEND_ADDRESS}/api/currencies`;
  }

  readItems(token: string): Promise<[Array<CurrencyViewModel> | undefined, string]> {
    return this._readItems(`${this.baseUrl}`, token);
  }

  readItem(token: string, itemId: string): Promise<[CurrencyViewModel | undefined, string]> {
    return this._readItem(`${this.baseUrl}/${itemId}`, token);
  }

  addItem(token: string, item: CurrencyViewModel): Promise<[CurrencyViewModel | undefined, string]> {
    return this._addItem(`${this.baseUrl}`, token, item);
  }

  editItem(token: string, item: CurrencyViewModel): Promise<[CurrencyViewModel | undefined, string]> {
    return this._editItem(`${this.baseUrl}/${item.id}`, token, item);
  }

  deleteItem(token: string, item: CurrencyViewModel): Promise<string | undefined> {
    return this._deleteItem(`${this.baseUrl}/${item.id}`, token);
  }
}
