import React from 'react'
import WishlistProduct from '../components/product/WishlistProduct'

// styles
import styles from '../sass/pages/Wishlist.module.scss'

const Wishlist = () => {
    const products = JSON.parse(localStorage.getItem('likes')) || []
  return (
    <section id={styles.wishlist}>
        <div className="container">
            { products ? 
                <div className={styles['wishlist-product']}>
                    {products.map(pr => (
                        <WishlistProduct key={pr.id} {...pr} />
                    ))}
                </div>
                :    
            <div className={styles['wishlist-message']}>
                <h4>Your wishlist is empty</h4>
                <p>Save products and looks to your wishlist and share them.</p>
                <p>Need inspiration?</p>
                <button>Sign In</button>
            </div>
        }
        </div>
    </section>
  )
}

export default Wishlist