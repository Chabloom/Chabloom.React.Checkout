import { BaseApi, BaseApiType } from "../../../common";
import { OrderViewModel } from "./model";

export class OrdersApi extends BaseApi<OrderViewModel> implements BaseApiType<OrderViewModel> {
  baseUrl = `${window.__env__.REACT_APP_ECOMMERCE_BACKEND_ADDRESS}/api/orders`;
  userId: string;

  constructor(userId = "") {
    super();
    this.userId = userId;
  }

  readAll(token: string): Promise<[Response | undefined, Array<OrderViewModel> | undefined, string]> {
    return this._getAll(`${this.baseUrl}?userId=${this.userId}`, token);
  }

  read(token: string, itemId: string): Promise<[Response | undefined, OrderViewModel | undefined, string]> {
    return this._get(`${this.baseUrl}/${itemId}`);
  }

  create(token: string, item: OrderViewModel): Promise<[Response | undefined, OrderViewModel | undefined, string]> {
    return this._post(`${this.baseUrl}`, "", item);
  }

  edit(token: string, item: OrderViewModel): Promise<[Response | undefined, OrderViewModel | undefined, string]> {
    item.userId = this.userId;
    return this._put(`${this.baseUrl}/${item.id}`, token, item);
  }

  delete(token: string, item: OrderViewModel): Promise<[Response | undefined, string]> {
    return this._delete(`${this.baseUrl}/${item.id}`, token);
  }
}
