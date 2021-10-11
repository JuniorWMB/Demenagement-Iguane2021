import { createContext, useState } from "react";

export const ContextStore = createContext();

export const NavCalcul = ({ children }) => {
  const [navCalculDevis, setNavCalculDevis] = useState(0);

  return (
    <ContextStore.Provider value={{ navCalculDevis, setNavCalculDevis }}>
      {children}
    </ContextStore.Provider>
  );
};
