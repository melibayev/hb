import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useLike } from '../context/LikeContext'
import { useRemoveLike } from '../context/RemoveLikeContext'


// images and icons
import { FaXmark } from 'react-icons/fa6'
// styles 
import styles from '../../sass/common/AddedToLike.module.scss'

const AddedToLike = () => {
    const { addToLike, setAddToLike } = useLike()
    const product = JSON.parse(localStorage.getItem('likes') || []).slice(-1)[0]
    useEffect(() => {
        window.addEventListener('scroll', () => setAddToLike(false)); 
    }, [])    
  return (
    <>
    <div className={`${styles['added-to-like']} ${addToLike ? styles['active'] : ''}`}>
        <div className="container">
            <div className={styles.like}>
                <div className={styles['like-img']}>
                    <img src={product?.img} alt="" />
                </div>
                <div className={styles['like-info']}>
                    <p>{product?.desc} <span>has been added to your wishlist</span></p>
                    <NavLink>Access your Wishlist</NavLink>
                </div>
                <div className={styles['like-info-xmark']} onClick={() => setAddToLike(false)}><FaXmark /></div>
            </div>
        </div>
    </div>
    </>
  )
}

export default AddedToLike