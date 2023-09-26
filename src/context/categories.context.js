import SHOP_DATA from "../assets/shop-data";
import { createContext, useEffect, useState } from "react";
import { getCategoryAndDocuments } from "../firebase/utilits";

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {

    const getCategoriesMap = async () => {

      const categoryMap = await getCategoryAndDocuments();
      console.log(categoryMap);
      setCategoriesMap(categoryMap)
    };
    getCategoriesMap()
  }, []);

  const value = { categoriesMap};

  return (
    <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
  );
};
