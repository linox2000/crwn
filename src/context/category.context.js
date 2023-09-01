import { createContext, useState } from "react";
import Category from "../assets/categories.json";

export const CategoryContext = createContext({
  categories: [],
});

export const CategoryProvider = ({ children }) => {
  const [categories] = useState(Category);
  const value = { categories };

  return <CategoryContext.Provider value={value}>{children}</CategoryContext.Provider>;
};
