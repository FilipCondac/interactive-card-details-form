import { useState } from "react";
import Cards from "./components/Cards";
import Form from "./components/Form";
import { CreditCardContext } from "./context/CreditCardContext";

const App = () => {
  const [creditCard, setCreditCard] = useState("");
  return (
    <main className="flex">
      <CreditCardContext.Provider value={{ creditCard, setCreditCard }}>
        <Cards />
        <Form />
      </CreditCardContext.Provider>
    </main>
  );
};

export default App;
