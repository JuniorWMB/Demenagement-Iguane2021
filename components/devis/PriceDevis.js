import React from "react";
import { infoPriceDevis } from "../../utils/tools";

const PriceDevis = () => {
  return (
    <div className=" w-full p-px mx-auto mb-4 overflow-hidden transition-shadow duration-300 border rounded lg:mb-8 lg:max-w-4xl group hover:shadow-xl">
      <div className=" bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
      <div className=" bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
      <div className=" top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
      <div className=" bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />

      <div className=" flex flex-nowrap overflow-x-auto items-center h-full py-10 duration-300 bg-white rounded-sm transition-color sm:items-stretch sm:flex-row ">
        {infoPriceDevis.map((price, i) => (
          <div
            key={i}
            className="px-6 py-8 text-center cursor-pointer hover:border-t-2   border-green-600 ml-4"
          >
            <h3 className="text-xl text-black font-bold  text-deep-purple-accent-400 sm:text-xl">
              {price.title}
            </h3>
            <h6 className="text-4xl text-green-600 font-bold  text-deep-purple-accent-400 sm:text-5xl">
              {price.price}€
            </h6>
            <p className="text-center md:text-base">{price.info}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PriceDevis;
