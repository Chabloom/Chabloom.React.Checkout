import { BaseApi } from "../../../common";
import { PaymentViewModel } from "./model";

export class PaymentsApi extends BaseApi<PaymentViewModel> {
  baseUrl = `${window.__env__.REACT_APP_TRANSACTIONS_BACKEND_ADDRESS}/api/payments`;
}
