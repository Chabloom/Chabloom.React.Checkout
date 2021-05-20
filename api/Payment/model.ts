import { BaseViewModel } from "../../../common";

export interface PaymentViewModel extends BaseViewModel {
  readonly id?: string;
  name: string;
  amount: number;
  currencyId: string;
  paymentMethodId?: string;
  cardHolderName?: string;
  cardType?: string;
  cardNumber?: string;
  readonly cardNumberLast4?: string;
  cardExpirationMonth?: number;
  cardExpirationYear?: number;
  cardSecurityCode?: string;
  readonly status?: string;
}
