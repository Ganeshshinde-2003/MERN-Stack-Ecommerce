import { useState, useContext, createContext } from "react";

const CartContex = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  return (
    <CartContex.Provider value={[cart, setCart]}>
      {children}
    </CartContex.Provider>
  );
};

const useCart = () => useContext(CartContex);

export { useCart, CartProvider };
