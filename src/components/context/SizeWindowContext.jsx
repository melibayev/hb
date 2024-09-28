import React, { createContext, useState, useContext } from 'react';

const SizeWindowContext = createContext();

export const useSizeWindow = () => {
  return useContext(SizeWindowContext);
};

export const SizeWindowProvider = ({ children }) => {
  const [isOpened, setIsOpened] = useState(false); // Shared state

  return (
    <SizeWindowContext.Provider value={{ isOpened, setIsOpened }}>
      {children}
    </SizeWindowContext.Provider>
  );
};
