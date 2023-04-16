import { createContext, SetStateAction } from "react";

interface CreditCardContext {
  creditCard: string;
  setCreditCard: (cardDetails: SetStateAction<string>) => void;
}

export const CreditCardContext = createContext<CreditCardContext | null>(null);
