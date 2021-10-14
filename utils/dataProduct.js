// import HeavyObjet from "./HeavyObjet";
import aspirateur from "../public/1-7_Buanderie/1-Aspirateur.svg";
import bancDeRangement from "../public/1-7_Buanderie/2-banc de rangement.svg";
import laveLinge from "../public/1-7_Buanderie/3-lave linge.svg";
import meubleChaussures from "../public/1-7_Buanderie/4-meuble chaussures.svg";
import panierALinge from "../public/1-7_Buanderie/5-panier a linge.svg";
import secheLinge from "../public/1-7_Buanderie/6-seche linge.svg";
import tableDeRepassage from "../public/1-7_Buanderie/7-table de repassage.svg";
import armoireDeuxPorte from "../public/8-16_Bureau/8-armoire 2 portes.svg";
import bureauAncien from "../public/8-16_Bureau/9-bureau ancien.svg";
import bureauEnfant from "../public/8-16_Bureau/10-bureau enfant.svg";
import casierDeBureau from "../public/8-16_Bureau/11-casier de bureau.svg";
import chaiseDeBureau from "../public/8-16_Bureau/12-chaise de bureau.svg";
import fauteuilDeBureau from "../public/8-16_Bureau/14-fauteuil de bureau.svg";
import lampeSurPied from "../public/8-16_Bureau/15-lampe sur pied.svg";
import tabouret from "../public/8-16_Bureau/16-tabouret.svg";
import cartonClassique from "../public/17-18_Carton/17-carton classique.svg";
import cartonLivres from "../public/17-18_Carton/18-carton livres.svg";
import armoireDressing from "../public/19-26_Chambre/Armoire dressing.svg";
import bibliotheque from "../public/19-26_Chambre/bibliotheque.svg";
import litBaby from "../public/19-26_Chambre/Lit bébé.svg";
import litDouble from "../public/19-26_Chambre/Lit double.svg";
import litSimple from "../public/19-26_Chambre/Lit simple.svg";
import matelasBaby from "../public/19-26_Chambre/Matelas bébé.svg";
import matelasDouble from "../public/19-26_Chambre/Matelas double.svg";
import matelasSimple from "../public/19-26_Chambre/Matelas simple.svg";
import buffetCuisine from "../public/27-37_Cuisine/27-buffet cuisine.svg";
import chaise from "../public/27-37_Cuisine/28-chaise.svg";
import chaiseHauteBaby from "../public/27-37_Cuisine/29-chaise haute bebe.svg";
import congelateur from "../public/27-37_Cuisine/30-congelateur.svg";
import four from "../public/27-37_Cuisine/31-four.svg";
import fourMicroOndes from "../public/27-37_Cuisine/32-four a micro-ondes.svg";
import frigoAmericain from "../public/27-37_Cuisine/33-frigo americain.svg";
import gaziniere from "../public/27-37_Cuisine/34-gazimiere.svg";
import laveVaisselle from "../public/27-37_Cuisine/35-lave vaisselle.svg";
import refrigerateur from "../public/27-37_Cuisine/36-refrigerateur.svg";
import tabouretDeBar from "../public/27-37_Cuisine/37-tabouret de bar.svg";
import bancEntree from "../public/38-40_ENTREE/38-banc entree.svg";
import consoleEntree from "../public/38-40_ENTREE/39-console entree.svg";
import porteManteau from "../public/38-40_ENTREE/40-porte manteau.svg";
import etageres from "../public/41-46_Garage/41-etageres.svg";
import grandBbq from "../public/41-46_Garage/42-grand bbq.svg";
import petitBbq from "../public/41-46_Garage/43-petit bbq.svg";
import tondeuse from "../public/41-46_Garage/44-tondeuse a gazon.svg";
import veloAdulte from "../public/41-46_Garage/45-velo adulte.svg";
import veloEnfant from "../public/41-46_Garage/46-velo enfant.svg";
import parasol from "../public/47_50_Jardin/47-parasol.svg";
import salonDeJardin from "../public/47_50_Jardin/48-salon de jardin.svg";
import tableDeJardon from "../public/47_50_Jardin/49-table de jardin.svg";
import transat from "../public/47_50_Jardin/50-transat.svg";
import canapTwo from "../public/51-64_Salon/51-canape deux places.svg";
import canapThree from "../public/51-64_Salon/52-canapes trois places.svg";
import buffet from "../public/51-64_Salon/53-buffet.svg";
import canapeAngle from "../public/51-64_Salon/54-canape d_angle.svg";
import grandeTableBasse from "../public/51-64_Salon/55-grande table basse.svg";
import meubleTv from "../public/51-64_Salon/56-meuble tV.svg";
import meridienne from "../public/51-64_Salon/57-meridienne.svg";
import fauteuilSalon from "../public/51-64_Salon/58-fauteuil de salon.svg";
import piano from "../public/51-64_Salon/59-piano.svg";
import tableBasse from "../public/51-64_Salon/60-table basse (petite).svg";
import tableSalleAManger from "../public/51-64_Salon/61-table salle a manger.svg";
import tv from "../public/51-64_Salon/62-TV 32.svg";
import tvGrand from "../public/51-64_Salon/63-TV GRAND ECRAN.svg";

// import billard from "../public/billiards.jpg";
// import lourd from "../public/lourd.jpg";
// import pianoHeavy from "../public/piano.jpg";
// import coffre from "../public/coffre.jpg";

import verre from "../public/verre.jpg";
import cartonStandard from "../public/cartonStandard.jpg";
import cartonPenderie from "../public/cartonPenderie.jpg";
import cartonLourd from "../public/cartonLourd.jpg";
import housseRed from "../public/housseRed.jpg";
import housseTurquoise from "../public/housseTurquoise.jpg";
import housseBleu from "../public/housseBleu.jpg";
import cartonBouteilles from "../public/cartonBouteilles.jpg";
import cartonAssiettes from "../public/cartonAssiettes.jpg";
import adhesif from "../public/adhesif.jpg";

export let buanderie = [
  {
    id: "1",
    name: "Aspirateur",
    volume: "0.06",
    quantity: 1,
    picture: aspirateur,
  },
  {
    id: "2",
    name: "Banc de rangement",
    volume: "0.18",
    quantity: 1,
    picture: bancDeRangement,
  },
  {
    id: "3",
    name: "Lave Linge",
    volume: "0.33",
    quantity: 1,
    picture: laveLinge,
  },
  {
    id: "4",
    name: "Malle de rangement",
    volume: "0.21",
    quantity: 1,
    picture: meubleChaussures,
  },
  {
    id: "5",
    name: "Panière à linge",
    volume: "0.12",
    quantity: 1,
    picture: panierALinge,
  },
  {
    id: "6",
    name: "Sèche linge",
    volume: "0.30",
    quantity: 1,
    picture: secheLinge,
  },
  {
    id: "7",
    name: "Table de repassage",
    volume: "0.02",
    quantity: 1,
    picture: tableDeRepassage,
  },
  {
    id: "8",
    name: "Tabouret",
    volume: "0.05",
    quantity: 1,
    picture: tabouretDeBar,
  },
];
export let bureau = [
  {
    id: "9",
    name: "Armoire 2portes",
    volume: "1.03",
    quantity: 1,
    picture: armoireDeuxPorte,
  },
  {
    id: "10",
    name: "Bibliothèque",
    volume: "0.78",
    quantity: 1,
    picture: bibliotheque,
  },
  {
    id: "11",
    name: "Bureau ancien",
    volume: "0.64",
    quantity: 1,
    picture: bureauAncien,
  },
  {
    id: "12",
    name: "Bureau enfant",
    volume: "0.54",
    quantity: 1,
    picture: bureauEnfant,
  },
  {
    id: "13",
    name: "Casier de bureau",
    volume: "0.20",
    quantity: 1,
    picture: casierDeBureau,
  },
  {
    id: "14",
    name: "Chaise de bureau",
    volume: "0.31",
    quantity: 1,
    picture: chaiseDeBureau,
  },
  { id: "15", name: "Clic-clac", volume: "1.85", quantity: 1, picture: null },
  {
    id: "16",
    name: "etagère - Bibliothèque",
    volume: "0.51",
    quantity: 1,
    picture: etageres,
  },
  {
    id: "17",
    name: "Fauteuil de bureau",
    volume: "0.44",
    quantity: 1,
    picture: fauteuilDeBureau,
  },
  {
    id: "18",
    name: "Lampe de bureau",
    volume: "0.01",
    quantity: 1,
    picture: null,
  },
  {
    id: "19",
    name: "Lampe sur pied",
    volume: "0.14",
    quantity: 1,
    picture: lampeSurPied,
  },
  {
    id: "20",
    name: "Malle de rangement",
    volume: "0.21",
    quantity: 1,
    picture: bancDeRangement,
  },
];
export let cartons = [
  {
    id: "21",
    name: "Carton classique",
    volume: "0.06",
    quantity: 1,
    picture: cartonClassique,
  },
  {
    id: "22",
    name: "Carton livres",
    volume: "0.03",
    quantity: 1,
    picture: cartonLivres,
  },
];
export let chambre = [
  {
    id: "23",
    name: "Armoire 2 portes",
    volume: "1.03",
    quantity: 1,
    picture: armoireDeuxPorte,
  },
  {
    id: "24",
    name: "Armoire dressing",
    volume: "2",
    quantity: 1,
    picture: armoireDressing,
  },

  {
    id: "25",
    name: "Bibliothèque",
    volume: "0.78",
    quantity: 1,
    picture: bibliotheque,
  },
  {
    id: "26",
    name: "Bureau enfant",
    volume: "0.54",
    quantity: 1,
    picture: bureauEnfant,
  },
  {
    id: "27",
    name: "Chaise de bureau",
    volume: "0.31",
    quantity: 1,
    picture: chaiseDeBureau,
  },
  { id: "28", name: "Clic-clac", volume: "1.85", quantity: 1, picture: null },
  { id: "29", name: "Commode", volume: "0.31", quantity: 1, picture: null },
  {
    id: "30",
    name: "etagère - Bibliothèque",
    volume: "0.51",
    quantity: 1,
    picture: etageres,
  },
  {
    id: "31",
    name: "Lampe sur pied",
    volume: "0.14",
    quantity: 1,
    picture: lampeSurPied,
  },
  {
    id: "32",
    name: "Malle de rangement",
    volume: "0.21",
    quantity: 1,
    picture: bancDeRangement,
  },

  {
    id: "33",
    name: "Lit bébé",
    volume: "0.93",
    quantity: 1,
    picture: litBaby,
  },
  {
    id: "3'",
    name: "Lit double",
    volume: "2.51",
    quantity: 1,
    picture: litDouble,
  },
  {
    id: "35",
    name: "Lit simple",
    volume: "1.62",
    quantity: 1,
    picture: litSimple,
  },
  {
    id: "36",
    name: "Matelas double",
    volume: "0.64",
    quantity: 1,
    picture: matelasDouble,
  },
  {
    id: "37",
    name: "Matelas lit bébé",
    volume: "0.02",
    quantity: 1,
    picture: matelasBaby,
  },
  {
    id: "38",
    name: "Matelas simple",
    volume: "0.36",
    quantity: 1,
    picture: matelasSimple,
  },
  { id: "39", name: "Pouf", volume: "0.04", quantity: 1, picture: null },
  {
    id: "40",
    name: "Table de chevet",
    volume: "0.07",
    quantity: 1,
    picture: tableBasse,
  },
  {
    id: "41",
    name: "Tabouret",
    volume: "0.05",
    quantity: 1,
    picture: tabouret,
  },
  {
    id: "42",
    name: "Télévision 32 pouces",
    volume: "0.03",
    quantity: 1,
    picture: tv,
  },
];
export let cuisine = [
  { id: "43", name: "Bahut", volume: "0.79", quantity: 1, picture: null },
  {
    id: "44",
    name: "Buffet cuisine",
    volume: "0.57",
    quantity: 1,
    picture: buffetCuisine,
  },
  { id: "45", name: "Chaise", volume: "0.29", quantity: 1, picture: chaise },
  {
    id: "46",
    name: "Chaise haute bébé",
    volume: "0.14",
    quantity: 1,
    picture: chaiseHauteBaby,
  },
  {
    id: "47",
    name: "Congélateur",
    volume: "0.71",
    quantity: 1,
    picture: congelateur,
  },
  { id: "48", name: "Four", volume: "0.21", quantity: 1, picture: four },
  {
    id: "49",
    name: "Four micro-onde",
    volume: "0.07",
    quantity: 1,
    picture: fourMicroOndes,
  },
  {
    id: "50",
    name: "Frigo américain",
    volume: "1.13",
    quantity: 1,
    picture: frigoAmericain,
  },
  {
    id: "51",
    name: "Gazinière",
    volume: "0.31",
    quantity: 1,
    picture: gaziniere,
  },
  { id: "52", name: "Hotte", volume: "0.30", quantity: 1, picture: null },
  {
    id: "53",
    name: "Lave vaisselle",
    volume: "0.31",
    quantity: 1,
    picture: laveVaisselle,
  },
  {
    id: "54",
    name: "Plante artificielle",
    volume: "0.09",
    quantity: 1,
    picture: null,
  },
  {
    id: "55",
    name: "Poubelle de cuisine",
    volume: "0.06",
    quantity: 1,
    picture: null,
  },
  {
    id: "56",
    name: "Réfrigérateur",
    volume: "0.73",
    quantity: 1,
    picture: refrigerateur,
  },
  {
    id: "57",
    name: "Table de cuisine",
    volume: "0.72",
    quantity: 1,
    picture: tableSalleAManger,
  },
  {
    id: "58",
    name: "Tabouret de bar",
    volume: "0.15",
    quantity: 1,
    picture: tabouretDeBar,
  },
];
export let entree = [
  {
    id: "59",
    name: "Banc d'entrée",
    volume: "0.21",
    quantity: 1,
    picture: bancEntree,
  },
  {
    id: "60",
    name: "Console d'entrée",
    volume: "0.49",
    quantity: 1,
    picture: consoleEntree,
  },
  {
    id: "61",
    name: "Port Manteaux",
    volume: "0.02",
    quantity: 1,
    picture: porteManteau,
  },
];
export let garage = [
  {
    id: "62",
    name: "Aspirateur de chantier",
    volume: "0.11",
    quantity: 1,
    picture: aspirateur,
  },
  {
    id: "63",
    name: "Banc de rangement",
    volume: "0.18",
    quantity: 1,
    picture: bancDeRangement,
  },
  {
    id: "64",
    name: "Caisse à outils",
    volume: "0.03",
    quantity: 1,
    picture: null,
  },
  {
    id: "65",
    name: "Congelateur",
    volume: "0.71",
    quantity: 1,
    picture: congelateur,
  },
  { id: "66", name: "Echelle", volume: "0.11", quantity: 1, picture: null },
  { id: "67", name: "etabli", volume: "0.86", quantity: 1, picture: null },
  {
    id: "68",
    name: "etagères",
    volume: "0.74",
    quantity: 1,
    picture: etageres,
  },
  {
    id: "69",
    name: "Grand barbecue",
    volume: "1.41",
    quantity: 1,
    picture: grandBbq,
  },
  {
    id: "70",
    name: "lave Linge",
    volume: "0.33",
    quantity: 1,
    picture: laveLinge,
  },
  {
    id: "71",
    name: "Malle de rangement",
    volume: "0.21",
    quantity: 1,
    picture: null,
  },
  {
    id: "72",
    name: "Meuble chaussures",
    volume: "0.25",
    quantity: 1,
    picture: meubleChaussures,
  },
  {
    id: "73",
    name: "Nettoyeur haute pression",
    volume: "0.07",
    quantity: 1,
    picture: null,
  },
  {
    id: "74",
    name: "Petit barbecue",
    volume: "0.08",
    quantity: 1,
    picture: petitBbq,
  },
  {
    id: "75",
    name: "Poubelle de tri",
    volume: "0.11",
    quantity: 1,
    picture: null,
  },
  {
    id: "76",
    name: "Sèche linge",
    volume: "0.30",
    quantity: 1,
    picture: secheLinge,
  },
  {
    id: "77",
    name: "Tondeuse à gazon",
    volume: "0.52",
    quantity: 1,
    picture: tondeuse,
  },
  { id: "78", name: "Valise", volume: "0.08", quantity: 1, picture: null },
  {
    id: "79",
    name: "Vélo adulte",
    volume: "1.26",
    quantity: 1,
    picture: veloAdulte,
  },
  {
    id: "80",
    name: "Vélo enfant",
    volume: "0.17",
    quantity: 1,
    picture: veloEnfant,
  },
  {
    id: "81",
    name: "Ventilateur",
    volume: "0.17",
    quantity: 1,
    picture: null,
  },
];
export let jardin = [
  {
    id: "82",
    name: "Chaise de jardin",
    volume: "0.29",
    quantity: 1,
    picture: null,
  },
  {
    id: "83",
    name: "Parasol de jardin",
    volume: "0.08",
    quantity: 1,
    picture: parasol,
  },
  {
    id: "84",
    name: "Salon de jardin",
    volume: "1.34",
    quantity: 1,
    picture: salonDeJardin,
  },
  {
    id: "85",
    name: "Table de jardin",
    volume: "1.50",
    quantity: 1,
    picture: tableDeJardon,
  },
  {
    id: "86",
    name: "Tondeuse à gazon",
    volume: "0.52",
    quantity: 1,
    picture: tondeuse,
  },
  {
    id: "87",
    name: "Transat",
    volume: "0.01",
    quantity: 1,
    picture: transat,
  },
];
export let salleDeBain = [
  {
    id: "88",
    name: "Baignoire bébé",
    volume: "0.13",
    quantity: 1,
    picture: null,
  },
  {
    id: "89",
    name: "Colonne salle de bain",
    volume: "0.16",
    quantity: 1,
    picture: null,
  },
  {
    id: "90",
    name: "Meuble lavabo",
    volume: "0.34",
    quantity: 1,
    picture: null,
  },
  {
    id: "91",
    name: "Miroir rangement",
    volume: "0.05",
    quantity: 1,
    picture: null,
  },
  {
    id: "92",
    name: "Panière à linge",
    volume: "0.12",
    quantity: 1,
    picture: null,
  },
];
export let salon = [
  {
    id: "93",
    name: "Bibliothèque",
    volume: "0.78",
    quantity: 1,
    picture: bibliotheque,
  },
  {
    id: "94",
    name: "Billard - 300 kgs",
    volume: "2.39",
    quantity: 1,
    picture: null,
  },
  { id: "95", name: "Buffet", volume: "0.84", quantity: 1, picture: buffet },
  {
    id: "96",
    name: "Canapé 2 places",
    volume: "1.41",
    quantity: 1,
    picture: canapTwo,
  },
  {
    id: "98",
    name: "Canapé 3 places",
    volume: "1.91",
    quantity: 1,
    picture: canapThree,
  },
  {
    id: "99",
    name: "Canapé d'angle",
    volume: "2.84",
    quantity: 1,
    picture: canapeAngle,
  },
  {
    id: "100",
    name: "Chaise salle à manger",
    volume: "0.25",
    quantity: 1,
    picture: null,
  },
  {
    id: "101",
    name: "Coffre-fort - 300 kgs",
    volume: "0.14",
    quantity: 1,
    picture: null,
  },
  {
    id: "102",
    name: "étagère - Bibliothèque",
    volume: "0.51",
    quantity: 1,
    picture: etageres,
  },
  {
    id: "103",
    name: "Fauteuil club",
    volume: "0.74",
    quantity: 1,
    picture: null,
  },
  {
    id: "104",
    name: "Fauteuil de salon",
    volume: "0.86",
    quantity: 1,
    picture: fauteuilSalon,
  },
  {
    id: "105",
    name: "Grande table basse",
    volume: "0.33",
    quantity: 1,
    picture: grandeTableBasse,
  },
  {
    id: "106",
    name: "Lampe de salon",
    volume: "0.08",
    quantity: 1,
    picture: null,
  },
  {
    id: "107",
    name: "Lampe sur pied",
    volume: "0.14",
    quantity: 1,
    picture: lampeSurPied,
  },
  {
    id: "108",
    name: "Méridienne",
    volume: "1.28",
    quantity: 1,
    picture: meridienne,
  },
  {
    id: "109",
    name: "Meuble télévision",
    volume: "0.42",
    quantity: 1,
    picture: meubleTv,
  },
  {
    id: "110",
    name: "Meuble vitrine",
    volume: "0.84",
    quantity: 1,
    picture: null,
  },
  {
    id: "111",
    name: "Piano -300 kgs",
    volume: "1.13",
    quantity: 1,
    picture: piano,
  },
  {
    id: "112",
    name: "Plante artificielle",
    volume: "0.09",
    quantity: 1,
    picture: null,
  },
  { id: "113", name: "Pouf", volume: "0.04", quantity: 1, picture: null },
  {
    id: "114",
    name: "Table basse",
    volume: "0.1",
    quantity: 1,
    picture: tableBasse,
  },
  {
    id: "115",
    name: "Table de salle à manger",
    volume: "1.15",
    quantity: 1,
    picture: tableSalleAManger,
  },
  {
    id: "116",
    name: "Table gigogne",
    volume: "0.12",
    quantity: 1,
    picture: null,
  },
  {
    id: "117",
    name: "Télévision 32 pouces",
    volume: "0.03",
    quantity: 1,
    picture: tv,
  },
  {
    id: "118",
    name: "Télévision grand ecran",
    volume: "0.13",
    quantity: 1,
    picture: tvGrand,
  },
  {
    id: "119",
    name: "Vaisselier",
    volume: "1.27",
    quantity: 1,
    picture: null,
  },
];

export let emballagesProduct = [
  { id: "120", name: "verre", price: "10.90", quantity: 1, picture: verre },
  {
    id: "121",
    name: "Carton standard",
    price: "1.99",
    quantity: 1,
    picture: cartonStandard,
  },
  {
    id: "122",
    name: "Carton penderie",
    price: "10.00",
    quantity: 1,
    picture: cartonPenderie,
  },
  {
    id: "123",
    name: "Carton lourd",
    price: "1.50",
    quantity: 1,
    picture: cartonLourd,
  },
  {
    id: "124",
    name: "Housse rouge",
    price: "6.00",
    quantity: 1,
    picture: housseRed,
  },
  {
    id: "125",
    name: "Housse turquoise",
    price: "3.50",
    quantity: 1,
    picture: housseTurquoise,
  },
  {
    id: "126",
    name: "Housse bleu",
    price: "4.70",
    quantity: 1,
    picture: housseBleu,
  },
  {
    id: "127",
    name: "Carton bouteilles",
    price: "2.90",
    quantity: 1,
    picture: cartonBouteilles,
  },
  {
    id: "128",
    name: "Carton assiettes",
    price: "12.90",
    quantity: 1,
    picture: cartonAssiettes,
  },
  {
    id: "129",
    name: "Adhesif",
    price: "2.99",
    quantity: 1,
    picture: adhesif,
  },
];
