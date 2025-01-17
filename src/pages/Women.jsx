import React, { useEffect, useState } from 'react'
import styles from '../sass/pages/Women.module.scss'
import { useData } from '../components/context/DataContext'
import { womenSliderSettings } from '../sliderSettings/womenSlider'
import Slider from 'react-slick'
const Women = () => {
  const { videos } = useData()
  const video = videos?.find(video => video.id == "1")
  const BLOCK_POSTER_VIDEO = videos?.find(video => video.id == "8ec5386f-9fff-46de-8f0a-5b27ef7321c4")
  const IMG1 = 'https://raw.githubusercontent.com/melibayev/data/refs/heads/main/home_images/HJ_DEEPTIME_01__BONES_LVCOM_2048x1152_DI3.avif'
  const IMG2 = 'https://raw.githubusercontent.com/melibayev/data/refs/heads/main/home_images/HJ_DEEPTIME_03_RUPTURE_LVCOM_2048x1152_DI3.avif'
  const IMG3 = 'https://raw.githubusercontent.com/melibayev/data/refs/heads/main/home_images/HJ_DEEPTIME_02_WAVE_LVCOM_2048x1152_DI3.avif'
  const BLOCK_POSTER_IMG = 'https://raw.githubusercontent.com/melibayev/data/refs/heads/main/home_images/HJ_DEEPTIME_STILL_COLLIER_LORASIA_LVCOM_2048x1152_DI3.avif'
  const BLOCK_POSTER_IMG2 = 'https://raw.githubusercontent.com/melibayev/data/refs/heads/main/home_images/HJ_DEEPTIME_WORN_VISUAL_06_GONDWANA_LVCOM_1600x2000_DII.jpg'
  const BLOCK_POSTER_IMG3 = 'https://raw.githubusercontent.com/melibayev/data/refs/heads/main/home_images/HJ_DEEPTIME_WORN_VISUAL_WAVE_LVCOM_1600x2000_DII.avif'
  const BLOCK_POSTER_IMG4 = 'https://raw.githubusercontent.com/melibayev/data/refs/heads/main/home_images/HJ_DEEPTIME_WORN_VISUAL_VOLCANO_01_LVCOM_1600x2000_DII.avif'
  const BLOCK_POSTER_IMG5 = 'https://raw.githubusercontent.com/melibayev/data/refs/heads/main/home_images/HJ_DEEPTIME_WORN_VISUAL_DRIFT_LVCOM_1600x2000_DII.avif'
  
  const [opacity, setOpacity] = useState(1); 

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newOpacity = Math.max(0, 1 - scrollY / 100);
      setOpacity(newOpacity);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (!video) {
    return <div>loading...</div>
  }
  return (
    <>
        <section id={styles['home-banner']}>
          <div className={styles['home-banner-gradient']}>
          </div>
          <video playsInline="" muted autoPlay loop src={video.video} tabindex="-1" aria-hidden="true"></video>
          <div className={styles['home-banner']}>
            <div className="container">
              <div className={styles['home-banner-title']}>
                <h4 style={{opacity: opacity}}>
                  Hugo Boss Deep Time
                  High Jewelry Collection
                </h4>
              </div>
            </div>
          </div>
          <div className="container">
          <div className={styles['home-banner-subtitle']}>
            <p>
              Illustrating the profound journey of the collection’s precious gemstones, spanning the birth of the planet to the creation of life, Deep Time comprises 170 masterful designs revealed in 16 themes, embodied by House Ambassador Ana de Armas. Weaving an audacious tale of metamorphosis, life, and terrestrial heritage, the pieces are unveiled in two acts: Geology and Life.
            </p>
          </div>
          </div>
        </section>

        <section id={styles['main-slider']}>
          <Slider {...womenSliderSettings}>
              <div className={styles['main-slider-imgs']}>
                  <img src={IMG1} alt="" />
              </div>
              <div className={styles['main-slider-imgs']}>
                  <img src={IMG2} alt="" />
              </div>
              <div className={styles['main-slider-imgs']}>
                  <img src={IMG3} alt="" />
              </div>
          </Slider>
        </section>

        <section id={styles['block-info']}>
          <div className={styles['block-info']}>
              <div className="container">
                <div className={styles['block-info-title']}>
                  <h4>Geology</h4>
                </div>
                <div className={styles['block-info-subtitle']}>
                  <p>Charting the planet’s extraordinary evolution, the first act, Geology, spans millennia in a voyage into the past. In an ode to the legacy of the gemstones at the heart of the creations, Hugo Boss’ High Jewelry savoir-faire combine with the mystery and splendor of the Earth’s origins</p>
                </div>
              </div>
          </div>
        </section>

        <section id={styles['block-poster']}>
          <div className={styles['block-poster']}>
            <img src={BLOCK_POSTER_IMG} alt="" />
            <div className={styles['block-poster-info']}>
              <p>Laurasia</p>
              <button>Explore</button>
            </div>
          </div>
        </section>

        <section id={styles['block-poster-grid']}>
          <div className={styles['block-poster-grid']}>
            <div className={styles['block-poster']}>
              <img src={BLOCK_POSTER_IMG2} alt="" />
              <div className={styles['block-poster-info']}>
                <p>Gondwana</p>
                <button>Explore</button>
              </div>
            </div>
            <div className={styles['block-poster']}>
              <img src={BLOCK_POSTER_IMG3} alt="" />
              <div className={styles['block-poster-info']}>
                <p>Wave</p>
                <button>Explore</button>
              </div>
            </div>
          </div>
        </section>

        <section id={styles['block-poster-video']}>
          <div className={styles['block-poster']}>
          <video playsInline="" muted autoPlay loop src={BLOCK_POSTER_VIDEO.video} tabindex="-1" aria-hidden="true"></video>
            <div className={styles['block-poster-info']}>
              <p>Rupture</p>
              <button>Explore</button>
            </div>
          </div>
        </section>

        <section id={styles['block-poster-grid']}>
          <div className={styles['block-poster-grid']}>
            <div className={styles['block-poster']}>
              <img src={BLOCK_POSTER_IMG4} alt="" />
              <div className={styles['block-poster-info']}>
                <p>Volcano</p>
                <button>Explore</button>
              </div>
            </div>
            <div className={styles['block-poster']}>
              <img src={BLOCK_POSTER_IMG5} alt="" />
              <div className={styles['block-poster-info']}>
                <p>Drift</p>
                <button>Explore</button>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default Women