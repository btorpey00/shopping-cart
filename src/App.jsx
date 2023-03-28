import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Shop from './pages/Shop';
import About from './pages/About';

import './App.css'
import ShoppingCart from './components/ShoppingCart';

function App() {

  const [cartOpen, setCartOpen] = useState(false);
  const [allProducts, setAllProducts] = useState([]);
  const [productsLoaded, setProductsLoaded] = useState(false);

  function toggleCartOpen() {
    setCartOpen(!cartOpen);
  };


  useEffect(() => {
    async function getProducts() {
      try {
        const response = await fetch('https://dummyjson.com/products');
        const productData = await response.json();
        // console.log(productData);
        setAllProducts(productData.products.slice(0,10));
        setProductsLoaded(true)
      } catch(error) {
        console.log(error)
      }
    }
    getProducts();
  },[])
 
  
  return (
    <BrowserRouter>
      <NavBar toggleCartOpen={toggleCartOpen} />
      <ShoppingCart cartOpen={cartOpen} toggleCartOpen={toggleCartOpen}/>
      <div className="App">
        <Routes>
          <Route path='/shopping-cart' element={<Home />} />
          <Route path='/shopping-cart/shop' element={<Shop allProducts={allProducts} productsLoaded={productsLoaded}/>} />
          <Route path='/shopping-cart/about' element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
