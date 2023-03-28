import './ShoppingCart.css'

function ShoppingCart({cartOpen, toggleCartOpen}) {

    let cartClass = 'shopping-cart';
    if (cartOpen) {
        cartClass = 'shopping-cart open';
    }
    return(
        <div className={cartClass}>
            <div className='cart-close-button' onClick={toggleCartOpen}>X</div>
            Cart
        </div>
    )
}

export default ShoppingCart