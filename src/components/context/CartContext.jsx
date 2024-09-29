import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [addToCart, setAddToCart] = useState(false);


    return (
        <CartContext.Provider value={{ addToCart, setAddToCart }}>
            {children}
        </CartContext.Provider>
    );
};
