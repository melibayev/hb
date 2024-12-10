import React, { useEffect, useRef } from "react";
import { useData } from "../components/context/DataContext";

import styles from '../sass/pages/JacketsCoats.module.scss';

const JacketsCoats = () => {
  const { videos } = useData()
  const video = videos?.find(video => video.id === "d97fa351-ed8a-4e46-b1a4-d00f67b2a03e")
  if (!videos) {
    return <div>loading...</div>
  }
  return (
    <section id={styles['clothing-banner']}>
      <video muted autoPlay loop playsInline>
        <source src={video.video} type='video/mp4'/>
      </video>
    </section>

  )
};

export default JacketsCoats;
