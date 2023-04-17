import { useState } from "react";
import Cards from "./components/Cards";
import Form from "./components/Form";
import { CreditCardContext } from "./context/CreditCardContext";

interface CreditCardDetails {
  number: string;
  name: string;
  cvc: string;
  expirationMM: string;
  expirationYY: string;
}

const App = () => {
  const [creditCard, setCreditCard] = useState<CreditCardDetails>({
    number: "",
    name: "",
    cvc: "",
    expirationMM: "",
    expirationYY: "",
  });

  return (
    <main className="flex font-Grotesk mobile:flex-col">
      <CreditCardContext.Provider value={{ creditCard, setCreditCard }}>
        <Cards />
        <Form />
      </CreditCardContext.Provider>
    </main>
  );
};

export default App;
