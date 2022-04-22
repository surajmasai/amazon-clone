// import logo from './logo.svg';
// import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Cart } from './Components/Cart';
import { Header } from './Components/Header';
import { Home } from './Components/Home';
import { Login } from './Components/Login';
import { Product } from './Components/Product';
import { ProductDetails } from './Components/ProductDetails';
import { Register } from './Components/Register';
import { Search } from './Components/Search';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/showProduct/:cat/:type1/:type2/:type3" element={<Product />}></Route >
        <Route path="/productDetails/:id/:type" element={<ProductDetails />}></Route >
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/search" element={<Search />}></Route>

      </Routes>
    </div>
  );
}

export default App;
