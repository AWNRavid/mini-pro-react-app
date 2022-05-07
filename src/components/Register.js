import axios from 'axios';
import React, { useState, useEffect } from 'react';
// import './Register.css'

function Register() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [joinDate, setJoinDate] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleEmail = (e) => {
    const val = e.target.value;
    setEmail(val);
  };

  const handleName = (e) => {
    const val = e.target.value;
    setName(val);
  };

  const handlePassword = (e) => {
    const val = e.target.value;
    setPassword(val);
  };

  const handleAddress = (e) => {
    const val = e.target.value;
    setAddress(val);
  };

  const handleJoinDate = (e) => {
    const val = e.target.value;
    setJoinDate(val);
  };

  const handlePhoneNumber = (e) => {
    const val = e.target.value;
    setPhoneNumber(val);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // const newUser = {
    //   email: email,
    //   name: name,
    //   password: password,
    //   address: address,
    //   joinDate: joinDate,
    //   phoneNumber: phoneNumber,
    // };
    const newUser = {
      email: email,
      name: name,
      password: password,
    };
    handleAddUser(newUser);
    setEmail('');
    setName('');
    setPassword('');
    setAddress('');
    setJoinDate('');
    setPhoneNumber('');
  };

  const handleAddUser = (newUser) => {
    axios
      .post('http://localhost:3000/users/', newUser)
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <span>email: </span>
          <input type="email" value={email} onChange={handleEmail} />
        </label>
        <label>
          <span>name: </span>
          <input type="text" value={name} onChange={handleName} />
        </label>
        <label>
          <span>password: </span>
          <input type="password" value={password} onChange={handlePassword} />
        </label>
        {/* <label>
          <span>address: </span>
          <input type="text" value={address} onChange={handleAddress} />
        </label>
        <label>
          <span>join date: </span>
          <input type="date" value={joinDate} onChange={handleJoinDate} />
        </label>
        <label>
          <span>phone number: </span>
          <input type="number" value={phoneNumber} onChange={handlePhoneNumber} />
        </label> */}
        <button>Add</button>
      </form>
    </div>
  );
}

export default Register;
