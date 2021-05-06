import React from "react";
import { UserManager } from "oidc-client";
import { AppContextPropsBase } from "../common";

export interface AppContextCheckoutProps extends AppContextPropsBase {
  productCounts: Map<string, number>;
  setProductCounts: React.Dispatch<React.SetStateAction<Map<string, number>>>;
  pickupMethod: string;
  setPickupMethod: (pickupMethod: string) => void;
}

export const AppContextCheckout = React.createContext<AppContextCheckoutProps>({
  userManager: new UserManager({}),
  userLoaded: false,
  userId: "",
  userName: "",
  userToken: "",
  darkMode: false,
  setDarkMode: () => console.warn("setDarkMode not implemented"),
  productCounts: new Map<string, number>(),
  setProductCounts: () => console.warn("setProductCounts not implemented"),
  pickupMethod: "Shipping",
  setPickupMethod: () => console.warn("setPickupMethod not implemented"),
});

export const useAppContext = (): AppContextCheckoutProps => React.useContext(AppContextCheckout);
