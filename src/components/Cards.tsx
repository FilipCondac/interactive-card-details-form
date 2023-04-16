import { useContext } from "react";
import { CreditCardContext } from "../context/CreditCardContext";
import { createImageUri } from "../util";

const Cards = () => {
  const creditCardContext = useContext(CreditCardContext);

  return (
    <div className=" text-left flex">
      <div className="float-left flex-col -mr-72 m-0 p-0 text-left">
        <img
          src={createImageUri("/images/bg-main-desktop.png")}
          className=""
          alt="background gradient"
        ></img>
      </div>
      <div className="flex-col">
        <div
          className="mt-40 rounded-lg p-4 pr-10 w-96 h-60 shadow-2xl"
          style={{
            backgroundImage: `url(${createImageUri(
              "/images/bg-card-front.png"
            )})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "450px",
          }}
        >
          <img
            src={createImageUri("/images/card-logo.svg")}
            className="ml-5 mt-4 mb-16"
          ></img>
          <p className="text-3xl ml-5 text-white tracking-wider">
            {creditCardContext?.creditCard.number
              ? creditCardContext.creditCard.number.match(/.{1,4}/g).join(" ")
              : "0000 0000 0000 0000"}
          </p>
          <div className="flex mt-5 text-sm text-center text-white tracking-wide">
            <div className="ml-5 w-1/2">
              <div className="float-left">
                <p className="">
                  {creditCardContext?.creditCard.name
                    ? creditCardContext.creditCard.name
                    : "John Doe"}
                </p>
              </div>
            </div>
            <div className="flex float-right w-1/2">
              <div className="flex ml-40">
                <p className="">
                  {creditCardContext?.creditCard.expirationMM
                    ? creditCardContext.creditCard.expirationMM
                    : "00"}
                </p>
                /
                <p className="">
                  {creditCardContext?.creditCard.expirationYY
                    ? creditCardContext.creditCard.expirationYY
                    : "00"}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="mt-10 -mr-24 ml-24 rounded-lg p-6 h-60 shadow-2xl"
          style={{
            backgroundImage: `url(${createImageUri(
              "/images/bg-card-back.png"
            )})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex float-right mr-9 mt-20">
            <p className="text-white">
              {creditCardContext?.creditCard.cvc
                ? creditCardContext.creditCard.cvc
                : "000"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
