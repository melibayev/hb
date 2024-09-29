import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useLike } from '../context/LikeContext'
import { useRemoveLike } from '../context/RemoveLikeContext'


// images and icons
import { FaXmark } from 'react-icons/fa6'
// styles 
import styles from '../../sass/common/RemovedFromLike.module.scss'

const RemovedFromLike = () => {
    const { removeAddToLike, setRemoveAddToLike } = useRemoveLike()
    const product = localStorage.getItem('removedLike')
    useEffect(() => {
        window.addEventListener('scroll', () => setRemoveAddToLike(false)); 
    }, []) 
  return (
    <>
        <div className={`${styles['removed-to-like']} ${removeAddToLike ? styles['active'] : ''}`}>
            <div className="container">
                <div className={styles.like}>
                    <div className={styles['like-info']}>
                        <p><span>The Item</span> {product} <span>has been removed from your wishlist.</span></p>
                    </div>
                    <div className={styles['like-info-xmark']} onClick={() => setRemoveAddToLike(false)}><FaXmark /></div>
                </div>
            </div>
        </div>
    </>
  )
}

export default RemovedFromLike