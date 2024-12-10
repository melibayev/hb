import React, { useContext, useState } from "react";
import GlobalContext from '../../context/GlobalContext';
import styles from '../../../sass/pages/Admin.module.scss';
import { Button, Input } from "antd";

const AddVideo = () => {
  const { videos, setVideos, saveData } = useContext(GlobalContext);
  const [newVideo, setNewVideo] = useState({ id: "", video: "" }); // For adding a new video

  const handleVideoChange = (e) => {
    const { name, value } = e.target;
    setNewVideo((prev) => ({ ...prev, [name]: value }));
  };

  // Add new video
  const addVideo = () => {
    if (newVideo.id && newVideo.video) {
      const updatedVideos = [...videos, newVideo];
      setVideos(updatedVideos);
      saveData({ videos: updatedVideos }); // Save to GitHub
      setNewVideo({ id: "", video: "" }); // Reset the form
    } else {
      alert("Please fill in all fields before adding a video.");
    }
  };

  return (
    <div className={styles['main-content']}>
      <h2>Add Video</h2>
      <div className={styles['flex-inputs']}>
        <Input
        name="id"
        type="text"
        placeholder="ID of VIDEO"
        value={newVideo.id}
        allowClear
        onChange={handleVideoChange}
        />
        <Input
        name="video"
        type="text"
        placeholder="URL of VIDEO"
        value={newVideo.video}
        allowClear
        onChange={handleVideoChange}
        />
      </div>
      <div className={styles['center-button']}>
        <Button type="primary" onClick={addVideo}>Add Video</Button>
      </div>
    </div>
  );
};

export default AddVideo;
