import { SetStateAction, useState, useContext } from "react";
import { CreditCardContext } from "../context/CreditCardContext";
import {
  checkName,
  checkCardNumber,
  checkCvc,
  checkExpirationMM,
  checkExpirationYY,
} from "../util/cardValidation";

const Form = () => {
  const creditCardContext = useContext(CreditCardContext);

  const [nameError, setNameError] = useState<string>("");
  const [numberError, setNumberError] = useState<string>("");
  const [cvcError, setCvcError] = useState<string>("");
  const [expirationMMError, setExpirationMMError] = useState<string>("");
  const [expirationYYError, setExpirationYYError] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (creditCardContext) {
      creditCardContext.setCreditCard((prevState) => ({
        ...prevState,
        [event.target.name]: event.target.value,
      }));
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    console.log("valid");
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    creditCardContext?.setCreditCard({
      ...creditCardContext.creditCard,
      name: event.target.value,
    });

    if (checkName(event.target.value)) {
      setNameError("Name is invalid");
    } else {
      setNameError("");
    }
  };

  const handleCardNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    creditCardContext?.setCreditCard({
      ...creditCardContext.creditCard,
      number: event.target.value,
    });

    if (checkCardNumber(event.target.value)) {
      setNumberError("Card number is invalid");
    } else {
      setNumberError("");
    }
  };

  const handleCvcChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    creditCardContext?.setCreditCard({
      ...creditCardContext.creditCard,
      cvc: event.target.value,
    });

    if (checkCvc(event.target.value)) {
      setCvcError("CVC is invalid");
    } else {
      setCvcError("");
    }
  };

  const handleExpirationMMChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    creditCardContext?.setCreditCard({
      ...creditCardContext.creditCard,
      expirationMM: event.target.value,
    });

    if (checkExpirationMM(event.target.value)) {
      setExpirationMMError("Expiration month is invalid");
    } else {
      setExpirationMMError("");
    }
  };

  const handleExpirationYYChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    creditCardContext?.setCreditCard({
      ...creditCardContext.creditCard,
      expirationYY: event.target.value,
    });

    if (checkExpirationYY(event.target.value)) {
      setExpirationYYError("Expiration year is invalid");
    } else {
      setExpirationYYError("");
    }
  };

  return (
    <div className="pr-auto pl-auto m-auto mt-64 flex w-80">
      <form action="" className="w-full">
        <div className="m-0 mb-5">
          <label className="mb-1 flex text-sm uppercase">Cardholder Name</label>
          <input
            className="flex w-full rounded border-2 p-2"
            type="text"
            id="name"
            placeholder="John Doe"
            name="name"
            value={creditCardContext?.creditCard.name}
            onChange={(event) => {
              handleNameChange(event);
              handleChange(event);
            }}
            maxLength={25}
          ></input>
          <p className="mt-2 text-xs text-red-600">{nameError}</p>
        </div>

        <div className="m-0 mb-5">
          <label className="mb-1 flex text-sm uppercase">Card Number</label>
          <input
            className="flex w-full rounded border-2 p-2"
            type="text"
            id="number"
            name="number"
            onChange={(event) => {
              handleCardNumberChange(event);
              handleChange(event);
            }}
            placeholder="0000 0000 0000 0000"
            value={creditCardContext?.creditCard.number}
            maxLength={16}
          ></input>
          <p className="mt-2 text-xs text-red-600">{numberError}</p>
        </div>

        <div className="m-0 mb-5">
          <div className="flex">
            <label className="mb-1 text-sm uppercase">Exp. Date (MM/YY)</label>
            <label className="mb-1 ml-10 flex text-sm uppercase">CVC</label>
          </div>
          <div className="flex">
            <div className="flex-col">
              <div className="flex">
                <input
                  className="mr-3 inline-flex w-16 rounded border-2 p-2"
                  type="text"
                  placeholder="MM"
                  maxLength={2}
                  onChange={(event) => {
                    handleExpirationMMChange(event);
                    handleChange(event);
                  }}
                  name="expirationMM"
                  value={creditCardContext?.creditCard.expirationMM}
                ></input>
                <input
                  className="inline-flex w-16 rounded border-2 p-2"
                  type="text"
                  placeholder="YY"
                  maxLength={2}
                  onChange={(event) => {
                    handleExpirationYYChange(event);
                    handleChange(event);
                  }}
                  name="expirationYY"
                  value={creditCardContext?.creditCard.expirationYY}
                ></input>
              </div>
              <div className="mt-2 text-xs text-red-600">
                {expirationMMError ||
                  (expirationYYError && "Invalid exp. date")}
              </div>
            </div>
            <div className="flex-col">
              <input
                className="ml-6 inline-flex w-full rounded border-2 p-2"
                type="text"
                placeholder="123"
                maxLength={3}
                onChange={(event) => {
                  handleCvcChange(event);
                  handleChange(event);
                }}
                name="cvc"
                value={creditCardContext?.creditCard.cvc}
              ></input>
              <p className="ml-7 mt-2 text-xs text-red-600">{cvcError}</p>
            </div>
          </div>
          <button
            type="button"
            onClick={handleSubmit}
            className="mt-5 w-full rounded-md bg-violet-900 p-3 text-white"
          >
            Confirm
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
