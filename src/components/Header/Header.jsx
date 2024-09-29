import React, { useEffect } from 'react'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useLike } from '../context/LikeContext';
import { useRemoveLike } from '../context/RemoveLikeContext';


// icons and images
import { IoIosSearch } from "react-icons/io";
import { GoHeart } from "react-icons/go";
import { IoBagHandleOutline } from "react-icons/io5";
import LOGO from '../../assests/header/logo.png'

// styles
import styles from '../../sass/layout/Header.module.scss'


const Header = () => {
  const [ isScrolled, setIsScrolled ] = useState(false)
  const { addToCart } = useCart()
  const { addToLike } = useLike()
  const { removeAddToLike } = useRemoveLike()
  const cartSize = JSON.parse(localStorage.getItem('cart'))?.length || 0
  const likeSize = JSON.parse(localStorage.getItem('likes'))?.length || 0
  const handleScroll = () => {
    (window.scrollY > 50 || window.pageYOffset > 50) ? setIsScrolled(true) : setIsScrolled(false)
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll); 
  }, [])

  return (
    <header>
      <nav className={isScrolled || addToCart || addToLike || removeAddToLike ? styles['scrolled'] : null}>
          <div className={`${styles['navbar-top']}`}>
            <p>Free Standard Shipping on orders of 100 € or more</p>
          </div>
        <div className="container">
          <div className={styles.navbar}>
            <div className={styles['navbar-logo']}>
                <NavLink to={'/'}><img src={LOGO} alt="logo" /></NavLink>
            </div>
            <div className={styles['navbar-gender']}>
                <NavLink to={'/'}>Men</NavLink>
                <NavLink to={'/'}>Women</NavLink>
            </div>
            <div className={styles['navbar-items']}>
                <p><IoIosSearch /></p>
                <p className={styles['navbar-items-like']}><GoHeart /> <div className={`${styles['added']} ${likeSize <= 0 ? styles['not-active'] : ''}`}>{likeSize}</div></p>
                <p><IoBagHandleOutline /> <div className={`${styles['added']} ${cartSize <= 0 ? styles['not-active'] : ''}`}>{cartSize}</div></p>
            </div>
          </div>
          <div className={styles['navbar-links']}>
            <NavLink to={'/'}>new in</NavLink>
            <NavLink to={'/'}>clothing</NavLink>
            <NavLink to={'/'}>shoes</NavLink>
            <NavLink to={'/'}>accesories</NavLink>
            <NavLink to={'/'}>sports</NavLink>
            <NavLink to={'/'}>the suit</NavLink>
            <NavLink to={'/'}>our brands</NavLink>
            <NavLink to={'/'}>highlights</NavLink>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header