import styles from '../../sass/cards/ProductCard.module.scss'

const ProductCard = ({ desc, img, price }) => {
  return (
    <>
        <div className={styles.card}>
            <div className={styles['card-img']}>
                <img src={ img } alt="" />
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