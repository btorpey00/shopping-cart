import { useState } from "react"
import { useEffect } from "react"
import ProductCard from "../components/ProductCard"
import './Shop.css';

export default function Shop({ allProducts, productsLoaded }) {


    function ProductCardContainer() {
        if(productsLoaded === true) {
            let productArray = allProducts
            let productCards = productArray.map(product => <ProductCard key={product.id} product={product} />)
            return (
                <div className="product-card-container">{productCards}</div>
            )
        }
        else {
            return(
                <div>Loading...</div>
            )
        }
    }


    return (
        <div className="shop-page">
                <ProductCardContainer />
        </div>

    )
}