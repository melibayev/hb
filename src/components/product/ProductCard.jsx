import LazyLoad from 'react-lazy-load'
import { NavLink } from 'react-router-dom'

import styles from '../../sass/cards/ProductCard.module.scss'

const ProductCard = ({ id, desc, img, price }) => {
  return (
    <>
      <NavLink to={`/product/${id}`}>
          <div className={styles.card}>
            <div className={styles['card-img']}>
                <img src={ img } />
            </div>
            <div className={styles['card-desc']}>
                <p>{desc}</p>
                <span>{price}</span>
            </div>
          </div>
        </NavLink>
    </>
  )
}

export default ProductCard
