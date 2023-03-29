import './ShoppingCart.css'

function CartItem(props) {
    const{ product, handleRemove, handleIncrement, handleDecrement } = props;

    function handleRemoveClick() {
        handleRemove(product)
    }

    function handleIncrementClick () {
        handleIncrement(product)
    }

    function handleDecrementClick () {
        if (product.quantity > 1) {
            handleDecrement(product)
        }
        else {
            handleRemove(product)
        }
    }

    return (
        <div className="cart-item-container">
            <div className="cart-item-top-row">
                <img className="cart-thumbnail" src={product.images[0]} alt={product.title}></img>
                <div className="top-row-right">
                    <div className="cart-title">{product.title}</div>
                    <div className="cart-price">${product.price}</div>
                </div>    
            </div>
            <div className="quantity-container">
                <button className="quantity-button" onClick={handleDecrementClick}>-</button>
                <div className='quantity-number'>{product.quantity}</div>
                <button className="quantity-button" onClick={handleIncrementClick}>+</button>
            </div>
            <button className='remove-button' onClick={handleRemoveClick}>Remove</button>

        </div>
    )
}

export default CartItem;