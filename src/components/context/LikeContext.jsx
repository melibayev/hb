import React, { createContext, useState, useContext } from 'react';

const LikeContext = createContext();

export const useLike = () => useContext(LikeContext);

export const LikeProvider = ({ children }) => {
    const [addToLike, setAddToLike] = useState(false);

    return (
        <LikeContext.Provider value={{ addToLike, setAddToLike }}>
            {children}
        </LikeContext.Provider>
    );
};
