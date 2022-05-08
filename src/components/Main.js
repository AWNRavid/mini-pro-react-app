import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Main() {
  const [producstList, setProducstList] = useState([]);
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get('http://localhost:3000/products')
      .then((response) => {
        if (response.data.length > 0) {
          setProducstList(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });

    // return;
  };

  const addNewProduct = (newTodo) => {
    console.log(newTodo);
    axios.post('http://localhost:3000/products', newTodo).then(() => {
        getData()
    }).catch((error) => {
        console.log(error);
    })
  };

  const handleName = (e) => {
    const val = e.target.value;
    setName(val);
  };

  const handleQuantity = (e) => {
    const val = e.target.value;
    setQuantity(val);
  };

  const handlePrice = (e) => {
    const val = e.target.value;
    setPrice(val);
  };

  const handleValidation = () => {
    if (name === '') {
      return false;
    } else {
      return true;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (handleValidation()) {
      const newTodo = {
        name: name,
        quantity: quantity,
        price: price,
      };
      addNewProduct(newTodo);
      setName('');
      setQuantity(0);
      setPrice(0);
    } else {
      alert('Title is required');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <span>name: </span>
          <input type="text" value={name} onChange={handleName} placeholder='name'/>
        </label>
        <label>
          <span>quantity: </span>
          <input type="number" value={quantity} onChange={handleQuantity} />
        </label>
        <label>
          <span>price: </span>
          <input type="number" value={price} onChange={handlePrice} />
        </label>
      </form>
      <button type='submit'>Add New Product</button>

      {producstList.map((product) => {
        return (
          <div key={product.id}>
            <p>name: {product.name}</p>
            <p>quantity: {product.quantity}</p>
            <p>price: {product.price}</p>
            <button>Edit</button>
            <button>Delete</button>
          </div>
        );
      })}
    </div>
  );
}

export default Main;
