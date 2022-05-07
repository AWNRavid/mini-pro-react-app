import React from 'react';
import Register from './Register';
import { Routes, Route, Link } from 'react-router-dom';

function Welcome() {
  return (
    <div>
      {/* <div>
        <button onClick={<Register/>}>Login</button>
      </div>
      <div>
        <button>Register</button>
      </div> */}
      <h1>Welcome to React Router!</h1>
      <button>
        <Routes>
          <Route path="/" element={<Register />} />
        </Routes>
        aasdadas
      </button>
    </div>
  );
}

export default Welcome;
