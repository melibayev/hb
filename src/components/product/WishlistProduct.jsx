import React from 'react'
import Slider from 'react-slick'
import { NavLink } from 'react-router-dom'
import { wishlistsettings } from '../../sliderSettings/wishlistSlider'

// styles and icons
import { FaBagShopping } from "react-icons/fa6";
import styles from '../../sass/cards/WishlistCard.module.scss'

const WishlistProduct = ({ id, desc, imgs, price }) => {
  return (
    <>
        <div className={styles.card}>
            <NavLink to={`/product/${id}`}>
                <div className={styles['card-img']}>
                    <Slider {...wishlistsettings}>
                        {imgs.map((img, index) => (
                            <div key={index}>
                            <img src={img} alt="" />
                            </div>
                        ))}
                    </Slider>
                </div>
            </NavLink>
            <div className={styles['card-desc']}>
                <div className={styles['card-desc-info']}>
                    <p>{desc}</p>
                    <span>{price}</span>
                </div>
                <div className={styles['card-desc-buy']}>
                    <button>
                        <div>
                            <FaBagShopping />
                            <p>shop</p>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    </>
  )  
}

export default WishlistProduct