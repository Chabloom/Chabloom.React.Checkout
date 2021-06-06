import { BaseApi } from "../../../common";
import { CurrencyViewModel } from "./model";

export class CurrenciesApi extends BaseApi<CurrencyViewModel> {
  baseUrl = `${window.__env__.REACT_APP_TRANSACTIONS_BACKEND_ADDRESS}/api/currencies`;
}
