import { createContext, useState } from "react";

export const CartDropdownContext = createContext({
  isCartOpen: false,
  setCart: () => null,
});

export const CartDropdownProvider = ({ children }) => {
  const [isCartOpen, setCart] = useState(false);
  const value = { isCartOpen,setCart };

  return (
    <CartDropdownContext.Provider value={value}>
      {children}
    </CartDropdownContext.Provider>
  );
};
