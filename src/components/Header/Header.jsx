import React from 'react'
import styles from '../../sass/layout/Header.module.scss'
import LOGO from '../../assests/header/logo.png'

const Header = () => {
  return (
    <header>
      <nav>
          <div className={styles['navbar-top']}>
            <p>Free Standard Shipping on orders of 100 € or more</p>
          </div>
        <div className="container">
          <div className={styles.navbar}>
            <div className={styles['navbar-logo']}>
                <img src={LOGO} alt="" />
            </div>
            <div className={styles['navbar-gender']}>
                <p>Men</p>
                <p>Women</p>
            </div>
            <div className={styles['navbar-items']}>
                <p>search</p>
                <p>like</p>
                <p>cart</p>
            </div>
          </div>
          <div className={styles['navbar-links']}>
            <p>new in</p>
            <p>clothing</p>
            <p>shoes</p>
            <p>accesories</p>
            <p>sports</p>
            <p>the suit</p>
            <p>our brands</p>
            <p>highlights</p>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header