import React from 'react';
import './Shop.css'
import Product from '../Product/Product'
import Cart from '../Cart/Cart'
import fakeData from '../../fakeData/index'
import { useState } from 'react/cjs/react.development';

const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [product, setProduct] = useState(first10);

    const [cart, setCart] = useState([]);

    const handleAddProduct = (product) => {
        const newProduct = [...cart, product];
        setCart(newProduct);
    }
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    product.map(product => <Product handleAddProduct={handleAddProduct} product={product}></Product>)
                }
             <Product product = {product}></Product>
            </div>

            <div className="cart-container">
                <Cart cart = {cart}></Cart>
            </div>
            

        </div>
    );
};

export default Shop;