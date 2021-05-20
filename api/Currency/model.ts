import { BaseViewModel } from "../../../common";

export interface CurrencyViewModel extends BaseViewModel {
  readonly id?: string;
  name: string;
  amount: number;
  currencyId: string;
  paymentMethodId?: string;
  cardHolderName: string;
  cardType: string;
  cardNumber: string;
  readonly cardNumberLast4?: string;
  cardExpirationMonth: string;
  cardExpirationYear: string;
  cardSecurityCode: string;
  readonly status?: string;
}
