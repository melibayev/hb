import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const GlobalContext = createContext();

const API_URL = process.env.REACT_APP_API_URL || "https://raw.githubusercontent.com/melibayev/data/main/db.json";
  const GITHUB_USERNAME = process.env.REACT_APP_GITHUB_USERNAME;
  const REPO_NAME = process.env.REACT_APP_REPO_NAME;
  const BRANCH = process.env.REACT_APP_BRANCH;
  const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN;

export const GlobalProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [videos, setVideos] = useState([]);
  const [uploadedImages, setUploadedImages] = useState([]);

  // Fetch data on mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL);
        const data = response.data;
        setProducts(data.products || []);
        setVideos(data.videos || []);

        const imagesResponse = await axios.get(
          `https://api.github.com/repos/${GITHUB_USERNAME}/${REPO_NAME}/contents/home_images`,
          {
            headers: { Authorization: `token ${ACCESS_TOKEN}` },
          }
        );
        console.log(imagesResponse);
        
        setUploadedImages(imagesResponse.data || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  // Save data to GitHub
  const saveData = async (updatedData) => {
    try {
      const fileResponse = await axios.get(
        `https://api.github.com/repos/${GITHUB_USERNAME}/${REPO_NAME}/contents/db.json`,
        {
          headers: { Authorization: `token ${ACCESS_TOKEN}` },
        }
      );
      const sha = fileResponse.data.sha;
      const currentData = JSON.parse(atob(fileResponse.data.content));
      const mergedData = { ...currentData, ...updatedData };

      await axios.put(
        `https://api.github.com/repos/${GITHUB_USERNAME}/${REPO_NAME}/contents/db.json`,
        {
          message: "Update db.json",
          content: btoa(JSON.stringify(mergedData, null, 2)),
          sha,
          branch: BRANCH,
        },
        {
          headers: { Authorization: `token ${ACCESS_TOKEN}` },
        }
      );
      alert("Data successfully updated!");
    } catch (error) {
      console.error("Failed to save data:", error);
      alert("Failed to save data.");
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        products,
        setProducts,
        videos,
        setVideos,
        uploadedImages,
        setUploadedImages,
        saveData,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
