import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Shop from './pages/Shop';
import About from './pages/About';

import './App.css'

function App() {



  
  useEffect(() => {
  async function getProducts() {
    try {
      const response = await fetch('https://dummyjson.com/products');
      const productData = await response.json();
      console.log(productData)

    } catch(error) {
      console.log(error)
    }
  }
  getProducts()
},[])

  return (
    <BrowserRouter>
      <NavBar />
      <div className="App">
        <Routes>
          <Route path='/shopping-cart' element={<Home />} />
          <Route path='/shopping-cart/shop' element={<Shop />} />
          <Route path='/shopping-cart/about' element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
