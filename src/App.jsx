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
  const [cartItems, setCartItems] = useState([]);

  function toggleCartOpen() {
    setCartOpen(!cartOpen);
    console.log(cartItems)
  };

  function addToCart(index) {
    if (allProducts[index].quantity === 0) {
      allProducts[index].quantity = 1;
      setCartItems(cartItems.concat(allProducts[index]));
    }
  }

  function removeFromCart(id) {
    let newProductArray = allProducts.map(product => {
      if(product.id === id) {
        return {...product, quantity: 0}
      } else {
        return product
      }
    })
    let newCartArray = cartItems.filter(product => product.id !== id)
    setCartItems(newCartArray)
    setAllProducts(newProductArray)
    console.log(newProductArray)
  }

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        const productData = data.products.slice(0,10).map(item => ({...item, quantity: 0}))
        setAllProducts(productData);
        setProductsLoaded(true)
      } catch(error) {
        console.log(error)
      }
    }
    getProducts();
  },[])
 
  
  return (
    <BrowserRouter>
      <NavBar toggleCartOpen={toggleCartOpen} cartItems={cartItems} />
      <ShoppingCart cartOpen={cartOpen} toggleCartOpen={toggleCartOpen} cartItems={cartItems} removeFromCart={removeFromCart} allProducts={allProducts}/>
      <div className="App">
        <Routes>
          <Route path='/shopping-cart' element={<Home />} />
          <Route path='/shopping-cart/shop' element={<Shop addToCart={addToCart} allProducts={allProducts} productsLoaded={productsLoaded}/>} />
          <Route path='/shopping-cart/about' element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
