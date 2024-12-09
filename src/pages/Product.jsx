import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Slider from 'react-slick';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { useSizeWindow } from '../components/context/SizeWindowContext';
import { useCart } from '../components/context/CartContext';
import { useLike } from '../components/context/LikeContext';
import { useRemoveLike } from '../components/context/RemoveLikeContext';
import { productSettings } from '../sliderSettings/productSlider';

//imgs and icons
import { GoHeart, GoHeartFill } from "react-icons/go";

import { MdKeyboardArrowRight } from "react-icons/md";



// styles
import styles from '../sass/pages/Product.module.scss'
import SizeSelection from '../components/sizeSelection/SizeSelection';
import AddedToCart from '../components/notifications/AddedToCart';
import AddedToLike from '../components/notifications/AddedToLike';
import RemovedFromLike from '../components/notifications/RemovedFromLike';
import { useData } from '../components/context/DataContext';



const Product = () => {
    const { id } = useParams()
    const { isOpened, setIsOpened } = useSizeWindow(); 
    const size = localStorage.getItem(`selectedSize-${id}`) || '';
    const { addToCart, setAddToCart } = useCart()
    const { addToLike, setAddToLike } = useLike()
    const { removeAddToLike, setRemoveAddToLike } = useRemoveLike()
    const [ liked, setLiked ] = useState(false)
    const { products } = useData()
    const product = products?.find((item) => item.id.toString() === id.toString()) || [];

    

    useEffect(() => {
        isOpened ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto'
        return () => {
          document.body.style.overflow = 'auto';    
        };
      }, [isOpened]);
    
    useEffect(() => {
        let likes = JSON.parse(localStorage.getItem('likes')) || [];
        const isAlreadyLiked = likes.some((item) => item.id === product.id);
        setLiked(isAlreadyLiked)
    },[liked])
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
            if (product.category !== 'shoes'){
                const cartItem = {
                    id: product.id,
                    desc: product.desc,
                    price: product.price,
                    about: product.about,
                    size: size,
                    gender: product.gender,
                    category: product.category,
                    img: product.imgs[product.imgs.length - 1],
                    piece: 1  
                };
                cart.push(cartItem);
                localStorage.setItem('cart', JSON.stringify(cart));
                setAddToCart(true);
            } else {
                const cartItem = {
                    id: product.id,
                    desc: product.desc,
                    price: product.price,
                    about: product.about,
                    size: size,
                    gender: product.gender,
                    category: product.category,
                    img: product.imgs[0],
                    piece: 1  
                };
                cart.push(cartItem);
                localStorage.setItem('cart', JSON.stringify(cart));
                setAddToCart(true);
            }
    
        }
    };
    
    const handleAddToLike = () => {
        let likes = JSON.parse(localStorage.getItem('likes')) || [];
        const isAlreadyLiked = likes.some((item) => item.id === product.id);
        if (isAlreadyLiked) {
            const removedProduct = likes.find((item) => item.id === product.id);
            localStorage.setItem('removedLike', removedProduct.desc);
            likes = likes.filter((item) => item.id !== product.id);
            setAddToLike(false)
            setLiked(false)
            setRemoveAddToLike(true)
        } else {
            const likedItem = {
                id: product.id,
                desc: product.desc,
                price: product.price,
                about: product.about,
                size: size,
                img: product.imgs[product.imgs.length - 1],
                imgs: product.imgs 
            };
    
            likes.push(likedItem);
            setAddToLike(true)
            setLiked(true)
            setRemoveAddToLike(false)
        }
    
        localStorage.setItem('likes', JSON.stringify(likes));
    };
    
    if (!products) {
        return <div>loading...</div>
    }
    
  return (
    <>
    <SizeSelection />
    <AddedToCart />
    <AddedToLike />
    <RemovedFromLike />
    <div className={`${isOpened || addToCart || addToLike || removeAddToLike ? styles['wrapper'] : ''}`} onClick={ () => setIsOpened(false)}></div>
    <section id={styles.product}>  
        <div className={styles['product-image']}>
            <PhotoProvider>
                {product.imgs.map((el, index) => (
                    <PhotoView key={index} src={el}>
                        <img src={el} alt="product image" />
                    </PhotoView>
                ))}
            </PhotoProvider>
        </div>
        <div className={styles['product-image-mobile']}>
            <PhotoProvider>
                <Slider {...productSettings}>
                    {product.imgs.map(el => (
                        <div>
                            <PhotoView src={el}>
                                <img src={el} alt="product image" />
                            </PhotoView>
                        </div>
                    ))} 
                </Slider>
            </PhotoProvider>
        </div>
        <div className={styles["product-info"]}>
            <div className={styles["product-info-container"]}>
                <div className={styles['product-info-title']}>
                    <h4>{product.desc}</h4>
                    {liked ? 
                        <div onClick={handleAddToLike}>{<GoHeartFill />}</div> :
                        <div onClick={handleAddToLike}>{<GoHeart />}</div>
                    }
                </div>
                <p>{product.price}</p>

                <div className={styles["product-info-size"]} onClick={ () => setIsOpened(true)}>
                    <p>Sizes</p>
                    <div>{size} {<MdKeyboardArrowRight />}</div>
                </div>
                {!localStorage.getItem(`selectedSize-${id}`) ? 
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