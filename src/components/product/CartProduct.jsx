import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

import { TbTruckDelivery } from "react-icons/tb";
import styles from '../../sass/cards/CartCard.module.scss'

const CartProduct = ({id, desc, img, piece, price, size}) => {
    const [ quantity, setQuantity ] = useState(piece)
    const handleIncrement = () => {
        quantity >= 10 ? setQuantity(10) : setQuantity(quantity + 1);  
    }
    const handleDecrement = () => {
        quantity <= 1 ? setQuantity(1) : setQuantity(quantity - 1);  

    }    
  return (
    <>
        <div className={styles.card}>
            <div className={styles['card-img']}>
                <NavLink to={`/product/${id}`}><img src={img} alt="img" /></NavLink>
            </div>
            <div className={styles['card-info']}>
                <h4>{desc}</h4>
                <p>Size: {size}</p>
                <p>articul number</p>
                <div className={styles['card-info-quantity']}>
                    <button onClick={handleDecrement}>-</button>
                    <p>QTY: {quantity}</p>
                    <button onClick={handleIncrement}>+</button>
                </div>
                <p className={styles.delivery}><TbTruckDelivery /> Standard Delivery
                Receive by Friday, November 29</p>
                <span>{price}</span>
            </div>
        </div>
    </>
  )
}

export default CartProduct