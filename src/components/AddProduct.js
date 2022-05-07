import React, { useState } from 'react';

function AddProduct({ handleAddProduct }) {
  const [productName, setProductName] = useState('');
  const [productQuantity, setProductQuantity] = useState(0);
  const [productPrice, setProductPrice] = useState(0);

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
    if (productName === '' || productPrice < 0 || productQuantity < 0) {
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
        // pics: 'https://picsum.photos/200'
      };
      handleAddProduct(newProduct);
      setProductName('');
      setProductQuantity(0);
      setProductPrice(0);
    } else {
      alert('Product name is required');
    }
  };

  return (
    <div>
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
          Add
        </button>
      </form>
    </div>
  );
}

export default AddProduct;
