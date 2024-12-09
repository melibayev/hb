import React, { useContext, useState, useEffect } from "react";
import GlobalContext from '../../context/GlobalContext';
import styles from '../../../sass/pages/Admin.module.scss';
import { CButton, CModal, CModalHeader, CModalTitle, CModalBody, CModalFooter } from '@coreui/react';
import { Input, Pagination } from "antd";
import TextArea from "antd/es/input/TextArea";

const EditProduct = () => {
  const { products, setProducts, saveData } = useContext(GlobalContext);
  const [editedProduct, setEditedProduct] = useState({
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
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [visible, setVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    if (selectedProductId) {
      const productToEdit = products.find((product) => product.id === selectedProductId);
      setEditedProduct({ ...productToEdit });
      setVisible(true);
    }
  }, [selectedProductId, products]);

  const handleProductChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct((prev) => ({
      ...prev,
      [name]: name === "size" ? value.split(",") : value,
    }));
  };

  const handleProductSubmit = () => {
    if (!editedProduct.id || !editedProduct.desc || !editedProduct.price, !editedProduct.category, !editedProduct.img, !editedProduct.imgs, !editedProduct.category, !editedProduct.gender) {
      alert("Please fill out the ID, description, and price fields.");
      return;
    }

    const updatedProducts = products.map((product) =>
      product.id === editedProduct.id ? editedProduct : product
    );

    setProducts(updatedProducts);
    saveData({ products: updatedProducts });
    setVisible(false);
  };

  const confirmDeleteProduct = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      const updatedProducts = products.filter((product) => product.id !== id);
      setProducts(updatedProducts);
      saveData({ products: updatedProducts });
    }
  };

  const handleCloseModal = () => {
    setVisible(false);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = products.slice(startIndex, endIndex);

  return (
    <div className={styles['main-content']}>
      <h2>Edit Product</h2>

      <h3>Select a Product to Edit</h3>
      <div className={styles['grid-product-items']}>
        {currentProducts.map((product) => (
          <div key={product.id} style={{ marginBottom: '10px' }}>
            <div>ID: {product.id}</div>
            <div>TITLE: {product.desc}</div>
            <div>MAIN IMAGE:</div>
            <div><img src={product.img} alt="" /></div>
            <div>SUBIMAGES:</div>
            <div className={styles['flex-inputs']}>
              {product.imgs.map((img, index) => (
                <img key={index} src={img} alt="" />
              ))}
            </div>
            <div>PRICE: {product.price}</div>
            <div>Size: {product.size.map((size, index) => (
              <span key={index}>'{size}' </span>
            ))}</div>
            <div>category: {product.category}</div>
            <div>Gender type: {product.gender}</div>
            <div>DESCRIPTION: {product.about}</div>
            <CButton color="primary" onClick={() => setSelectedProductId(product.id)}>Edit</CButton>
            <CButton
              color="danger"
              onClick={() => confirmDeleteProduct(product.id)}
              style={{ marginLeft: '10px', color: 'white' }}
            >
              Delete
            </CButton>
          </div>
        ))}
      </div>

      <div className={styles['center-item']}>
        <Pagination
          current={currentPage}
          pageSize={itemsPerPage}
          total={products.length}
          onChange={handlePageChange}
          style={{ marginTop: '20px', textAlign: 'center' }}
        />
      </div>

      <CModal
        visible={visible}
        onClose={handleCloseModal}
        aria-labelledby="EditProductModalLabel"
      >
        <CModalHeader>
          <CModalTitle id="EditProductModalLabel">Edit Product Details</CModalTitle>
        </CModalHeader>
        <CModalBody className={styles['block-inputs']}>
          <Input
            type="text"
            name="id"
            placeholder="ID"
            value={editedProduct.id}
            onChange={handleProductChange}
          />
          <Input
            type="text"
            name="desc"
            placeholder="Description"
            value={editedProduct.desc}
            onChange={handleProductChange}
          />
          <Input
            type="text"
            name="img"
            placeholder="Main Image URL"
            value={editedProduct.img}
            onChange={handleProductChange}
          />
          <Input
            type="text"
            name="imgs"
            placeholder="Other Image URLs (comma separated)"
            value={editedProduct.imgs.join(",")}
            onChange={handleProductChange}
          />
          <Input
            type="text"
            name="price"
            placeholder="Price"
            value={editedProduct.price}
            onChange={handleProductChange}
          />
          <Input
            type="text"
            name="size"
            placeholder="Sizes (comma separated)"
            value={editedProduct.size.join(",")}
            onChange={handleProductChange}
          />
          <Input
            type="text"
            name="category"
            placeholder="Category"
            value={editedProduct.category}
            onChange={handleProductChange}
          />
          <Input
            type="text"
            name="gender"
            placeholder="Gender Type"
            value={editedProduct.gender}
            onChange={handleProductChange}
          />
          <TextArea
            name="about"
            placeholder="About the Product"
            value={editedProduct.about}
            onChange={handleProductChange}
            autoSize={{
              minRows: 1,
              maxRows: 8,
            }}
          />
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={handleCloseModal}>
            Close
          </CButton>
          <CButton color="primary" onClick={handleProductSubmit}>
            Save changes
          </CButton>
        </CModalFooter>
      </CModal>
    </div>
  );
};

export default EditProduct;
