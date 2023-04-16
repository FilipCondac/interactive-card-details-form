import { createContext, SetStateAction } from "react";

interface CreditCardDetails {
  number: string;
  name: string;
  cvc: string;
  expirationMM: string;
  expirationYY: string;
}

interface CreditCardContext {
  creditCard: CreditCardDetails;

  setCreditCard: (cardDetails: SetStateAction<CreditCardDetails>) => void;
}

export const CreditCardContext = createContext<CreditCardContext | null>(null);
