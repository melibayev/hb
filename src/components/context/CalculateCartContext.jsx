import React, { createContext, useContext, useState, useEffect } from "react";

// Create the calculateCartContext
const calculateCartContext = createContext();

// Provider Component
export const CalculateCartProvider = ({ children }) => {
  const [cartTotal, setCartTotal] = useState(0);

  // Function to parse price and calculate the total
  const calculateCartTotal = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const total = cart.reduce((sum, product) => {
        // Remove the "$" sign, replace the comma with a period, and parse the price
        const numericPrice = parseFloat(
          product.price
            .replace("$", "")  // Remove the dollar sign
            .replace(",", ".") // Replace comma with a decimal point
        );
      
        // Ensure the price is properly formatted and calculate the total
        return sum + numericPrice * product.piece;
      }, 0);

    setCartTotal(total);
  };

  // Recalculate total on mount and when localStorage changes
  useEffect(() => {
    calculateCartTotal();

    // Listen for localStorage changes (e.g., from another tab)
    const handleStorageChange = () => calculateCartTotal();
    window.addEventListener("storage", handleStorageChange);

    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <calculateCartContext.Provider value={{ cartTotal, calculateCartTotal }}>
      {children}
    </calculateCartContext.Provider>
  );
};

// Custom hook to use the calculateCartContext
export const useCalculateCart = () => {
  return useContext(calculateCartContext);
};