import { SetStateAction, useState, useContext } from "react";
import { CreditCardContext } from "../context/CreditCardContext";
import Cards from "./Cards";

const Form = () => {
  const creditCardContext = useContext(CreditCardContext);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (creditCardContext) {
      creditCardContext.setCreditCard((prevState) => ({
        ...prevState,
        [event.target.name]: event.target.value,
      }));
    }
  };

  return (
    <div className="pr-auto pl-auto mt-64 w-80 m-auto flex">
      <form action="" className="w-full">
        <div className="m-0 mb-5">
          <label className="flex uppercase text-sm mb-1">Cardholder Name</label>
          <input
            className="flex rounded border-2 w-full p-2"
            type="text"
            id="name"
            placeholder="John Doe"
            name="name"
            value={creditCardContext?.creditCard.name}
            onChange={handleChange}
            maxLength={25}
          ></input>
        </div>

        <div className="m-0 mb-5">
          <label className="flex uppercase text-sm mb-1">
            Cardholder Number
          </label>
          <input
            className="flex rounded border-2 w-full p-2"
            type="text"
            id="number"
            name="number"
            onChange={handleChange}
            placeholder="0000 0000 0000 0000"
            value={creditCardContext?.creditCard.number}
            maxLength={16}
          ></input>
        </div>

        <div className="m-0 mb-5">
          <div className="flex">
            <label className="uppercase text-sm mb-1">Exp. Date (MM/YY)</label>
            <label className="flex uppercase text-sm mb-1 ml-10">CVC</label>
          </div>
          <div className="flex">
            <input
              className="rounded border-2 w-16 p-2 mr-3 inline-flex"
              type="text"
              placeholder="MM"
              maxLength={2}
              onChange={handleChange}
              name="expirationMM"
              value={creditCardContext?.creditCard.expirationMM}
            ></input>
            <input
              className="rounded border-2 w-16 p-2 inline-flex"
              type="text"
              placeholder="YY"
              maxLength={2}
              onChange={handleChange}
              name="expirationYY"
              value={creditCardContext?.creditCard.expirationYY}
            ></input>
            <input
              className="rounded border-2 w-full p-2 ml-6 inline-flex"
              type="text"
              placeholder="123"
              maxLength={3}
              onChange={handleChange}
              name="cvc"
              value={creditCardContext?.creditCard.cvc}
            ></input>
          </div>
          <button
            type="button"
            className="w-full bg-violet-900 rounded-md mt-5 p-3 text-white"
          >
            Confirm
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
