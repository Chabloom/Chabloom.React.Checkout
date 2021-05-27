import { BaseApi, BaseApiType } from "../../../common";
import { PaymentViewModel } from "./model";

export class PaymentsApi extends BaseApi<PaymentViewModel> implements BaseApiType<PaymentViewModel> {
  baseUrl = `${window.__env__.REACT_APP_TRANSACTIONS_BACKEND_ADDRESS}/api/payments`;

  constructor() {
    super();
  }

  readAll(token: string): Promise<[Response | undefined, Array<PaymentViewModel> | undefined, string]> {
    return this._getAll(`${this.baseUrl}`, token);
  }

  read(token: string, itemId: string): Promise<[Response | undefined, PaymentViewModel | undefined, string]> {
    return this._get(`${this.baseUrl}/${itemId}`, token);
  }

  create(token: string, item: PaymentViewModel): Promise<[Response | undefined, PaymentViewModel | undefined, string]> {
    return this._post(`${this.baseUrl}`, token, item);
  }

  edit(token: string, item: PaymentViewModel): Promise<[Response | undefined, PaymentViewModel | undefined, string]> {
    return this._put(`${this.baseUrl}/${item.id}`, token, item);
  }

  delete(token: string, item: PaymentViewModel): Promise<[Response | undefined, string]> {
    return this._delete(`${this.baseUrl}/${item.id}`, token);
  }
}
