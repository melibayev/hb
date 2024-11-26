import React from 'react'
import { useCart } from '../context/CartContext'
import { NavLink } from 'react-router-dom'


// images and icons
import { FaXmark } from 'react-icons/fa6'

// styles
import styles from '../../sass/common/AddedToCart.module.scss'

const AddedToCart = () => {
    const productInfo = (JSON.parse(localStorage.getItem('cart')) || []).slice(-1)[0]
    const { addToCart, setAddToCart } = useCart()
  return (
    <>
        <div className={`${styles['added-to-cart']} ${addToCart ? styles['active'] : ''}`}>
            <div className="container">
                <div className={styles['added-to-cart-title']}>
                    <div>Added to Cart</div>
                    <div onClick={() => setAddToCart(false)}>{<FaXmark />}</div>
                </div>
                <div className={styles['added-to-cart-info']}>
                    <div className={styles['added-to-cart-info-img']}>
                        <img src={productInfo?.img} alt="product image" />
                    </div>
                    <div className={styles['added-to-cart-info-description']}>
                        <p>{productInfo?.desc}</p>
                        <p>Size: {productInfo?.size}</p>
                        <p>Price: {productInfo?.price}</p>
                    </div>
                </div>
                <div className={styles['cart-btns']}>
                    <NavLink to={`/cart`}><button className={styles.black} onClick={() => setAddToCart(false)}>View my Cart</button></NavLink>
                    <button className={styles.white} onClick={() => setAddToCart(false)}>Continue Shopping</button>
                </div>
            </div>
        </div>
        <div className={`${styles['added-to-cart-mobile']} ${addToCart ? styles['active-mobile'] : ''}`}>
            <div className="container">
                <div className={styles['added-to-cart-title']}>
                    <div>Added to Cart</div>
                    <div onClick={() => setAddToCart(false)}>{<FaXmark />}</div>
                </div>
                <div className={styles['added-to-cart-info']}>
                    <div className={styles['added-to-cart-info-img']}>
                        <img src={productInfo?.img} alt="product image" />
                    </div>
                    <div className={styles['added-to-cart-info-description']}>
                        <p>{productInfo?.desc}</p>
                        <p>Size: {productInfo?.size}</p>
                        <p>Price: {productInfo?.price}</p>
                    </div>
                </div>
                <div className={styles['cart-btns']}>
                    <NavLink to={'/cart'}><button className={styles.black} onClick={() => setAddToCart(false)}>View my Cart</button></NavLink>
                    <button className={styles.white} onClick={() => setAddToCart(false)}>Continue Shopping</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default AddedToCart