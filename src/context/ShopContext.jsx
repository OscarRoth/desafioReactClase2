import React, { createContext, useState } from "react";

export const Shop = createContext();

const ShopProvider = ({ children }) => {
  const [estadoA, setEstadoA] = useState("valor por defecto");

  return (
    <Shop.Provider value={{ estadoA, setEstadoA }}>{children}</Shop.Provider>
  );
};
export default ShopProvider;
