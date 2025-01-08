import React, { useEffect } from 'react'
import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
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
  const location = useLocation();
  const [isBlackBg, setIsBlackBg] = useState(false);
  const blackBgPaths = ['/wishlist', '/cart', '/male/shoes'];
  useEffect(() => {
    setIsBlackBg(blackBgPaths.includes(location.pathname));
  }, [location.pathname]);
  
  const handleScroll = () => {
    (window.scrollY > 50 || window.pageYOffset > 50) ? setIsScrolled(true) : setIsScrolled(false)
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll); 
  }, [])
    const [activeLink, setActiveLink] = useState(window.location.pathname);

    useEffect(() => {
        const handlePopState = () => setActiveLink(window.location.pathname);

        window.addEventListener('popstate', handlePopState);
        return () => window.removeEventListener('popstate', handlePopState);
    }, []);

    const handleSetActive = (path) => {
        setActiveLink(path);
    };
  return (
    <header>
      <nav
       className={`${isScrolled || addToCart || addToLike || removeAddToLike || isBlackBg ? styles['scrolled'] : ''}`}>

          <div className={`${styles['navbar-top']}`}>
            <p>Free Standard Shipping on orders of 100 € or more</p>
          </div>
        <div className="container">
          <div className={styles.navbar}>
            <div className={styles['navbar-logo']}>
                <NavLink to={'/'}><img src={LOGO} alt="logo" /></NavLink>
            </div>
            <div className={styles['navbar-gender']}>
              <NavLink
                  to="/"
                  className={activeLink === '/' ? styles.active : ''}
                  onClick={() => handleSetActive('/')}
              >
                  Men
              </NavLink>
              <NavLink
                  to="/women"
                  className={activeLink === '/women' ? styles.active : ''}
                  onClick={() => handleSetActive('/women')}
              >
                  Women
              </NavLink>
            </div>
            <div className={styles['navbar-items']}>
                <p><IoIosSearch /></p>
                <NavLink to={`/wishlist`}><p className={styles['navbar-items-like']}><GoHeart /> <div className={`${styles['added']} ${likeSize <= 0 ? styles['not-active'] : ''}`}>{likeSize}</div></p></NavLink>
                <NavLink to={`/cart`}><p><IoBagHandleOutline /> <div className={`${styles['added']} ${cartSize <= 0 ? styles['not-active'] : ''}`}>{cartSize}</div></p></NavLink>
            </div>
          </div>
          <div className={styles['navbar-links']}>
            <NavLink to={'/'}>new in</NavLink>
            <NavLink to={'/'}>clothing</NavLink>
            <NavLink to={'/male/shoes'}>shoes</NavLink>
            <NavLink to={'/'}>accesories</NavLink>
            <NavLink to={'/'}>sports</NavLink>
            <NavLink to={'/'}>the suit</NavLink>
            <NavLink to={'/male/jackets-coats'}>Jackets & Coats</NavLink>
            <NavLink to={'/'}>our brands</NavLink>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header