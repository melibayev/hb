import React, { createContext, useState, useContext } from 'react';

const RemoveLikeContext = createContext();

export const useRemoveLike = () => useContext(RemoveLikeContext);

export const RemoveLikeProvider = ({ children }) => {
    const [removeAddToLike, setRemoveAddToLike] = useState(false);

    return (
        <RemoveLikeContext.Provider value={{ removeAddToLike, setRemoveAddToLike }}>
            {children}
        </RemoveLikeContext.Provider>
    );
};
