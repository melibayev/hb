import { SlArrowRight } from "react-icons/sl";
import ARTICLE_IMG from '../../assests/footer/article.webp'
import styles from '../../sass/layout/Footer.module.scss'

export const items = [
    {
      key: 'sub1',
      label: 'Hugo boss experience',
      className: styles['footer-block'],
      children: [
        {
          key: '5',
          label: (
            <div className={styles['footer-info-article']}>
              <div className={styles['footer-info-article-img']}>
                <img src={ ARTICLE_IMG } alt="" />
                <p>
                  Join our HUGO BOSS EXPERIENCE community to receive exclusive benefits such as Members’ Only promotions, invitations to events, access to exclusive products and much more.
                  Sign up today and enjoy a variety of benefits, from exclusive gifts to VIP prizes!
                </p>
              </div>
              <a href=""><SlArrowRight /> Discover more</a>
            </div>
          ),
          className: styles['footer-info']
        },
      ],
    },
    {
      type: 'divider',
    },
    {
      key: 'sub2',
      label: 'contact',
      children: [
        {
          key: '5',
          label: (
            <div className={styles['footer-links-contact']}>
                <ul>
                  <li>Live chat & style advice</li>
                  <li>Customer care</li>
                  <li>WhatsApp**</li>
                  <li>Email us</li>
                  <li>Store locator</li>
                </ul>
                <a href=""><SlArrowRight /> help & contact</a>
            </div>
          ),
          className: styles['footer-info']
        },
      ],
    },
    {
      type: 'divider',
    },
    {
      key: 'sub3',
      label: 'services',
      children: [
        {
          key: '5',
          label: (
            <div className={styles['footer-links-services']}>
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
          ),
          className: styles['footer-info']
        },
      ],
    },
    {
      type: 'divider',
    },
    {
      key: 'sub4',
      label: 'our company',
      children: [
        {
          key: '5',
          label: (
            <div className={styles['footer-links-company']}>
              <ul>
                <li>CAREERS</li>
                <li>investor relations</li>
                <li>Suistainability</li>
                <li>press</li>
              </ul>
              <a href=""><SlArrowRight /> Coorporate Website</a>
            </div>
          ),
          className: styles['footer-info']
        },
      ],
    },
    {
      type: 'divider',
    },
  ];
