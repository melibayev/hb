import React, { useContext, useState } from "react";
import GlobalContext from '../../context/GlobalContext';
import styles from '../../../sass/pages/Admin.module.scss';
import { CButton } from '@coreui/react';
import axios from 'axios';
import { Pagination } from "antd";

const EditImage = () => {
  const { uploadedImages, setUploadedImages } = useContext(GlobalContext);
  const GITHUB_USERNAME = process.env.REACT_APP_GITHUB_USERNAME;
  const REPO_NAME = process.env.REACT_APP_REPO_NAME;
  const BRANCH = process.env.REACT_APP_BRANCH;
  const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN;
  const IMAGE_URL = process.env.REACT_APP_IMAGE_URL;

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const deleteImageFromGitHub = async (fileName) => {
    if (!window.confirm(`Are you sure you want to delete the image: ${fileName}?`)) {
      return;
    }

    try {
      const imageToDelete = uploadedImages.find((img) => img.name === fileName);
      if (!imageToDelete) return;

      await axios.delete(
        `https://api.github.com/repos/${GITHUB_USERNAME}/${REPO_NAME}/contents/home_images/${fileName}`,
        {
          headers: {
            Authorization: `token ${ACCESS_TOKEN}`,
          },
          data: {
            message: `Delete ${fileName}`,
            sha: imageToDelete.sha,
            branch: BRANCH,
          },
        }
      );

      setUploadedImages((prev) => prev.filter((img) => img.name !== fileName));
      alert("Image successfully deleted!");
    } catch (error) {
      console.error("Failed to delete image:", error);
      alert("Failed to delete image. Please try again.");
    }
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentImages = uploadedImages.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className={styles['main-content']}>
      <h2>Manage Images</h2>
      <div className={styles['grid-items']}>
        {currentImages.map((image) => (
          <div key={image.name} style={{ marginBottom: '10px' }}>
            <div>
              <img src={`${IMAGE_URL + image.name}`} alt="" />
            </div>
            <div>{image.name}</div>
            <div className={styles['end-item']}>
              <CButton
                color="danger"
                onClick={() => deleteImageFromGitHub(image.name)}
                style={{ color: 'white' }}
              >
                Delete
              </CButton>
            </div>
          </div>
        ))}
      </div>
      <div className={styles['center-item']}>
        <Pagination
          current={currentPage}
          pageSize={itemsPerPage}
          total={uploadedImages.length}
          onChange={handlePageChange}
          style={{ marginTop: '20px', textAlign: 'center' }}
        />
      </div>
    </div>
  );
};

export default EditImage;
