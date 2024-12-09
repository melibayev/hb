import React, { useEffect, useState } from 'react'
import WishlistProduct from '../components/product/WishlistProduct'
import { useData } from '../components/context/DataContext'
import { Dropdown, Space } from 'antd'

// styles
import styles from '../sass/pages/MaleShoes.module.scss'
import { MdKeyboardArrowDown } from "react-icons/md";


const MaleShoes = () => {
  const { products } = useData()
  const shoes = products.filter(product => product.category.includes('shoes'));
  const [shoesTypeSelected, setShoesTypeSelected] = useState('6');
  const [shoesTypeTitle, setShoesTypeTitle] = useState('All Shoes') 
  const [sortBySelected, setSortBySelected] = useState('1');
  const [filteredShoes, setFilteredShoes] = useState(shoes)
  const [sortedShoes, setSortedShoes] = useState(shoes)
  const setShoesType = ({ key }) => {
    setShoesTypeSelected(key) 
    const selectedShoesType = shoesType.find(item => item.key === key);
    if (selectedShoesType) {
      setShoesTypeTitle(selectedShoesType.label); // Update the label for the selected item
    }   
  };
  const setShoesSort = ({ key }) => {
    setSortBySelected(key)
};
  useEffect(() => {
    if (shoesTypeSelected == '2') {
        const shoes = products.filter(product => product.category.includes('sneakers'));
        setFilteredShoes(shoes)
    } else if (shoesTypeSelected == '3') {
        const shoes = products.filter(product => product.category.includes('loafers-moccasins'));
        setFilteredShoes(shoes)
    } else if (shoesTypeSelected == '4') {
        const shoes = products.filter(product => product.category.includes('boots'));
        setFilteredShoes(shoes)
    } else if (shoesTypeSelected == '5') {
        const shoes = products.filter(product => product.category.includes('sandals'));
        setFilteredShoes(shoes)
    } else if (shoesTypeSelected == '6') {
        const shoes = products.filter(product => product.category.includes('shoes'));
        setFilteredShoes(shoes)
    } else if (shoesTypeSelected == '7') {
        const shoes = products.filter(product => product.category.includes('business-shoes'));
        setFilteredShoes(shoes)
    }
  }, [shoesTypeSelected])

  useEffect(() => {
    let sortedShoes = [...filteredShoes];
    const cleanPrice = (price) => {
      return parseFloat(price.replace(/[$,]/g, ''));
    };
    if (sortBySelected === '2') {
      sortedShoes = sortedShoes.sort((a, b) => cleanPrice(a.price) - cleanPrice(b.price));
    } else if (sortBySelected === '3') {
      sortedShoes = sortedShoes.sort((a, b) => cleanPrice(b.price) - cleanPrice(a.price));
    }
    setSortedShoes(sortedShoes);
  }, [sortBySelected, filteredShoes]);
  
  


  
  
  const bannerShoes = shoes.slice(0, 2)
  const shoesType = [
    { key: '1', label: 'Shoes', disabled: true },
    { key: '2', label: 'Sneakers' },
    { key: '3', label: 'Loafers and Moccasins' },
    { key: '4', label: 'Boots' },
    { key: '5', label: 'Sandals' },
    { key: '6', label: 'All Shoes' },
    { key: '7', label: 'Business shoes' },
  ];

  const sortBy = [
    { key: '1', label: 'Recommended' },
    { key: '2', label: 'Price Low to High' },
    { key: '3', label: 'Price High to Low' },
  ];
  return (
    <>
        <section id={styles.shoes}>
            <div className="container">
                <div className={styles['shoes-title']}>
                    <h4>Men's Shoes</h4>
                    <p>Fruits of Kim Jones' creative genius and the ateliers' exceptional attention to detail, the collection of Dior luxury shoes for men showcases the House's savoir-faire as well as its design codes.</p>
                </div>
                <div className={styles['shoes-filter']}>
                    <div>
                        <Dropdown
                            menu={{
                            items: shoesType,
                            selectable: true,
                            defaultSelectedKeys: ['6'],
                            onClick: setShoesType,
                            }}
                            trigger={['click']}
                            >
                            <a onClick={(e) => e.preventDefault()}>
                            <Space>
                                {shoesTypeTitle}
                                <MdKeyboardArrowDown />
                            </Space>
                            </a>
                        </Dropdown>
                        <Dropdown
                            menu={{
                            items: sortBy,
                            selectable: true,
                            defaultSelectedKeys: ['1'],
                            onClick: setShoesSort,
                            }}
                            trigger={['click']}
                            >
                            <a onClick={(e) => e.preventDefault()}>
                            <Space>
                                Sort By
                                <MdKeyboardArrowDown />
                            </Space>
                            </a>
                        </Dropdown>
                    </div>
                </div>
                <div className={styles['shoes-list']}>
                    {sortedShoes.map(pr => (
                        <WishlistProduct key={pr.id} {...pr} />
                    ))}
                </div>
            </div>
            <div className={styles['shoes-banner']}>
                <img src='https://raw.githubusercontent.com/melibayev/data/main/home_images/M_BC_MSHOES_LV_Trainer_Evergreen_Apr24_01_DI3.jpg' alt="" />
            </div>
            <div className="container">
                <div className={styles['shoes-list']}>
                    {sortedShoes.map(pr => (
                        <WishlistProduct key={pr.id} {...pr} />
                    ))}
                </div>
            </div>
            <div className={styles['shoes-banner']}>
                <img src='https://raw.githubusercontent.com/melibayev/data/main/home_images/M_BC_PrecoSS25_Ecomm+_OCT24_02_DI3.webp' alt="" />
            </div>
            <div className={styles['shoes-halfbanner']}>
                <div className={styles['shoes-halfbanner-img']}>
                    <img src="https://raw.githubusercontent.com/melibayev/data/main/home_images/BC_LV_COLOR_02_ECOM_DII.webp" alt="" />
                </div>
                <div className={styles['shoes-halfbanner-list']}>
                    {bannerShoes.map(pr => (
                        <WishlistProduct key={pr.id} {...pr} />
                    ))}
                </div>
            </div>
        </section>
        <section id={styles['shoes-description']}>
            <div className={styles['shoes-description-info']}>
                <div className="container">
                    <p>Hugo Boss designs shoes for men to fit every occasion: elegant derbies and refined richelieus for business or formal wear; boots, moccasins and loafers for casual-chic affairs; and every manner of high and low-top sneakers, including Virgil Abloh’s cult HB Trainer. Superbly crafted in Italy, each pair of Hugo Boss’s shoes for men displays the Maison’s unmistakable signature accents.</p>
                </div>
            </div>
            <div className={styles['shoes-description-breadcrumb']}>
                <div className="container">
                    <p>Hugo Boss Men - Shoes - All Shoes</p>
                </div>
            </div>
        </section>

    </>
  )
}

export default MaleShoes