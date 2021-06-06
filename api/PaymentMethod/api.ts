import { BaseApi } from "../../../common";
import { PaymentMethodViewModel } from "./model";

export class PaymentMethodsApi extends BaseApi<PaymentMethodViewModel> {
  baseUrl = `${window.__env__.REACT_APP_TRANSACTIONS_BACKEND_ADDRESS}/api/paymentMethods`;
}
