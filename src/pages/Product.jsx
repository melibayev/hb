import React from 'react'
import { useParams } from 'react-router-dom';
import { homeProducts } from '../data/products';

//imgs and icons
import { GoHeart } from "react-icons/go";
import { MdKeyboardArrowRight } from "react-icons/md";



// styles
import styles from '../sass/pages/Product.module.scss'


const Product = () => {
    const { id } = useParams()
    const product = homeProducts.find((item) => item.id === parseInt(id))
    console.log(product);

  return (
    <section id={styles.product}>
        <div className={styles['product-image']}>
            {product.imgs.map(el => (
                <img src={el} alt="" />
            ))}
        </div>
        <div className={styles["product-info"]}>
            <div className={styles["product-info-container"]}>
                <div className={styles['product-info-title']}>
                    <h4>{product.desc}</h4>
                    <div>{<GoHeart />}</div>
                </div>
                <p>{product.price}</p>

                <div className={styles["product-info-size"]}>
                    <p>Sizes</p>
                    <p>L {<MdKeyboardArrowRight />}</p>
                </div>
                <button className={styles['size-btn']}>Select your size</button>
                <p className={styles['product-info-description']}>{product.about}</p>
            </div>
        </div>
    </section>
  )
}

export default Product