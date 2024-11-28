import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const GlobalContext = createContext();

const API_URL = process.env.REACT_APP_API_URL || "https://raw.githubusercontent.com/melibayev/data/main/db.json";
const GITHUB_CONFIG = {
  username: "melibayev",
  repo: "data",
  branch: "main",
  token: "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",
};

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
          `https://api.github.com/repos/${GITHUB_CONFIG.username}/${GITHUB_CONFIG.repo}/contents/home_images`,
          {
            headers: { Authorization: `token ${GITHUB_CONFIG.token}` },
          }
        );
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
        `https://api.github.com/repos/${GITHUB_CONFIG.username}/${GITHUB_CONFIG.repo}/contents/db.json`,
        {
          headers: { Authorization: `token ${GITHUB_CONFIG.token}` },
        }
      );
      const sha = fileResponse.data.sha;
      const currentData = JSON.parse(atob(fileResponse.data.content));
      const mergedData = { ...currentData, ...updatedData };

      await axios.put(
        `https://api.github.com/repos/${GITHUB_CONFIG.username}/${GITHUB_CONFIG.repo}/contents/db.json`,
        {
          message: "Update db.json",
          content: btoa(JSON.stringify(mergedData, null, 2)),
          sha,
          branch: GITHUB_CONFIG.branch,
        },
        {
          headers: { Authorization: `token ${GITHUB_CONFIG.token}` },
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
