import React from 'react'
import { Menu } from 'antd';
import { SlArrowRight } from "react-icons/sl";
import styles from '../../sass/layout/Footer.module.scss'
import ARTICLE_IMG from '../../assests/footer/article.webp'
import { items } from './MenuItems';

const Footer = () => {
  return (
    <>
    <footer className={styles['footer-desktop']}>
      <div className="container">
        <div className={styles.footer}>
          <div className={styles['footer-info']}>
            <div className={styles['footer-info-article']}>
                <div className={styles['footer-info-headline']}>Hugo boss experiece</div>
                <img src={ ARTICLE_IMG } alt="" />
                <p>
                  Join our HUGO BOSS EXPERIENCE community to receive exclusive benefits such as Members’ Only promotions, invitations to events, access to exclusive products and much more.
                  Sign up today and enjoy a variety of benefits, from exclusive gifts to VIP prizes!
                </p>
                <a href=""><SlArrowRight /> Discover more</a>
            </div>
            <div className={styles['footer-info-app']}>
                <div className={styles['footer-info-headline']}>Hugo boss experiece</div>
                <img src={ ARTICLE_IMG } alt="" />
                <p>  
                Reconnect with our updated app. Find bold designs and sophisticated styles with ease, whether you're browsing on the couch or on your daily commute to work. Rediscover
                BOSS today.
              </p>
                <a href=""><SlArrowRight /> Discover more</a>
            </div> 
          </div>
          <div className={styles['footer-links']}>
              <div className={styles['footer-links-contact']}>
                <div className={styles['footer-links-headline']}>Contact</div>
                <ul>
                  <li>Live chat & style advice</li>
                  <li>Customer care</li>
                  <li>WhatsApp**</li>
                  <li>Email us</li>
                  <li>Store locator</li>
                </ul>
                <a href=""><SlArrowRight /> help & contact</a>
              </div>
              <div className={styles['footer-links-services']}>
                <div className={styles['footer-links-headline']}>Services</div>
                <ul>
                  <li>At your Service</li>
                  <li>Free Returns</li>
                  <li>Free shippping</li>
                  <li>Return label</li>
                  <li>order status</li>
                  <li>Bold for the planet</li>
                  <li>Gift card</li>
                  <li>mY HUGO BOSS REWARD</li>
                </ul>
                <a href=""><SlArrowRight /> faq</a>
              </div>
              <div className={styles['footer-links-company']}>
                <div className={styles['footer-links-headline']}>Contact</div>
                <ul>
                  <li>CAREERS</li>
                  <li>investor relations</li>
                  <li>Suistainability</li>
                  <li>press</li>
                </ul>
                <a href=""><SlArrowRight /> Coorporate Website</a>
              </div>
          </div>
        </div>
      </div>
      <div className={styles['footer-bottom']}>
        <div className="container">
          <ul className={styles['footer-bottom-links']}>
              <li>Faqs</li>
              <li>imprint</li>
              <li>Privacy statement</li>
              <li>hugo boss experiece</li>
              <li>HUgo boss newsletter</li>
              <li>terms & conditions</li>
              <li>Terms of use</li>
              <li>Cookie settings</li>
              <li>APP</li>
          </ul>
          <div className={styles['footer-bottom-credit']}>  
            © 2024 HUGO BOSS All rights reserved.
          </div>
        </div>
      </div>
    </footer>
    <footer className={styles['footer-mobile']}>
      <div className="container">
        <div className="footer">
          <Menu
            className={styles['footer-menu-block']}
            defaultSelectedKeys={['1']}
            mode="inline"
            items={items}
          />
        </div>
      </div>
      <div className={styles['footer-bottom']}>
        <div className="container">
          <ul className={styles['footer-bottom-links']}>
              <li>Faqs</li>
              <li>imprint</li>
              <li>Privacy statement</li>
              <li>hugo boss experiece</li>
              <li>HUgo boss newsletter</li>
              <li>terms & conditions</li>
              <li>Terms of use</li>
              <li>Cookie settings</li>
              <li>APP</li>
          </ul>
          <div className={styles['footer-bottom-credit']}>  
            © 2024 HUGO BOSS All rights reserved.
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer
