import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { homeProducts } from '../data/products';
import { useSizeWindow } from '../components/context/SizeWindowContext';

//imgs and icons
import { GoHeart } from "react-icons/go";
import { MdKeyboardArrowRight } from "react-icons/md";



// styles
import styles from '../sass/pages/Product.module.scss'
import SizeSelection from '../components/sizeSelection/SizeSelection';


const Product = () => {
    const { id } = useParams()
    const product = homeProducts.find((item) => item.id === parseInt(id))
    const { isOpened, setIsOpened } = useSizeWindow(); 
    const size = localStorage.getItem('selectedSize') || '';
    useEffect(() => {
        if (isOpened) {
          document.body.style.overflow = 'hidden';  
        } else {
          document.body.style.overflow = 'auto';    
        }
        return () => {
          document.body.style.overflow = 'auto';    
        };
      }, [isOpened]);

  return (
    <>
    <SizeSelection />
    <div className={`${isOpened ? styles['wrapper'] : ''}`}></div>
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

                <div className={styles["product-info-size"]} onClick={ () => setIsOpened(true)}>
                    <p>Sizes</p>
                    <div>{size} {<MdKeyboardArrowRight />}</div>
                </div>
                <button className={styles['size-btn']} onClick={ () => setIsOpened(true)}>
                   {localStorage.getItem('selectedSize') ? 'Place in cart' : 'Select your size'} 
                </button>
                <p className={styles['product-info-description']}>{product.about}</p>
            </div>
        </div>
    </section>
    </>
  )
}

export default Product