
import React, { useState } from 'react';
import './CheckOutForm.css'




const CheckoutForm = ({ totalAmount, onHideForm, onSubmitForm }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmitForm(formData); 
        setFormData({
            name: '',
            email: '',
            address: '',
        });
    };

    return (
        <div className="checkout-form">
            <h2>Fill details</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleInputChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleInputChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Address</label>
                    <textarea className="form-control" id="address" name="address" value={formData.address} onChange={handleInputChange} rows="3" required></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary">Place Order</button>
                <button type="button" className="btn btn-secondary" onClick={onHideForm}>Cancel</button>
            </form>
        </div>
    );
};

export default CheckoutForm;















