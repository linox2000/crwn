import SHOP_DATA from "../assets/shop-data.json";
import { createContext, useState } from "react";

export const ProductContext = createContext({
  product: [],
});

export const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState(SHOP_DATA);
  const value = { product };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
