import { useState, useContext } from "react";
import { CreditCardContext } from "../context/CreditCardContext";
import { createImageUri } from "../util";
import Form from "./Form";

const Cards = () => {
  const creditCardContext = useContext(CreditCardContext);
  return (
    <div className=" text-left flex">
      <div className="float-left flex-col -mr-72 m-0 p-0 text-left">
        <img
          src={createImageUri("/images/bg-main-desktop.png")}
          className=""
        ></img>
      </div>
      <div className="flex-col">
        <div className="mt-40 mb-40">
          <img
            src={createImageUri("/images/bg-card-front.png")}
            className="-mb-32"
          ></img>
          <p className="mr-24 text-3xl text-center text-white">
            {creditCardContext?.creditCard}
          </p>
        </div>
        <img
          src={createImageUri("/images/bg-card-back.png")}
          className="ml-24 text-left mt-10 "
        ></img>
      </div>
    </div>
  );
};

export default Cards;
