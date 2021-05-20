import { BaseApi, BaseApiType } from "../../../common";
import { PaymentMethodViewModel } from "./model";

export class PaymentMethodsApi extends BaseApi<PaymentMethodViewModel> implements BaseApiType<PaymentMethodViewModel> {
  baseUrl = "";

  constructor() {
    super();
    this.baseUrl = `${window.__env__.REACT_APP_TRANSACTIONS_BACKEND_ADDRESS}/api/paymentMethods`;
  }

  readItems(token: string): Promise<[Array<PaymentMethodViewModel> | undefined, string]> {
    return this._readItems(`${this.baseUrl}`, token);
  }

  readItem(token: string, itemId: string): Promise<[PaymentMethodViewModel | undefined, string]> {
    return this._readItem(`${this.baseUrl}/${itemId}`, token);
  }

  addItem(token: string, item: PaymentMethodViewModel): Promise<[PaymentMethodViewModel | undefined, string]> {
    return this._addItem(`${this.baseUrl}`, token, item);
  }

  editItem(token: string, item: PaymentMethodViewModel): Promise<[PaymentMethodViewModel | undefined, string]> {
    return this._editItem(`${this.baseUrl}/${item.id}`, token, item);
  }

  deleteItem(token: string, item: PaymentMethodViewModel): Promise<string | undefined> {
    return this._deleteItem(`${this.baseUrl}/${item.id}`, token);
  }
}
