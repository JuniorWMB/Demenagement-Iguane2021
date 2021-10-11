import React, { useContext } from "react";
import { ContextStore } from "../../context/context";

const BasketVolume = () => {
  const { navCalculDevis, setNavCalculDevis } = useContext(ContextStore);
  return (
    <>
      {navCalculDevis === 0 ? (
        <div className="my-2 w-[450px] p-2 h-[100px] shadow-lg rounded-xl border-green-500 border-2 bg-white md:bg-yellow-600">
          2
        </div>
      ) : null}
    </>
  );
};

export default BasketVolume;
