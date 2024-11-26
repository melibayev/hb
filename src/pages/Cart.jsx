import React from 'react'
import { useEffect } from 'react'
import CartProduct from '../components/product/CartProduct'

import { IoIosArrowDown } from "react-icons/io";
import styles from '../sass/pages/Cart.module.scss'
import PAYPAL from '../assests/common/PayPal.svg.png'
import { useCalculateCart } from '../components/context/CalculateCartContext';


const Cart = () => {
    const products = JSON.parse(localStorage.getItem('cart')) || []    
    const { cartTotal, calculateCartTotal } = useCalculateCart()
    useEffect(() => (
        calculateCartTotal()
    ), [products])
  return (
    <section id={styles.cart}>
        <div className="container">
            {products.length >= 1 ? 
                <>
                    <div className={styles['cart-title']}>
                        Shopping Bag
                    </div>
                    <div className={styles.cart}>
                        <div className={styles['cart-products']}>
                            {products.map(pr => (
                                <CartProduct {...pr}/>
                            ))}
                        </div>
                        <div className={styles['cart-receipt']}>
                            <div className={styles['cart-receipt-title']}>
                                Order Summary
                            </div>
                            <div className={styles['cart-receipt-info']}>
                                <div>
                                    <span>Subtotal</span>
                                    <span>${cartTotal}</span>
                                </div>
                                <div>
                                    <span>Standart Delivery</span>
                                    <span>Free</span>
                                </div>
                                <div>
                                    <span>Estimated total</span>
                                    <span>-</span>
                                </div>
                                <p>Apply Promo Code <IoIosArrowDown /></p>
                                <div className={styles['cart-receipt-info-qualify']}>
                                    <p>Your Qualify For complimentary shipping</p>
                                    <div></div>
                                </div>
                                <button>Proceed To Checkout</button>
                                <div className={styles['cart-receipt-info-hr']}>
                                    <div>Or</div>
                                    <span></span>
                                </div>
                                <button className={styles.paypal}><img src={PAYPAL} alt="" /></button>
                            </div>
                        </div>
                    </div>
                </>
            : <div className={styles['cart-message']}>
                    <h4>Your Shopping Bag is Empty</h4>
                    <p>Sign In to your account to see your previously added items</p>
                    <div>
                        <button>Sign In</button>
                        <button className={styles['non-active']}>Continue Shopping</button>
                    </div>
                </div> 
            }
        </div>
    </section>    
  )
}

export default Cart