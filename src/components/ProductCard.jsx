import '../pages/Shop.css'

function ProductCard(props) {

    const {product, handleAddClick, cartItems } = props;

    function handleClick() {
        handleAddClick(product)
    }

    function AddButton () {
        let isInCart = false
        cartItems.forEach(item => {
            if (item.id == product.id) {
                isInCart = true
            }     
        });      
        if (isInCart === true) {
            return (
                <button className='add-to-cart-button' disabled={true}>Item in Cart</button>
            )
        } else {
            return (
                <button className='add-to-cart-button' onClick={handleClick}>Add to Cart</button>
            )
        }
    }
     
    return (
        <div className='product-card'>
            <img className='product-card-thumbnail' src={product.images[0]} alt={product.title} />
            <div className="product-info">
                <div className='product-card-title' >{product.title}</div>
                <div className='product-card-price' >${product.price}</div>
            </div>
            <AddButton />
        </div>
    )
}

export default ProductCard