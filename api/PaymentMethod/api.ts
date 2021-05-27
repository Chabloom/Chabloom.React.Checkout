import { BaseApi, BaseApiType } from "../../../common";
import { PaymentMethodViewModel } from "./model";

export class PaymentMethodsApi extends BaseApi<PaymentMethodViewModel> implements BaseApiType<PaymentMethodViewModel> {
  baseUrl = `${window.__env__.REACT_APP_TRANSACTIONS_BACKEND_ADDRESS}/api/paymentMethods`;

  constructor() {
    super();
  }

  readAll(token: string): Promise<[Response | undefined, Array<PaymentMethodViewModel> | undefined, string]> {
    return this._getAll(`${this.baseUrl}`, token);
  }

  read(token: string, itemId: string): Promise<[Response | undefined, PaymentMethodViewModel | undefined, string]> {
    return this._get(`${this.baseUrl}/${itemId}`, token);
  }

  create(
    token: string,
    item: PaymentMethodViewModel
  ): Promise<[Response | undefined, PaymentMethodViewModel | undefined, string]> {
    return this._post(`${this.baseUrl}`, token, item);
  }

  edit(
    token: string,
    item: PaymentMethodViewModel
  ): Promise<[Response | undefined, PaymentMethodViewModel | undefined, string]> {
    return this._put(`${this.baseUrl}/${item.id}`, token, item);
  }

  delete(token: string, item: PaymentMethodViewModel): Promise<[Response | undefined, string]> {
    return this._delete(`${this.baseUrl}/${item.id}`, token);
  }
}
