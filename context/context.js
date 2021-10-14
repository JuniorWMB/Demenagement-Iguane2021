import { createContext, useState } from "react";

export const ContextStore = createContext();

export const NavCalcul = ({ children }) => {
  const [navCalculDevis, setNavCalculDevis] = useState(0);
  const [products, setProducts] = useState([]);
  const [showInput, setShowInput] = useState(false);

  return (
    <ContextStore.Provider
      value={{
        navCalculDevis,
        setNavCalculDevis,
        products,
        setProducts,
        showInput,
        setShowInput,
      }}
    >
      {children}
    </ContextStore.Provider>
  );
};
