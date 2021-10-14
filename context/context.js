import { createContext, useState } from "react";

export const ContextStore = createContext();

export const NavCalcul = ({ children }) => {
  const [navCalculDevis, setNavCalculDevis] = useState(0);
  const [products, setProducts] = useState([]);

  return (
    <ContextStore.Provider
      value={{ navCalculDevis, setNavCalculDevis, products, setProducts }}
    >
      {children}
    </ContextStore.Provider>
  );
};
