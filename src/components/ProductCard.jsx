import '../pages/Shop.css'

function ProductCard( { product }) {
    return (
        <div className='product-card'>
            <img className='product-card-thumbnail' src={product.thumbnail} alt={product.title} />
            <div className="product-info">
                <div className='product-card-title' >{product.title}</div>
                <div className='product-card-price' >${product.price}</div>
            </div>
            <button className='add-to-cart-button'>Add to Cart</button>
        </div>
    )
}

export default ProductCard