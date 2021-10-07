import BoxZero from "../public/boxchat.jpg";
import BoxTwo from "../public/entrepot.jpg";
import BoxFour from "../public/payement.jpg";

import manDem from "../public/mandem.jpg";
import manBoxInfo from "../public/manbox.jpg";
import manDemTruck from "../public/demman.jpg";

import {
  FireIcon,
  LightBulbIcon,
  LightningBoltIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/solid";

export const infos = [
  {
    id: 1,
    title: "Déménagement",
    subTitle: ".01",
    info: "Déménagement de particuliers ou professionnels,débarras,monte meuble.",
    picture: BoxZero,
  },
  {
    id: 2,
    title: "Stockage",
    subTitle: ".02",
    info: "En rack ou au sol dans un entrepôt chauffer et sécuriser. Réception, préparation et expédition de vos marchandises.",
    picture: BoxTwo,
  },
  {
    id: 3,
    title: "Vente produit",
    subTitle: ".03",
    info: "Nous proposons une large sélection de produits indispensable pour votre déménagement (cartons, adhesifs, housses etc...).",
    picture: BoxFour,
  },
];

export const navigation = [
  { name: "Accueil", href: "#" },
  { name: "Boutiques", href: "#" },
  { name: "Contact", href: "#form" },
  { name: "FAQ", href: "#" },
];

export const choice = [
  {
    id: 1,
    title: "Je connais mon volume",
    subTitle: <LightBulbIcon />,
    info: "Vous connaissez votre volume, il vous suffis de le renseigner ci-dessous.",
    picture: manDem,
  },
  {
    id: 2,
    title: "Je ne connais pas mon volume",
    subTitle: <LightningBoltIcon />,
    info: "Vous ne connaissez pas  votre volume, il vous suffis de clicker ici et de vous laissez guider.",
    picture: manDemTruck,
  },
  {
    id: 3,
    title: "Besoin d'information",
    subTitle: <QuestionMarkCircleIcon />,
    info: "Vous pouvez nous contacter en cliquant ici et en renseignant vos besoins.",
    picture: manBoxInfo,
  },
];
