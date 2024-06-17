

// ShoppingCart.js
import React from 'react';
import './ShoppingCart.css'
const ShoppingCart = ({ cartItems, totalAmount, onBuyNow, onClearCart }) => {
    return (
        <div className="shopping-cart"  >
            <h1>Provide Details</h1>
            <ul>
                {cartItems.map((item, index) => (
                    <li key={index}>
                        {item.name} - {item.price} x {item.quantity}
                    </li>
                ))}
            </ul>
            
            
            <button className="btn btn-danger" onClick={onClearCart}>Clear Form</button>
        </div>
    );
};

export default ShoppingCart;
