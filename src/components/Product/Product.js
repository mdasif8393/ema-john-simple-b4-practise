import React from 'react';
import './Product.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faCoffee } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    return (
        <div className="product-container">
            <div>
                <img src={props.product.img} alt="" />
            </div>
            

            <div>
                <h3>{props.product.name}</h3>
                <p><small>by: {props.product.seller}</small></p>
                <p>${props.product.price}</p>
                <p><small>Only {props.product.stock} items left-Order soon</small></p>
                <button onClick={ () => props.handleAddProduct(props.product)}><FontAwesomeIcon icon={faCartPlus} />add to cart</button>
            </div>
        </div>
    );
};

export default Product;