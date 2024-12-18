import React, { useEffect, useRef } from "react";
import { useData } from "../components/context/DataContext";

import styles from '../sass/pages/JacketsCoats.module.scss';
import WishlistProduct from "../components/product/WishlistProduct";

const JacketsCoats = () => {
  const { products } = useData()
  const coats = products?.filter(product => product.category.includes('coats')) || [];
  const { videos } = useData()
  const video = videos?.find(video => video.id === "d97fa351-ed8a-4e46-b1a4-d00f67b2a03e")
  if (!videos) {
    return <div>loading...</div>
  }
  return (
    <>
      <section id={styles['clothing-banner']}>
        <video muted autoPlay loop playsInline>
          <source src={video.video} type='video/mp4'/>
        </video>
      </section>

      <section id={styles.products}>
        <div className="container">
          <div className={styles['products-category']}>
            <div className={styles['products-category-item']}>
                <div className={styles['products-category-item-img']}>
                  <img src="https://raw.githubusercontent.com/melibayev/data/main/home_images/hbna50529745_001_100.jpg" alt="" />
                </div>
                <p>Formal Coats</p>              
            </div>
            <div className={styles['products-category-item']}>
                <div className={styles['products-category-item-img']}>
                  <img src="https://raw.githubusercontent.com/melibayev/data/main/home_images/hbna50528439_404_100.jpg" alt="" />
                </div>
                <p>Casual Coats</p>              
            </div>
            <div className={styles['products-category-item']}>
                <div className={styles['products-category-item-img']}>
                  <img src="https://raw.githubusercontent.com/melibayev/data/main/home_images/hbna50525237_001_100.jpg" alt="" />
                </div>
                <p>Parkas</p>              
            </div>
          </div>
          <div className={styles['products-title']}>
            Men's Coats
          </div>
          <div className={styles['products-list']}>
            {coats.map(pr => (
                <WishlistProduct key={pr.id} {...pr} />
            ))}
          </div>
        </div>

      </section>
    </>



  )
};

export default JacketsCoats;
