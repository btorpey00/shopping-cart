import './CartItem.css'

function CartItem(props) {
    const{ product, handleRemove } = props;

    function handleRemoveClick() {
        handleRemove(product)
        console.log(product)
    }

    return (
        <div className="cart-item-container">
            <img className="cart-thumbnail" src={product.images[0]} alt={product.title}></img>
            <div className="cart-title">{product.title}</div>
            <div className="cart-price">${product.price}</div>
            <div className="quantity-container">
                <button className="quantity-button">+</button>
                <div>{product.quantity}</div>
                <button className="quantity-button">-</button>
            </div>
            <button onClick={handleRemoveClick}>Remove</button>

        </div>
    )
}

export default CartItem;