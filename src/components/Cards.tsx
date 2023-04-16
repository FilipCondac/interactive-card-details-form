import { useContext } from "react";
import { CreditCardContext } from "../context/CreditCardContext";
import { createImageUri } from "../util";

const Cards = () => {
  const creditCardContext = useContext(CreditCardContext);

  return (
    <div className=" flex text-left">
      <div className="float-left m-0 -mr-72 flex-col p-0 text-left">
        <img
          src={createImageUri("/images/bg-main-desktop.png")}
          className=""
          alt="background gradient"
        ></img>
      </div>
      <div className="flex-col">
        <div
          className="mt-40 h-60 w-96 rounded-lg p-4 pr-10 shadow-2xl"
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
          <p className="ml-5 text-3xl tracking-wider text-white">
            {creditCardContext?.creditCard.number
              ? creditCardContext.creditCard.number.match(/.{1,4}/g).join(" ")
              : "0000 0000 0000 0000"}
          </p>
          <div className="mt-5 flex text-center text-sm tracking-wide text-white">
            <div className="ml-5 w-1/2">
              <div className="float-left">
                <p className="">
                  {creditCardContext?.creditCard.name
                    ? creditCardContext.creditCard.name
                    : "John Doe"}
                </p>
              </div>
            </div>
            <div className="float-right flex w-1/2">
              <div className="ml-40 flex">
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
          className="mt-10 -mr-24 ml-24 h-60 rounded-lg p-6 shadow-2xl"
          style={{
            backgroundImage: `url(${createImageUri(
              "/images/bg-card-back.png"
            )})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="float-right mr-9 mt-20 flex">
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
