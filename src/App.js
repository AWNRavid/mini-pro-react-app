import './App.css';
import ProductContainer from './components/ProductContainer';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Register from './components/Register';

function App() {
  return (
    // <Router>
    //   <div className="App">
    //     <Header />
    //     <Routes>
    //       <Route path="/" element={<ProductContainer />} />
    //     </Routes>
    //   </div>
    // </Router>
    // <div>
    //   <ProductContainer />
    // </div>
    <Router>
      <div className="App">
        <Navbar/>
        {/* <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Register</NavLink>
        </nav> */}
        <Routes>
          <Route path="/" element={<ProductContainer />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
