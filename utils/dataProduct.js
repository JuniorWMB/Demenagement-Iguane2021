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
  { name: "Aspirateur", volume: 0.06, picture: aspirateur },
  { name: "Banc de rangement", volume: 0.18, picture: bancDeRangement },
  { name: "Lave Linge", volume: 0.33, picture: laveLinge },
  { name: "Malle de rangement", volume: 0.21, picture: meubleChaussures },
  { name: "Panière à linge", volume: 0.12, picture: panierALinge },
  { name: "Sèche linge", volume: 0.3, picture: secheLinge },
  { name: "Table de repassage", volume: 0.02, picture: tableDeRepassage },
  { name: "Tabouret", volume: 0.05, picture: tabouretDeBar },
];
export let bureau = [
  { name: "Armoire 2portes", volume: 1.03, picture: armoireDeuxPorte },
  { name: "Bibliothèque", volume: 0.78, picture: bibliotheque },
  { name: "Bureau ancien", volume: 0.64, picture: bureauAncien },
  { name: "Bureau enfant", volume: 0.54, picture: bureauEnfant },
  { name: "Casier de bureau", volume: 0.2, picture: casierDeBureau },
  { name: "Chaise de bureau", volume: 0.31, picture: chaiseDeBureau },
  { name: "Clic-clac", volume: 1.85, picture: null },
  { name: "etagère - Bibliothèque", volume: 0.51, picture: etageres },
  { name: "Fauteuil de bureau", volume: 0.44, picture: fauteuilDeBureau },
  { name: "Lampe de bureau", volume: 0.01, picture: null },
  { name: "Lampe sur pied", volume: 0.14, picture: lampeSurPied },
  { name: "Malle de rangement", volume: 0.21, picture: bancDeRangement },
];
export let cartons = [
  { name: "Carton classique", volume: 0.06, picture: cartonClassique },
  { name: "Carton livres", volume: 0.03, picture: cartonLivres },
];
export let chambre = [
  { name: "Armoire 2 portes", volume: 1.03, picture: armoireDeuxPorte },
  { name: "Armoire dressing", volume: 2, picture: armoireDressing },

  { name: "Bibliothèque", volume: 0.78, picture: bibliotheque },
  { name: "Bureau enfant", volume: 0.54, picture: bureauEnfant },
  { name: "Chaise de bureau", volume: 0.31, picture: chaiseDeBureau },
  { name: "Clic-clac", volume: 1.85, picture: null },
  { name: "Commode", volume: 0.31, picture: null },
  { name: "etagère - Bibliothèque", volume: 0.51, picture: etageres },
  { name: "Lampe sur pied", volume: 0.14, picture: lampeSurPied },
  { name: "Malle de rangement", volume: 0.21, picture: bancDeRangement },

  { name: "Lit bébé", volume: 0.93, picture: litBaby },
  { name: "Lit double", volume: 2.51, picture: litDouble },
  { name: "Lit simple", volume: 1.62, picture: litSimple },
  { name: "Matelas double", volume: 0.64, picture: matelasDouble },
  { name: "Matelas lit bébé", volume: 0.02, picture: matelasBaby },
  { name: "Matelas simple", volume: 0.36, picture: matelasSimple },
  { name: "Pouf", volume: 0.04, picture: null },
  { name: "Table de chevet", volume: 0.07, picture: tableBasse },
  { name: "Tabouret", volume: 0.05, picture: tabouret },
  { name: "Télévision 32 pouces", volume: 0.03, picture: tv },
];
export let cuisine = [
  { name: "Bahut", volume: 0.79, picture: null },
  { name: "Buffet cuisine", volume: 0.57, picture: buffetCuisine },
  { name: "Chaise", volume: 0.29, picture: chaise },
  { name: "Chaise haute bébé", volume: 0.14, picture: chaiseHauteBaby },
  { name: "Congélateur", volume: 0.71, picture: congelateur },
  { name: "Four", volume: 0.21, picture: four },
  { name: "Four micro-onde", volume: 0.07, picture: fourMicroOndes },
  { name: "Frigo américain", volume: 1.13, picture: frigoAmericain },
  { name: "Gazinière", volume: 0.31, picture: gaziniere },
  { name: "Hotte", volume: 0.3, picture: null },
  { name: "Lave vaisselle", volume: 0.31, picture: laveVaisselle },
  { name: "Plante artificielle", volume: 0.09, picture: null },
  { name: "Poubelle de cuisine", volume: 0.06, picture: null },
  { name: "Réfrigérateur", volume: 0.73, picture: refrigerateur },
  { name: "Table de cuisine", volume: 0.72, picture: tableSalleAManger },
  { name: "Tabouret de bar", volume: 0.15, picture: tabouretDeBar },
];
export let entree = [
  { name: "Banc d'entrée", volume: 0.21, picture: bancEntree },
  { name: "Console d'entrée", volume: 0.49, picture: consoleEntree },
  { name: "Port Manteaux", volume: 0.02, picture: porteManteau },
];
export let garage = [
  { name: "Aspirateur de chantier", volume: 0.11, picture: aspirateur },
  { name: "Banc de rangement", volume: 0.18, picture: bancDeRangement },
  { name: "Caisse à outils", volume: 0.03, picture: null },
  { name: "Congelateur", volume: 0.71, picture: congelateur },
  { name: "Echelle", volume: 0.11, picture: null },
  { name: "etabli", volume: 0.86, picture: null },
  { name: "etagères", volume: 0.74, picture: etageres },
  { name: "Grand barbecue", volume: 1.41, picture: grandBbq },
  { name: "lave Linge", volume: 0.33, picture: laveLinge },
  { name: "Malle de rangement", volume: 0.21, picture: null },
  { name: "Meuble chaussures", volume: 0.25, picture: meubleChaussures },
  { name: "Nettoyeur haute pression", volume: 0.07, picture: null },
  { name: "Petit barbecue", volume: 0.08, picture: petitBbq },
  { name: "Poubelle de tri", volume: 0.11, picture: null },
  { name: "Sèche linge", volume: 0.3, picture: secheLinge },
  { name: "Tondeuse à gazon", volume: 0.52, picture: tondeuse },
  { name: "Valise", volume: 0.08, picture: null },
  { name: "Vélo adulte", volume: 1.26, picture: veloAdulte },
  { name: "Vélo enfant", volume: 0.17, picture: veloEnfant },
  { name: "Ventilateur", volume: 0.17, picture: null },
];
export let jardin = [
  { name: "Chaise de jardin", volume: 0.29, picture: null },
  { name: "Parasol de jardin", volume: 0.08, picture: parasol },
  { name: "Salon de jardin", volume: 1.34, picture: salonDeJardin },
  { name: "Table de jardin", volume: 1.5, picture: tableDeJardon },
  { name: "Tondeuse à gazon", volume: 0.52, picture: tondeuse },
  { name: "Transat", volume: 0.01, picture: transat },
];
export let salleDeBain = [
  { name: "Baignoire bébé", volume: 0.13, picture: null },
  { name: "Colonne salle de bain", volume: 0.16, picture: null },
  { name: "Meuble lavabo", volume: 0.34, picture: null },
  { name: "Miroir rangement", volume: 0.05, picture: null },
  { name: "Panière à linge", volume: 0.12, picture: null },
];
export let salon = [
  { name: "Bibliothèque", volume: 0.78, picture: bibliotheque },
  { name: "Billard - 300 kgs", volume: 2.39, picture: null },
  { name: "Buffet", volume: 0.84, picture: buffet },
  { name: "Canapé 2 places", volume: 1.41, picture: canapTwo },
  { name: "Canapé 3 places", volume: 1.91, picture: canapThree },
  { name: "Canapé d'angle", volume: 2.84, picture: canapeAngle },
  { name: "Chaise salle à manger", volume: 0.25, picture: null },
  { name: "Coffre-fort - 300 kgs", volume: 0.14, picture: null },
  { name: "étagère - Bibliothèque", volume: 0.51, picture: etageres },
  { name: "Fauteuil club", volume: 0.74, picture: null },
  { name: "Fauteuil de salon", volume: 0.86, picture: fauteuilSalon },
  { name: "Grande table basse", volume: 0.33, picture: grandeTableBasse },
  { name: "Lampe de salon", volume: 0.08, picture: null },
  { name: "Lampe sur pied", volume: 0.14, picture: lampeSurPied },
  { name: "Méridienne", volume: 1.28, picture: meridienne },
  { name: "Meuble télévision", volume: 0.42, picture: meubleTv },
  { name: "Meuble vitrine", volume: 0.84, picture: null },
  { name: "Piano -300 kgs", volume: 1.13, picture: piano },
  { name: "Plante artificielle", volume: 0.09, picture: null },
  { name: "Pouf", volume: 0.04, picture: null },
  { name: "Table basse", volume: 0.1, picture: tableBasse },
  { name: "Table de salle à manger", volume: 1.15, picture: tableSalleAManger },
  { name: "Table gigogne", volume: 0.12, picture: null },
  { name: "Télévision 32 pouces", volume: 0.03, picture: tv },
  { name: "Télévision grand ecran", volume: 0.13, picture: tvGrand },
  { name: "Vaisselier", volume: 1.27, picture: null },
];

export let emballagesProduct = [
  { name: "verre", price: "10.90", picture: verre },
  { name: "Carton standard", price: "1.99", picture: cartonStandard },
  { name: "Carton penderie", price: "10.00", picture: cartonPenderie },
  { name: "Carton lourd", price: "1.50", picture: cartonLourd },
  { name: "Housse rouge", price: "6.00", picture: housseRed },
  { name: "Housse turquoise", price: "3.50", picture: housseTurquoise },
  { name: "Housse bleu", price: "4.70", picture: housseBleu },
  { name: "Carton bouteilles", price: "2.90", picture: cartonBouteilles },
  { name: "Carton assiettes", price: "12.90", picture: cartonAssiettes },
  { name: "Adhesif", price: "2.99", picture: adhesif },
];
