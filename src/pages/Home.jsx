import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { settings } from '../sliderSettings/homeSlider.js';
import { banner } from '../data/index.js'
import { homeProducts } from '../data/products.js';

// icons and imgs
import { FaArrowRightLong } from "react-icons/fa6";
import LUGGAGE_IMG from '../assests/home_images/luggage.webp'
import HOODIE_VIDEO from '../assests/videos/demo/hoodie.mp4'

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

  useEffect(() => {
    const videos = document.getElementsByTagName("video");
    for (let video of videos) {
      video.setAttribute("playsinline", "");
      video.setAttribute("muted", "");
      video.play();
    }
  }, []);
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
          <div className="container-slider">
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

      <section id={styles.categories}>
          <div className="container">
            <div className={styles.categories}>
              <div className={styles['first-category']}>
                <img src={LUGGAGE_IMG} alt="category image" />
                <h1>Timeless Travel bags</h1>
                <button><p>Shop now </p><FaArrowRightLong /></button>  
              </div>
              <div className={styles['second-category']}>
                <video muted autoPlay loop>
                  <source src={HOODIE_VIDEO} type='video/mp4'/>
                </video>
                <h1>One hoodie, many shades</h1>
                <button><p>Shop now </p><FaArrowRightLong /></button>    
              </div>
            </div>
          </div>
      </section>
    </>
  )
}

export default Home