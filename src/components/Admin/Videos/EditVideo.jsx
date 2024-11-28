import React, { useContext, useState } from "react";
import GlobalContext from '../../context/GlobalContext';
import styles from '../../../sass/pages/Admin.module.scss';
import { CButton, CModal, CModalHeader, CModalTitle, CModalBody, CModalFooter } from '@coreui/react';
import { Input, Pagination } from "antd";

const EditVideo = () => {
  const { videos, setVideos, saveData } = useContext(GlobalContext);
  const [editingVideo, setEditingVideo] = useState(null); 
  const [newVideo, setNewVideo] = useState({ id: "", video: "" }); 
  const [modalVisible, setModalVisible] = useState(false); 
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const handleVideoChange = (e) => {
    const { name, value } = e.target;
    setNewVideo((prev) => ({ ...prev, [name]: value }));
  };

  const enableEditVideo = (video) => {
    setEditingVideo(video);
    setNewVideo({ id: video.id, video: video.video });
    setModalVisible(true);
  };

  const saveEditedVideo = () => {
    if (newVideo.id && newVideo.video) {
      const updatedVideos = videos.map((video) =>
        video.id === newVideo.id ? { ...video, ...newVideo } : video
      );
      setVideos(updatedVideos);
      saveData({ videos: updatedVideos });
      setModalVisible(false);
      alert("Video successfully updated!");
    } else {
      alert("Please fill in all fields before saving.");
    }
  };

  const deleteVideo = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this video?");
    if (confirmDelete) {
      const updatedVideos = videos.filter((video) => video.id !== id);
      setVideos(updatedVideos);
      saveData({ videos: updatedVideos });
      alert("Video successfully deleted!");
    } else {
      alert("Video deletion canceled.");
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentVideos = videos.slice(startIndex, endIndex);

  return (
    <div className={styles['main-content']}>
      <h2>Video List</h2>
      <div className={styles['grid-video-items']}>
        {currentVideos.map((video) => (
          <div key={video.id} style={{ marginBottom: "20px" }}>
            <p>ID: {video.id}</p>
            <video controls>
              <source src={video.video} type="video/mp4" />
            </video>
            <p>URL: {video.video}</p>
            <CButton color="primary" onClick={() => enableEditVideo(video)}>
              Edit
            </CButton>
            <CButton
              color="danger"
              onClick={() => deleteVideo(video.id)}
              style={{ marginLeft: '10px', color: "white" }}
            >
              Delete
            </CButton>
          </div>
        ))}
      </div>

      <div className={styles['center-item']}>
        <Pagination
          current={currentPage}
          pageSize={itemsPerPage}
          total={videos.length}
          onChange={handlePageChange}
          style={{ marginTop: '20px', textAlign: 'center' }}
        />
      </div>

      <CModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        aria-labelledby="editVideoModalLabel"
      >
        <CModalHeader>
          <CModalTitle id="editVideoModalLabel">Edit Video</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <div className={styles['block-inputs']}>
            <Input
              type="number"
              name="id"
              placeholder="ID"
              value={newVideo.id}
              onChange={handleVideoChange}
            />
            <Input
              type="text"
              name="video"
              placeholder="Video URL"
              value={newVideo.video}
              onChange={handleVideoChange}
            />
          </div>
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setModalVisible(false)}>
            Close
          </CButton>
          <CButton color="primary" onClick={saveEditedVideo}>
            Save Changes
          </CButton>
        </CModalFooter>
      </CModal>
    </div>
  );
};

export default EditVideo;
