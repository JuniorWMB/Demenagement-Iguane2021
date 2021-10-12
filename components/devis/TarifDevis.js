import React from "react";
import Calendar from "./Calendar";

const TarifDevis = () => {
  return (
    <div>
      <div className="border border-green-600 flex flex-col place-content-around justify-center md:flex-row">
        <Calendar title={"Chargement"} />
        <Calendar title={"Livraison"} />
      </div>
    </div>
  );
};

export default TarifDevis;
