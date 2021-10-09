import React from "react";

const Buttons = () => {
  return (
    <div className="flex justify-between">
      <button
        type="button"
        className="py-2 px-4  bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-36 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 "
      >
        Précedent
      </button>
      <button
        type="button"
        className="py-2 px-4  bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-36 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 "
      >
        Suivant
      </button>
    </div>
  );
};

export default Buttons;
