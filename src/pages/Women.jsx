import React from 'react'
import styles from '../sass/pages/Women.module.scss'
import { useData } from '../components/context/DataContext'
const Women = () => {
  const { videos } = useData()
  const video = videos?.find(video => video.id == "1")
  if (!video) {
    return <div>loading...</div>
  }
  return (
    <>
        <section id={styles['home-banner']}>
          <video muted autoPlay loop playsInline>
            <source src={video.video} type='video/mp4'/>
          </video>
          <div className="container">
          </div>
        </section>
    </>
  )
}

export default Women