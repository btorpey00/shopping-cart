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
  const [productsLoaded, setProductsLoaded] = useState(false);
  const [allProducts, setAllProducts] = useState([]);
  const [cartItems, setCartItems] = useState(() => {
    const cartData = JSON.parse(localStorage.getItem('cartItems'));
    return cartData || [];
  });

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  },[cartItems]);

  function toggleCartOpen() {
    setCartOpen(!cartOpen);
  };

  function addToCart(index) {
    let addedProduct = allProducts[index];

      setCartItems(cartItems.concat({...addedProduct, quantity: 1}));
  }

  function removeFromCart(id) {
    let newCartArray = cartItems.filter(product => product.id !== id)
    setCartItems(newCartArray)
  }

  function incrementQuantity(id) {
    let updatedCartArray = cartItems.map(product => {
      if(product.id === id) {
        let newQuantity = product.quantity + 1
        return {...product, quantity: newQuantity}
      } else{
        return product
      }
    })
    setCartItems(updatedCartArray);
  }

  function decrementQuantity(id) {
    let updatedCartArray = cartItems.map(product => {
      if(product.id === id) {
        let newQuantity = product.quantity - 1
        return {...product, quantity: newQuantity}
      } else{
        return product
      }
    })
    setCartItems(updatedCartArray)
  }

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        const productData = data.products.slice(0,10)
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
      <ShoppingCart 
        cartOpen={cartOpen} 
        toggleCartOpen={toggleCartOpen} 
        cartItems={cartItems} 
        removeFromCart={removeFromCart} 
        allProducts={allProducts} 
        incrementQuantity={incrementQuantity}
        decrementQuantity={decrementQuantity}/>
      <div className="App">
        <Routes>
          <Route path='/shopping-cart' element={<Home />} />
          <Route path='/shopping-cart/shop' element={<Shop addToCart={addToCart} allProducts={allProducts} productsLoaded={productsLoaded} cartItems={cartItems}/>} />
          <Route path='/shopping-cart/about' element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
