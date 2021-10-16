import { createContext, useState } from "react";

export const ContextStore = createContext();

export const NavCalcul = ({ children }) => {
  const [navCalculDevis, setNavCalculDevis] = useState(0);
  const [products, setProducts] = useState([]);
  const [showInput, setShowInput] = useState(false);

  // form address start
  const [accesTruckStarted, setAccesTruckStarted] = useState();
  const [stairStarted, setStairStarted] = useState();
  const [LiftStarted, setLiftStarted] = useState();
  const [distancePortageStarted, setDistancePortageStarted] = useState();
  const [addressStarted, setAddressStarted] = useState();

  // form address end

  const [accesTruckArrived, setAccesTruckArrived] = useState();
  const [stairArrived, setStairArrived] = useState();
  const [LiftArrived, setLiftArrived] = useState();
  const [distancePortageArrived, setDistancePortageArrived] = useState();
  const [addressArrived, setAddressArrived] = useState();

  //portage total
  const [portageTotalStarted, setPortageTotalStarted] = useState();
  const [portageTotalArrived, setPortageTotalArrived] = useState();

  // calcul total
  let total = 0;
  // calcul totalStart
  let totalStarted = 0;
  // calcul total
  let totalArrived = 0;

  return (
    <ContextStore.Provider
      value={{
        navCalculDevis,
        setNavCalculDevis,
        products,
        setProducts,
        showInput,
        setShowInput,
        accesTruckArrived,
        setAccesTruckArrived,
        stairArrived,
        setStairArrived,
        LiftArrived,
        setLiftArrived,
        distancePortageArrived,
        setDistancePortageArrived,
        addressArrived,
        setAddressArrived,
        accesTruckStarted,
        setAccesTruckStarted,
        stairStarted,
        setStairStarted,
        LiftStarted,
        setLiftStarted,
        distancePortageStarted,
        setDistancePortageStarted,
        addressStarted,
        setAddressStarted,
        total,
        portageTotalStarted,
        setPortageTotalStarted,
        portageTotalArrived,
        setPortageTotalArrived,
        totalStarted,
        totalArrived,
      }}
    >
      {children}
    </ContextStore.Provider>
  );
};
