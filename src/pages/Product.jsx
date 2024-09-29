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
import AddedToCart from '../components/notifications/AddedToCart';
import { useCart } from '../components/context/CartContext';


const Product = () => {
    const { id } = useParams()
    const product = homeProducts.find((item) => item.id === parseInt(id))
    const { isOpened, setIsOpened } = useSizeWindow(); 
    const size = localStorage.getItem('selectedSize') || '';
    const { addToCart, setAddToCart } = useCart()
    useEffect(() => {
        isOpened ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto'
        return () => {
          document.body.style.overflow = 'auto';    
        };
      }, [isOpened]);

      const handleAddToCart = () => {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];        
        const existingProductIndex = cart.findIndex(
            (item) => item.id === product.id && item.size === size
        );
    
        if (existingProductIndex !== -1) {
            if (cart[existingProductIndex].piece >= 2) {
                alert("You can't add more than 2 of the same product to the cart.");
            } else {
                cart[existingProductIndex].piece += 1;
                localStorage.setItem('cart', JSON.stringify(cart));
                setAddToCart(true);
            }
        } else {
            const cartItem = {
                id: product.id,
                desc: product.desc,
                price: product.price,
                about: product.about,
                size: size,
                img: product.imgs[product.imgs.length - 1],
                piece: 1  
            };
    
            cart.push(cartItem);
            localStorage.setItem('cart', JSON.stringify(cart));
            setAddToCart(true);
        }
    };
    
  return (
    <>
    <SizeSelection />
    <AddedToCart />
    <div className={`${isOpened || addToCart ? styles['wrapper'] : ''}`} onClick={ () => setIsOpened(false)}></div>
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
                {!localStorage.getItem('selectedSize') ? 
                <button className={styles['size-btn']} onClick={ () => setIsOpened(true)}>Select your size</button> : 
                <button className={styles['size-btn']} onClick={ handleAddToCart }>Place in cart</button> 
                }
                <p className={styles['product-info-description']}>{product.about}</p>
            </div>
        </div>
    </section>
    </>
  )
}

export default Product