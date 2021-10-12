import React, { useContext } from "react";
import BasketVolume from "./BasketVolume";
import Buttons from "./Buttons";
import VolumeProduct from "./VolumeProduct";

const IknowMyVolume = () => {
  return (
    <div className="p-6  h-auto">
      <div className="flex-col justify-center place-content-evenly md: relative flex h-full w-full ">
        <VolumeProduct />
        <BasketVolume />
        <Buttons />
      </div>
    </div>
  );
};

export default IknowMyVolume;
