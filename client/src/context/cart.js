import { useState, useContext, createContext, useEffect } from "react";

const CartContex = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    let exitCart = localStorage.getItem("cart");
    if (exitCart) setCart(JSON.parse(exitCart));
  }, []);

  return (
    <CartContex.Provider value={[cart, setCart]}>
      {children}
    </CartContex.Provider>
  );
};

const useCart = () => useContext(CartContex);

export { useCart, CartProvider };
