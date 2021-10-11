import React, { useContext } from "react";
import { ContextStore } from "../../context/context";

const Buttons = () => {
  const { navCalculDevis, setNavCalculDevis } = useContext(ContextStore);

  const navNext = () => {
    setNavCalculDevis(navCalculDevis + 1);
  };
  const navPrevious = () => {
    setNavCalculDevis(navCalculDevis - 1);
  };
  return (
    <div className="flex justify-around">
      <button
        type="button"
        className={
          navCalculDevis > 0
            ? "py-2 px-4  bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-36 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 "
            : "opacity-0"
        }
        onClick={navPrevious}
      >
        Précedent
      </button>
      <button
        type="button"
        className="py-2 px-4  bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-36 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 "
        onClick={navNext}
      >
        Suivant
      </button>
    </div>
  );
};

export default Buttons;
