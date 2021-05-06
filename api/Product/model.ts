import { BaseViewModel } from "../../../common";

export interface ProductViewModel extends BaseViewModel {
  readonly id: string;
  name: string;
  description: string;
  price: number;
  categoryId: string;
  images: Array<string>;
  pickupMethods: Array<string>;
}
