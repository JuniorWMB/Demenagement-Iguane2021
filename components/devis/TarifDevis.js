import React, { useState } from "react";
import Calendar from "./Calendar";
import PriceDevis from "./PriceDevis";
import ProductEmballage from "./ProductEmballage";

const TarifDevis = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };
  console.log(show);

  return (
    <div>
      <div className=" flex flex-col place-content-around justify-center md:flex-row">
        <Calendar
          title={"Chargement"}
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
        />
        <Calendar
          title={"Livraison"}
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
        />
      </div>
      <div className=" w-full h-auto flex flex-row-reverse pr-44">
        <button
          className="py-2 px-4  cursor-pointer bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-36 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 "
          onClick={handleShow}
        >
          Valider
        </button>
      </div>
      {show ? (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                Tarif
              </p>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              <span className="relative inline-block">
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <defs>
                    <pattern
                      id="d5589eeb-3fca-4f01-ac3e-983224745704"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#d5589eeb-3fca-4f01-ac3e-983224745704)"
                    width="52"
                    height="24"
                  />
                </svg>
                <span className="relative">Ici</span>
              </span>{" "}
              vous choisissez la formule qui vous correspond le plus
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              Nous vous proposons 4 formules, nous les avons creer gr??ce aux
              informations r??cuper??.
            </p>
          </div>
          <PriceDevis />
          <ProductEmballage />
        </div>
      ) : null}
    </div>
  );
};

export default TarifDevis;
