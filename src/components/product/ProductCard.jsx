import LazyLoad from 'react-lazy-load'
import styles from '../../sass/cards/ProductCard.module.scss'

const ProductCard = ({ desc, img, price }) => {
  return (
    <>
        <div className={styles.card}>
            <div className={styles['card-img']}>
                <LazyLoad>
                    <img src={ img } />
                </LazyLoad>
            </div>
            <div className={styles['card-desc']}>
                <p>{desc}</p>
                <span>{price}</span>
            </div>
        </div>
    </>
  )
}

export default ProductCard