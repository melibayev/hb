import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useSizeWindow } from '../context/SizeWindowContext';
import { homeProducts } from '../../data/products';

// images and icons
import { FaXmark } from "react-icons/fa6";


// styles
import styles from '../../sass/common/SizeSelection.module.scss'


const SizeSelection = () => {
    const { id } = useParams()
    const product = homeProducts.find((item) => item.id === parseInt(id))
    const { isOpened, setIsOpened } = useSizeWindow(); 
    const [selectedSize, setSelectedSize] = useState(null);

    useEffect(() => {
        const savedSize = localStorage.getItem(`selectedSize-${id}`);
        if (savedSize) {
        setSelectedSize(savedSize);
        }
    }, [id]);

    const handleSizeSelection = (size) => {
        setSelectedSize(size);
        localStorage.setItem(`selectedSize-${id}`, size);
        setIsOpened(false)
    };
  return (
    <>
        <div className={`${styles['size']} ${isOpened ? styles['open'] : ''}`}>
            <div className='container'>
                <div className={styles['size-selection-title']}>
                    <div>Sizes</div>
                    <div onClick={() => setIsOpened(false)}>{<FaXmark />}</div>
                </div>
                <p>Size guide:</p>
                <div className={styles['size-selection-options']}>
                {product.size.map((size) => (
                        <button
                        key={size}
                        className={selectedSize === size ? styles['active'] : ''}
                        onClick={() => handleSizeSelection(size)}
                        >
                        {size}
                        </button>
                    ))}
                </div>
            </div>
        </div>
        <div className={`${styles['size-mobile']} ${isOpened ? styles['open-mobile'] : ''}`}>
            <div className='container'>
                <div className={styles['size-selection-title']}>
                    <div>Sizes</div>
                    <div onClick={() => setIsOpened(false)}>{<FaXmark />}</div>
                </div>
                <p>Size guide:</p>
                <div className={styles['size-selection-options']}>
                {product.size.map((size) => (
                        <button
                        key={size}
                        className={selectedSize === size ? styles['active'] : ''}
                        onClick={() => handleSizeSelection(size)}
                        >
                        {size}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    </>
  )
}

export default SizeSelection