import React, { useContext, useState } from "react";
import GlobalContext from "../../context/GlobalContext";
import styles from '../../../sass/pages/Admin.module.scss'
import { Button, Input } from "antd";
import TextArea from "antd/es/input/TextArea";

const AddProduct = () => {
  const { products, setProducts, saveData } = useContext(GlobalContext);
  const [newProduct, setNewProduct] = useState({
    id: "",
    desc: "",
    img: "",
    imgs: [],
    price: "",
    size: [],
    about: "",
    category: "",
    gender: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prev) => ({
      ...prev,
      [name]: name === "size" || name === "imgs" ? value.split(",") : value,
    }));
  };

  const handleSubmit = () => {
    if (!newProduct.id || !newProduct.desc || !newProduct.price, !newProduct.category, !newProduct.img, !newProduct.imgs, !newProduct.category, !newProduct.gender) {
      alert("Please fill out the required fields.");
      return;
    }

    const updatedProducts = [...products, newProduct];
    setProducts(updatedProducts);
    saveData({ products: updatedProducts });
    setNewProduct({
      id: "",
      desc: "",
      img: "",
      imgs: [],
      price: "",
      size: [],
      about: "",
      category: "",
      gender: "",
    });
  };

  return (
    <div className={styles['main-content']}>
      <h2>Add Product</h2>
      <div className={styles['grid-inputs']}>
        <Input
          type="text"
          name="id"
          placeholder="ID"
          value={newProduct.id}
          onChange={handleChange}
          allowClear
        />
        <Input
          type="text"
          name="desc"
          placeholder="Description"
          value={newProduct.desc}
          onChange={handleChange}
          allowClear
        />
        <Input
          type="text"
          name="img"
          placeholder="Main Image URL"
          value={newProduct.img}
          onChange={handleChange}
          allowClear
        />
        <TextArea
          type="text"
          name="imgs"
          placeholder="Other Image URLs (comma separated)"
          value={newProduct.imgs}
          onChange={handleChange}
          autoSize={{
            minRows: 1,
            maxRows: 8,
          }}
          allowClear
        />
        <Input
          type="text"
          name="price"
          placeholder="Price"
          value={newProduct.price}
          onChange={handleChange}
          allowClear
        />
        <Input
          type="text"
          name="size"
          placeholder="Sizes (comma separated)"
          value={newProduct.size}
          onChange={handleChange}
          allowClear
        />
        <Input
          type="text"
          name="category"
          placeholder="Category:"
          value={newProduct.category}
          onChange={handleChange}
          allowClear
        />
        <Input
          type="text"
          name="gender"
          placeholder="Gender (male, female): "
          value={newProduct.gender}
          onChange={handleChange}
          allowClear
        />
        <TextArea
          name="about"
          placeholder="About the Product"
          value={newProduct.about}
          onChange={handleChange}
          autoSize={{
            minRows: 1,
            maxRows: 6,
          }}
          allowClear
        />
      </div>
      <div className={styles['center-button']}>
        <Button type="primary" onClick={handleSubmit}>Add Product</Button>
      </div>
    </div>
  );
};

export default AddProduct;
