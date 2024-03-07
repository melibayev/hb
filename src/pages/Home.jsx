import React from 'react'
import styles from '../sass/pages/Home.module.scss'
import VIDEO from '../assests/videos/1.mp4'

const Home = () => {
  return (
    <section id={styles['home-banner']}>
      <video muted autoPlay loop>
        <source src={VIDEO} type='video/mp4'/>
      </video>
      <div className="container">
        <div className={styles['home-banner']}></div>
      </div>
    </section>
  )
}

export default Home