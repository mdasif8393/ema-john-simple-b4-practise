import React from 'react';
import './Cart.css'

const Cart = (props) => {
    console.log(props.cart);
    const cart = props.cart;
    console.log(cart);
    const total = cart.reduce( (total, cart) => total + cart.price, 0);
    console.log(total);
    return (
        <div>
            <h1>Order Summery</h1>
            <h3>Items orderes: {cart.length}</h3>
            <p>Items: ${total}</p>
        </div>
    );
};

export default Cart;