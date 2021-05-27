import { BaseApi, BaseApiType } from "../../../common";
import { ProductViewModel } from "./model";

export class ProductsApi extends BaseApi<ProductViewModel> implements BaseApiType<ProductViewModel> {
  baseUrl = `${window.__env__.REACT_APP_ECOMMERCE_BACKEND_ADDRESS}/api/products`;
  method: string;
  categoryId: string;

  constructor(categoryId = "", method = "") {
    super();
    this.categoryId = categoryId;
    this.method = method;
  }

  readAll(): Promise<[Response | undefined, Array<ProductViewModel> | undefined, string]> {
    return this._getAll(`${this.baseUrl}?method=${this.method}&categoryId=${this.categoryId}`);
  }

  read(itemId: string): Promise<[Response | undefined, ProductViewModel | undefined, string]> {
    return this._get(`${this.baseUrl}/${itemId}`);
  }

  create(token: string, item: ProductViewModel): Promise<[Response | undefined, ProductViewModel | undefined, string]> {
    item.categoryId = this.categoryId;
    return this._post(`${this.baseUrl}`, token, item);
  }

  edit(token: string, item: ProductViewModel): Promise<[Response | undefined, ProductViewModel | undefined, string]> {
    item.categoryId = this.categoryId;
    return this._put(`${this.baseUrl}/${item.id}`, token, item);
  }

  delete(token: string, item: ProductViewModel): Promise<[Response | undefined, string]> {
    return this._delete(`${this.baseUrl}/${item.id}`, token);
  }
}
