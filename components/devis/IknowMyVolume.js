import React from "react";
import BasketVolume from "./BasketVolume";
import Buttons from "./Buttons";
import VolumeProduct from "./VolumeProduct";
const IknowMyVolume = () => {
  return (
    <div className="border-2 border-red-800 mb-24 p-10 h-full ">
      <div className="flex-col  md:bg-red-700 flex h-full w-full  md:flex-row">
        <VolumeProduct />
        <BasketVolume />
      </div>
      <Buttons />
    </div>
  );
};

export default IknowMyVolume;
