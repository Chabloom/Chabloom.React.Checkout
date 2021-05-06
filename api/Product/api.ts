import { AppConfigurationBase, BaseApi, BaseApiType } from "../../../common";
import { ProductViewModel } from "./model";

export class ProductsApi extends BaseApi<ProductViewModel> implements BaseApiType<ProductViewModel> {
  baseUrl: string;
  method: string;
  categoryId: string;

  constructor(config: AppConfigurationBase, categoryId = "", method = "") {
    super();
    this.baseUrl = `${config.ecommerceBackendPublicAddress}/api/products`;
    this.categoryId = categoryId;
    this.method = method;
  }

  readItems(): Promise<[Array<ProductViewModel> | undefined, string]> {
    return this._readItems(`${this.baseUrl}?method=${this.method}&categoryId=${this.categoryId}`, "", false);
  }

  readItem(itemId: string): Promise<[ProductViewModel | undefined, string]> {
    return this._readItem(`${this.baseUrl}/${itemId}`, "", false);
  }

  addItem(token: string, item: ProductViewModel): Promise<[ProductViewModel | undefined, string]> {
    item.categoryId = this.categoryId;
    return this._addItem(`${this.baseUrl}`, token, item);
  }

  editItem(token: string, item: ProductViewModel): Promise<[ProductViewModel | undefined, string]> {
    item.categoryId = this.categoryId;
    return this._editItem(`${this.baseUrl}/${item.id}`, token, item);
  }

  deleteItem(token: string, item: ProductViewModel): Promise<string | undefined> {
    return this._deleteItem(`${this.baseUrl}/${item.id}`, token);
  }
}
