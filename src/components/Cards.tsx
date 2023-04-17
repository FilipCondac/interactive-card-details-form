import { useContext, useEffect, useState } from "react";
import { CreditCardContext } from "../context/CreditCardContext";
import { createImageUri } from "../util";

const Cards = () => {
  const creditCardContext = useContext(CreditCardContext);

  const [imageSrc, setImageSrc] = useState(
    createImageUri("/images/bg-main-desktop.png")
  );

  useEffect(() => {
    updateImageSrc(); // Call the function initially to set the correct image source
    window.addEventListener("resize", updateImageSrc);

    return () => {
      window.removeEventListener("resize", updateImageSrc);
    };
  }, []);

  const updateImageSrc = () => {
    if (window.innerWidth <= 1200) {
      // Change this value to the desired screen width
      setImageSrc(createImageUri("/images/bg-main-mobile.png")); // Change to the desired mobile image
    } else {
      setImageSrc(createImageUri("/images/bg-main-desktop.png")); // Change to the desired desktop image
    }
  };

  return (
    <div className=" flex text-left mobile:mb-10 mobile:flex-col">
      <div className="float-left m-0 -mr-72 flex-col p-0 text-left mobile:m-auto mobile:w-screen">
        <img
          src={imageSrc}
          className="mobile:h-72 mobile:w-screen"
          alt="background gradient"
        ></img>
      </div>
      <div className=" m-auto flex-col">
        <div className="z-10 mt-0 flex">
          <div
            className="h-60 w-cardFrontDesktop rounded-lg p-4 pr-10 shadow-2xl mobile:z-20 mobile:m-auto mobile:-mt-28 mobile:ml-4 mobile:h-44 mobile:w-cardFrontMobile mobile:pr-0"
            style={{
              backgroundImage: `url(${createImageUri(
                "/images/bg-card-front.png"
              )})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <img
              src={createImageUri("/images/card-logo.svg")}
              className="ml-5 mt-4 mb-16 mobile:mb-12 mobile:ml-2 mobile:mt-1 mobile:w-16"
            ></img>
            <p className="ml-5 text-3xl tracking-wider text-white mobile:ml-3 mobile:text-xl">
              {creditCardContext?.creditCard.number
                ? //@ts-ignore
                  creditCardContext.creditCard.number.match(/.{1,4}/g).join(" ")
                : "0000 0000 0000 0000"}
            </p>
            <div className="mt-5 flex text-center text-sm tracking-wide text-white mobile:mt-3">
              <div className="ml-5 w-1/2 mobile:ml-2">
                <div className="float-left">
                  <p className="">
                    {creditCardContext?.creditCard.name
                      ? creditCardContext.creditCard.name
                      : "John Doe"}
                  </p>
                </div>
              </div>
              <div className="float-right flex w-1/2">
                <div className="ml-40 flex mobile:ml-20">
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
        </div>
        <div
          className="mt-10 -mr-24 ml-24 h-60 rounded-lg p-6 shadow-2xl mobile:z-0 mobile:-mt-80 mobile:ml-16 mobile:mr-2 mobile:h-44 mobile:w-cardFrontMobile"
          style={{
            backgroundImage: `url(${createImageUri(
              "/images/bg-card-back.png"
            )})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="float-right mr-9 mt-20 flex mobile:mr-0 mobile:mt-12">
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
