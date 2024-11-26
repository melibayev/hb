import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { useCalculateCart } from '../context/CalculateCartContext'
import { TbTruckDelivery } from "react-icons/tb";
import styles from '../../sass/cards/CartCard.module.scss'

const CartProduct = ({id, desc, img, piece, price, size}) => {
    const [ quantity, setQuantity ] = useState(piece)
    const { calculateCartTotal } = useCalculateCart()
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    useEffect(() => {
        const currentItem = cart.find(item => item.id === id);
        if (currentItem) {
          setQuantity(currentItem.piece);
        }
      }, [id]);
    const handleIncrement = () => {
        if (quantity < 10) {
          const updatedQuantity = quantity + 1;
          setQuantity(updatedQuantity);      
          const updatedCart = cart.map(item => {
            if (item.id === id) {
              return { ...item, piece: updatedQuantity }; 
            }
            return item;
          });
          localStorage.setItem("cart", JSON.stringify(updatedCart));
          calculateCartTotal()
        }
      };
    const handleDecrement = () => {
    if (quantity > 1) {
        const updatedQuantity = quantity - 1;
        setQuantity(updatedQuantity);
        const updatedCart = cart.map(item => {
        if (item.id === id) {
            return { ...item, piece: updatedQuantity }; 
        }
        return item;
        });
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        calculateCartTotal()
    } else {
        const updatedCart = cart.filter(item => item.id !== id);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        calculateCartTotal()
    }
    };
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