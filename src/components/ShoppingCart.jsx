import { useEffect, useState } from 'react';
import CartItem from './CartItem';
import './ShoppingCart.css'

function ShoppingCart(props) {

    const {cartOpen, toggleCartOpen, cartItems, removeFromCart} = props
    const [cartTotal, setCartTotal] = useState(0);

    let cartClass = 'shopping-cart';
    if (cartOpen) {
        cartClass = 'shopping-cart open';
    }

    function handleRemove(product) {
        removeFromCart(product.id)
    }

    useEffect(() => {
        
        function updateTotal() {
            let totalCost = 0;
            for (let i = 0; i < cartItems.length; i++) {
                totalCost += cartItems[i].price * cartItems[i].quantity;
            }
            setCartTotal(totalCost);
        }
        updateTotal()

    },[cartItems])

    
    
    function ShoppingCartContainer() {
        let cartArray = cartItems.map(item => <CartItem key={item.id} product={item} handleRemove={handleRemove}/>)
        return (
            <div className='cart-container'>{cartArray}</div>
        )
    }

    
    return(
        <div className={cartClass}>
            <div className='cart-close-button' onClick={toggleCartOpen}>X</div>
            Cart
            <ShoppingCartContainer />
            <div className='cart-total'>Total: ${cartTotal}</div>
        </div>
    )
}

export default ShoppingCart