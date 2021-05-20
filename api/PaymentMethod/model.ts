import { BaseViewModel } from "../../../common";

export interface PaymentMethodViewModel extends BaseViewModel {
  readonly id?: string;
  name: string;
  cardHolderName: string;
  cardType: string;
  cardNumber: string;
  readonly cardNumberLast4?: string;
  cardExpirationMonth: number;
  cardExpirationYear: number;
}
