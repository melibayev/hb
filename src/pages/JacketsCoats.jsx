import React, { useEffect, useState } from "react";
import { useData } from "../components/context/DataContext";

import styles from '../sass/pages/JacketsCoats.module.scss';
import WishlistProduct from "../components/product/WishlistProduct";
import { Dropdown, Space } from "antd";
import { MdKeyboardArrowDown } from "react-icons/md";

const JacketsCoats = () => {
  const { products } = useData()
  const { videos } = useData()
  const allCoats = products?.filter(product => product.category.includes('coats')) || [];
  const [coats, setCoats] = useState(allCoats || [])
  const video = videos?.find(video => video.id === "d97fa351-ed8a-4e46-b1a4-d00f67b2a03e")
  const [sortBySelected, setSortBySelected] = useState('1');
  const coatsCategory = (key) => {
    setCoats(products?.filter(product => product.category.includes(key)) || [])
  }
  if (coats.length <= 0 && products) {
    setCoats(allCoats)
  }
  const sortBy = [
    { key: '1', label: 'Recommended' },
    { key: '2', label: 'Price Low to High' },
    { key: '3', label: 'Price High to Low' },
  ];
  
  const setCoatsSort = ({ key }) => {
    setSortBySelected(key)
  };

  useEffect(() => {
    if (products) {
        let sortedCoats = [...coats] || []
        const cleanPrice = (price) => {
        return parseFloat(price.replace(/[$,]/g, ''));
        };
        if (sortBySelected === '2') {
        sortedCoats = sortedCoats.sort((a, b) => cleanPrice(a.price) - cleanPrice(b.price));
        } else if (sortBySelected === '3') {
        sortedCoats = sortedCoats.sort((a, b) => cleanPrice(b.price) - cleanPrice(a.price));
        }
        setCoats(sortedCoats);
    }
  }, [sortBySelected, coats, products]);
  
  if (!videos) {
    return <div>loading...</div>
  }

  return (
    <>
      <section id={styles['clothing-banner']}>
        <video muted autoPlay loop playsInline>
          <source src={video.video} type='video/mp4'/>
        </video>
      </section>

      <section id={styles.products}>
        <div className="container">
          <div className={styles['products-category']}>
            <div className={styles['products-category-item']} onClick={() => coatsCategory('formal-coats')}>
                <div className={styles['products-category-item-img']}>
                  <img src="https://raw.githubusercontent.com/melibayev/data/main/home_images/hbna50529745_001_100.jpg" alt="" />
                </div>
                <p>Formal Coats</p>              
            </div>
            <div className={styles['products-category-item']} onClick={() => coatsCategory('casual-coats')}>
                <div className={styles['products-category-item-img']}>
                  <img src="https://raw.githubusercontent.com/melibayev/data/main/home_images/hbna50528439_404_100.jpg" alt="" />
                </div>
                <p>Casual Coats</p>              
            </div>
            <div className={styles['products-category-item']} onClick={() => coatsCategory('parkas')}>
                <div className={styles['products-category-item-img']}>
                  <img src="https://raw.githubusercontent.com/melibayev/data/main/home_images/hbna50525237_001_100.jpg" alt="" />
                </div>
                <p>Parkas</p>              
            </div>
          </div>
          <div className={styles['products-title']}>
            Men's Coats
          </div>
          <div className={styles['products-sort']}>
            <div>
              <Dropdown
                menu={{
                items: sortBy,
                selectable: true,
                defaultSelectedKeys: ['1'],
                onClick: setCoatsSort,
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
          <div className={styles['products-list']}>
            {coats.map(pr => (
                <WishlistProduct key={pr.id} {...pr} />
            ))}
          </div>
        </div>
      </section>
    </>



  )
};

export default JacketsCoats;
