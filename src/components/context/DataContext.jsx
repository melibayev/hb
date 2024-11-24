import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const DataContext = createContext();

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
    const token = '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';  
    const repoOwner = 'melibayev'; 
    const repoName = 'data';  
    const filePath = 'db.json';
    const [products, setProducts] = useState(null);
    const [videos, setVideos] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      axios.get(`https://api.github.com/repos/${repoOwner}/${repoName}/contents/${filePath}`, {
        headers: {
          'Authorization': `token ${token}`
        }
      }).then((response) => {
        
        const fileContent = response.data.content;
        const decodedContent = atob(fileContent); 
        const jsonData = JSON.parse(decodedContent);
        
        setProducts(jsonData.products); 
        setVideos(jsonData.videos); 
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
