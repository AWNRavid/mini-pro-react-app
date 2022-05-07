import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AddProduct from './AddProduct';
import ProductCard from './ProductCard';

function ProductContainer() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    updateProduct();
  }, []);

  const updateProduct = () => {
    const accessToken = localStorage.getItem('accessToken');
    const config = {
      headers: {
        authorization: accessToken,
      },
    };
    axios
      .get('http://localhost:3000/products/', config)
      .then((response) => {
        if (response.data.length >= 0) {
          setProductList(response.data);
        }
      })
      .catch((error) => {
        alert(error);
      });
  };

  const handleAddProduct = (newProduct) => {
    axios
      .post('http://localhost:3000/products/', newProduct)
      .then(() => {
        updateProduct();
      })
      .catch((error) => {
        alert(error);
      });
  };

  const handleDeleteProduct = (product) => {
    console.log(product);
    axios
      .delete(`http://localhost:3000/products/${product.id}`)
      .then(() => {
        updateProduct();
      })
      .catch((error) => {
        //error handle here
        alert('Error:', error);
      });
  };

  const handleEditProduct = (product) => {
    console.log(product);
    axios
      .put(`http://localhost:3000/products/${product.id}`, product)
      .then(() => {
        updateProduct();
      })
      .catch((error) => {
        //error handle here
        alert('Error:', error);
      });
  };

  return (
    <section>
      <AddProduct handleAddProduct={handleAddProduct} />
      {productList.map((product, index) => {
        return <ProductCard product={product} key={index} handleDeleteProduct={handleDeleteProduct} handleEditProduct={handleEditProduct} />;
      })}
    </section>
  );
}

export default ProductContainer;
