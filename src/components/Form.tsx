import { SetStateAction, useState, useContext } from "react";
import { CreditCardContext } from "../context/CreditCardContext";
import Cards from "./Cards";

const Form = () => {
  const creditCardContext = useContext(CreditCardContext);

  const handleChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    debugger;
    creditCardContext?.setCreditCard(event.target.value);

    console.log("value is:", event.target.value);
  };

  return (
    <div className="pr-auto pl-auto mt-64 w-80 m-auto flex">
      <form action="" className="w-full">
        <div className="m-0 mb-5">
          <label className="flex uppercase text-sm mb-1">Cardholder Name</label>
          <input
            className="flex rounded border-2 w-full p-2"
            type="text"
          ></input>
        </div>

        <div className="m-0 mb-5">
          <label className="flex uppercase text-sm mb-1">
            Cardholder Number
          </label>
          <input
            className="flex rounded border-2 w-full p-2"
            type="text"
            id="message"
            name="message"
            onChange={handleChange}
            value={creditCardContext?.creditCard}
          ></input>
        </div>

        <div className="m-0 mb-5">
          <div className="flex">
            <label className="uppercase text-sm mb-1">Exp. Date (MM/YY)</label>
            <label className="flex uppercase text-sm mb-1 ml-16">CVC</label>
          </div>
          <div className="flex">
            <input
              className="rounded border-2 w-16 p-2 mr-3 inline-flex"
              type="text"
              placeholder="MM"
            ></input>
            <input
              className="rounded border-2 w-16 p-2 inline-flex"
              type="text"
              placeholder="YY"
            ></input>
            <input
              className="rounded border-2 w-full p-2 ml-6 inline-flex"
              type="text"
            ></input>
          </div>
          <button
            type="button"
            className="w-full bg-blue-900 rounded-md mt-5 p-3 text-white"
          >
            Confirm
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
