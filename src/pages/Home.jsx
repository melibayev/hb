import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { settings } from '../sliderSettings/homeSlider.js';
import { banner } from '../data/index.js'
import { homeProducts } from '../data/products.js';

// icons and imgs
import { FaArrowRightLong } from "react-icons/fa6";
// import VIDEO1 from '../assests/videos/1.mp4';
// import VIDEO2 from '../assests/videos/2.mp4';
// import VIDEO3 from '../assests/videos/3.mp4';

// styles
import styles from '../sass/pages/Home.module.scss'
import ProductCard from '../components/product/ProductCard.jsx';


const Home = () => {
  const [ randomVideo, setRandomVideo ] = useState('')
  const getRandomVideo = () => {
    const randomIndex = Math.floor(Math.random() * banner.length)
    setRandomVideo(banner[randomIndex].video)
  }
  useState(() => {
    getRandomVideo()
  }, [randomVideo])
  
  return (
    <>
      <section id={styles['home-banner']}>
        <video muted autoPlay loop>
          <source src={randomVideo} type='video/mp4'/>
        </video>
        <div className="container">
          <div className={styles['home-banner']}>
            <h1>The Choice is yours</h1>
            <div className={styles['home-banner-btns']}>
              <button>Shop the collection <FaArrowRightLong /></button>
              <button>Discover Hugo <FaArrowRightLong /></button>
            </div>
          </div>
        </div>
      </section>

      <section id={styles['products']}>
          <div className="container">
              <div className={styles['products-title']}>
                Hand-picked for you
              </div>
              <div className={styles.products}>
                <Slider {...settings}>
                  { homeProducts.map(el => (
                    <ProductCard key={el.id} {...el} />
                  ))}
                </Slider>
              </div>
          </div>
      </section>
    </>
  )
}

export default Home