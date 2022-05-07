import { toBeInTheDocument } from '@testing-library/jest-dom/dist/matchers';
import React, { useEffect, useState } from 'react';

function ProductCard({ product, handleDeleteProduct, handleEditProduct }) {
  const [isEdit, setIsEdit] = useState(false);
  const [productName, setProductName] = useState('');
  const [productQuantity, setProductQuantity] = useState(0);
  const [productPrice, setProductPrice] = useState(0);
  const [isLogin, setIsLogin] = useState(true);
  // const url = url

  useEffect(() => {
    setProductName(product.name);
    setProductQuantity(product.quantity);
    setProductPrice(product.price);
  }, [product]);

  const deleteProduct = () => {
    handleDeleteProduct(product);
  };

  const handleEdit = () => {
    setIsEdit(true);
  };

  const handleName = (e) => {
    const val = e.target.value;
    setProductName(val);
  };

  const handleQuantity = (e) => {
    const val = e.target.value;
    setProductQuantity(val);
  };

  const handlePrice = (e) => {
    const val = e.target.value;
    setProductPrice(val);
  };

  const handleValidation = () => {
    if (productName === '') {
      return false;
    } else {
      return true;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (handleValidation()) {
      const newProduct = {
        name: productName,
        quantity: productQuantity,
        price: productPrice,
        id: product.id,
      };
      handleEditProduct(newProduct);
      setIsEdit(false);
      setProductName('');
      setProductQuantity(0);
      setProductPrice(0);
    } else {
      alert('Product name is required');
    }
  };

  return (
    <div>
      <div className="">
        {isEdit ? (
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input value={productName} onChange={handleName} className="" type="text" placeholder=""></input>
            </label>
            <label>
              Quantity:
              <input value={productQuantity} onChange={handleQuantity} className="" type="number" placeholder=""></input>
            </label>
            <label>
              Price:
              <input value={productPrice} onChange={handlePrice} className="" type="number" placeholder=""></input>
            </label>
            <button type="submit" className="">
              Submit
            </button>
          </form>
        ) : (
          <div>
            <h2>{product.name}</h2>
            <p>{product.quantity}</p>
            <p>{product.price}</p>
            <img src="https://picsum.photos/id/237/200/" alt="" srcset="" />
            {isLogin ? (
              <>
                <p>sudah login</p>
                <button onClick={handleEdit}>Edit</button>
                <button onClick={deleteProduct}>Delete</button>
              </>
            ) : (
              <>
                <p>belum login</p>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductCard;

{
  /* <h2>{product.name}</h2>
        <p>{product.quantity}</p>
        <p>{product.price}</p>
        <button onClick={updateProduct}>Edit</button>
        <button onClick={deleteProduct}>Delete</button> */
}

// https://picsum.photos/id/{Math.floor(Math.random()*100)}/200/

{
  /* <div>
            <h2>{product.name}</h2>
            <p>{product.quantity}</p>
            <p>{product.price}</p>
            <img src="https://picsum.photos/id/237/200/" alt="" srcset="" />
            <button onClick={handleEdit}>Edit</button>
            <button onClick={deleteProduct}>Delete</button>
          </div> */
}
