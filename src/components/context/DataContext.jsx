import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const DataContext = createContext();

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
    const [products, setProducts] = useState(null);
    const [videos, setVideos] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const api = process.env.REACT_APP_API_URL
    console.log(api);
    

    useEffect(() => {
      axios.get(api)
      .then((response) => {
        
        setProducts(response.data.products); 
        setVideos(response.data.videos); 
        setLoading(false); 
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false); 
      });
    }, []);

    return (
        <DataContext.Provider value={{ videos, products, loading, setLoading, error }}>
            {children}
        </DataContext.Provider>
    );
};
