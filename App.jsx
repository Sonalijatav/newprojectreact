

// import './App.css'

import Home from './Home.jsx'
import { CartProvider } from "react-use-cart";
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ShoppingCart from './ShoppingCart.jsx';
import Cart from './Cart.jsx';
import CheckoutForm from './CheckOutForm.jsx';


const App = () => {
    const [cartItems, setCartItems] = useState([]);
    const [showForm, setShowForm] = useState(false);

    const handleBuyNow = () => {
        setShowForm(true);
    };

    const handleClearCart = () => {
        setCartItems([]);
        setShowForm(false); 
    };

    const handleFormSubmit = (formData) => {
        console.log('Form submitted from CheckoutForm:', formData);
        
        setShowForm(false); 
    };

    const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);

    return (

        <div className="App">
            {/* <Navbar/> */}
            <div className="container">


                <CartProvider>

                    <Home />
                    <Cart onBuyNow={handleBuyNow} />
                </CartProvider>
                <ShoppingCart
                    cartItems={cartItems}
                    totalAmount={totalAmount}
                    onBuyNow={handleBuyNow}
                    onClearCart={handleClearCart}

                />


                {showForm && (
                    <CheckoutForm
                        totalAmount={totalAmount}
                        onHideForm={() => setShowForm(false)}
                        onSubmitForm={handleFormSubmit}
                    />

                )}
            </div>
        </div>



    );
};

export default App;







