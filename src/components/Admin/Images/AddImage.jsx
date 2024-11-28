import React, { useContext, useState } from "react";
import GlobalContext from "../../context/GlobalContext";
import styles from "../../../sass/pages/Admin.module.scss";
import axios from "axios";
import { InboxOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
const { Dragger } = Upload;

const AddImage = () => {
  const GITHUB_USERNAME = process.env.REACT_APP_GITHUB_USERNAME;
  const REPO_NAME = process.env.REACT_APP_REPO_NAME;
  const BRANCH = process.env.REACT_APP_BRANCH;
  const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN;

  const { setUploadedImages } = useContext(GlobalContext);
  const [uploadStatus, setUploadStatus] = useState("");

  const uploadImageToGitHub = async (file) => {
    const fileName = file.name;
    const reader = new FileReader();

    return new Promise((resolve, reject) => {
      reader.onload = async () => {
        try {
          const base64Content = reader.result.split(",")[1]; // Extract base64 data
          const response = await axios.put(
            `https://api.github.com/repos/${GITHUB_USERNAME}/${REPO_NAME}/contents/home_images/${fileName}`,
            {
              message: `Add ${fileName}`,
              content: base64Content,
              branch: BRANCH,
            },
            {
              headers: {
                Authorization: `token ${ACCESS_TOKEN}`,
              },
            }
          );

          // Update state with the uploaded image details
          setUploadedImages((prev) => [
            ...prev,
            { name: fileName, url: response.data.content.download_url },
          ]);

          resolve(response.data.content.download_url); // Return download URL
        } catch (error) {
          reject(error);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const customDraggerRequest = async ({ file, onSuccess, onError }) => {
    try {
      await uploadImageToGitHub(file);
      message.success(`${file.name} uploaded successfully.`);
      onSuccess("ok");
    } catch (error) {
      message.error(`${file.name} upload failed.`);
      console.error(error);
      onError(error);
    }
  };

  const draggerProps = {
    name: "file",
    multiple: true,
    customRequest: customDraggerRequest,
    onChange(info) {
      const { status, name } = info.file;
      if (status === "uploading") {
        setUploadStatus(`Uploading ${name}...`);
      } else if (status === "done") {
        setUploadStatus(`${name} uploaded successfully!`);
      } else if (status === "error") {
        setUploadStatus(`Failed to upload ${name}.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };

  return (
    <div className={styles["main-content"]}>
      <h2>Upload Images</h2>
      <Dragger {...draggerProps} className={styles["dragger"]}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">Click or drag files to this area to upload</p>
        <p className="ant-upload-hint">
          Supports bulk upload. Files will be uploaded directly to GitHub.
        </p>
      </Dragger>
      <p>{uploadStatus}</p>
    </div>
  );
};

export default AddImage;
