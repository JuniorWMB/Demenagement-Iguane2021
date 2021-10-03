import React from "react";
import MainInfo from "./MainInfo";
import BoxZero from "../public/boxchat.jpg";
import BoxTwo from "../public/entrepot.jpg";
import BoxFour from "../public/payement.jpg";

const infos = [
  {
    id: 1,
    title: "Déménagement",
    info: "Déménagement de particuliers ou professionnels,débarras,monte meuble.",
    picture: BoxZero,
  },
  {
    id: 2,
    title: "Stockage",
    info: "En rack ou au sol dans un entrepôt chauffer et sécuriser. Réception, préparation et expédition de vos marchandises.",
    picture: BoxTwo,
  },
  {
    id: 3,
    title: "Vente produit",
    info: "Nous proposons une large sélection de produits indispensable pour votre déménagement (cartons, adhesifs, housses etc...).",
    picture: BoxFour,
  },
];

const Main = () => {
  return (
    <div className="flex justify-center my-12 h-[400px]">
      {infos.map((info, index) => (
        <div className="flex" key={info.id}>
          <MainInfo
            title={info.title}
            info={info.info}
            picture={info.picture}
          />
        </div>
      ))}
    </div>
  );
};

export default Main;