import { Link } from "react-router-dom";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import './NavBar.css';
import { useState } from "react";

function NavBar(props) {
    const {toggleCartOpen, cartItems} = props;
    const [numItemsInCart, setNumItemsInCart] = useState(0)
    const [cartEmpty, setCartEmpty] = useState(false)
  
    
    useEffect(() => { 
        let total = 0
        function updateCartItems() {    
            if (cartItems.length == 0) {
                setCartEmpty(true)
            }
            else{
                setCartEmpty(false)
   
                for(let i = 0; i < cartItems.length; i++) {
                    total += cartItems[i].quantity;
                }
            }
        }
        updateCartItems()
        setNumItemsInCart(total)
    },[cartItems])
    


    return (
        <div className="nav-bar">
            <ul className="nav-link-list">
                <li><Link className="nav-link" to='/shopping-cart'>Home</Link></li>
                <li><Link className="nav-link" to='/shopping-cart/shop'>Shop</Link></li>
                <li><Link className="nav-link" to='/shopping-cart/about'>About</Link></li>
            </ul>
            <div className="cart-icon-container" onClick={toggleCartOpen}>
                <FontAwesomeIcon icon={faCartShopping} className="cart-icon" />
                {!cartEmpty && <div className="items-in-cart">{numItemsInCart}</div>}
            </div>
        </div>
    )
}

export default NavBar