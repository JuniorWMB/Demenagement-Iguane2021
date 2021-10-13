import BoxZero from "../public/boxchat.jpg";
import BoxTwo from "../public/entrepotok.jpg";
import BoxFour from "../public/payement.jpg";

import manDem from "../public/mandem.jpg";
import manBoxInfo from "../public/manbox.jpg";
import manDemTruck from "../public/homedem.jpg";

import {
  LightBulbIcon,
  LightningBoltIcon,
  QuestionMarkCircleIcon,
  PencilAltIcon,
  CalculatorIcon,
  CreditCardIcon,
  TruckIcon,
  HomeIcon,
} from "@heroicons/react/outline";

export const infos = [
  {
    // id: 1,
    title: "Déménagement",
    subTitle: ".01",
    info: "Déménagement de particuliers ou professionnels,débarras,monte meuble.",
    picture: BoxZero,
    href: "/devis",
  },
  {
    // id: 2,
    title: "Stockage",
    subTitle: ".02",
    info: "En rack ou au sol dans un entrepôt chauffer et sécuriser. Réception, préparation et expédition de vos marchandises.",
    picture: BoxTwo,
    href: "/",
  },
  {
    // id: 3,
    title: "Vente produit",
    subTitle: ".03",
    info: "Nous proposons une large sélection de produits indispensable pour votre déménagement (cartons, adhesifs, housses etc...).",
    picture: BoxFour,
    href: "/shop",
  },
];

export const navigation = [
  { name: "Accueil", href: "/" },
  { name: "Boutiques", href: "/shop" },
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
    href: "",
  },
  {
    id: 2,
    title: "Je ne connais pas mon volume",
    subTitle: <LightningBoltIcon />,
    info: "Vous ne connaissez pas  votre volume, il vous suffis de clicker ici et de vous laissez guider.",
    picture: manDemTruck,
    href: "",
  },
  {
    id: 3,
    title: "Besoin d'information",
    subTitle: <QuestionMarkCircleIcon />,
    info: "Vous pouvez nous contacter en cliquant ici et en renseignant vos besoins.",
    picture: manBoxInfo,
    href: "#form",
  },
];

export const infoPriceDevis = [
  {
    title: "BASIC",
    price: "30",
    info: " La manutention de vos meubles depuis votre appartement jusque dans le camion",
  },
  {
    title: "ECO",
    price: "45",
    info: " L'emballages et le déballages de tout vos cartons. Le démontages et remontage de tout vos meubles.",
  },
  {
    title: "SECURITE",
    price: "60",
    info: " L'emballages et le déballages de tout vos cartons. Le démontages et remontage de tout vos meubles.",
  },
  {
    title: "PREMIUM",
    price: "80",
    info: " L'emballages et le déballages de tout vos cartons. Le démontages et remontage de tout vos meubles.",
  },
];

export const steps = [
  {
    icone: <CalculatorIcon className="h-8 w-8 text-green-900" />,
    title: "Step 1 Calculateur",
    info: "  Calculer le volume totale de votre déménagement,grace a notre calculateur de volume.",
  },
  {
    icone: <HomeIcon className="h-8 w-8 text-green-900" />,
    title: "Step 2 Votre adresse de départ",
    info: "Indiqué nous votre adresse de départ, afin que l'on puisse calculer la distance entre votre lieu de départ et celui d'arrivée.",
  },
  {
    icone: <TruckIcon className="h-8 w-8 text-green-900" />,
    title: "Step 3 Votre adresse d'arrivée",
    info: " Indiqué nous votre adresse de arrivée, afin que l'on puisse calculer la distance entre votre lieu de départ et celui d'arrivée.",
  },
  {
    icone: <CreditCardIcon className="h-8 w-8 text-green-900" />,
    title: "Step 4 Tarif",
    info: "Voici le tarif que nous vous proposons après inspection de vos informations.",
  },
  {
    icone: <PencilAltIcon className="h-8 w-8 text-green-900" />,
    title: "Step 5 Récapitulatif",
    info: "Récapitulons votre devis.",
  },
];
