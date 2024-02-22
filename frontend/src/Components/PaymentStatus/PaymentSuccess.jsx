import React, { useState } from 'react';
import './PaymentSuccess.css'; // Import your CSS file for styling

export default function PaymentSuccess() {
    const [modalVisible, setModalVisible] = useState(true);

    const closeModal = () => {
        setModalVisible(false);
    };

    return (
        <>
            {modalVisible && (
                <div className="payment-success-modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>&times;</span>
                        <h2>Payment Successful!</h2>
                        <p>Thank you for your purchase.</p>
                       
                    </div>
                </div>
            )}
            <div className="payment-success-message">
    <p>Payment was successful!</p>
    <p>Your order is confirmed and will be delivered shortly.</p>
    
    <p>Your order details:</p>
    <ul>
        <li></li>
        <li>Product 2: $29.99</li>
       
    </ul>

    <p>Thank you for choosing our services!</p>
    <button className="view-orders-button">Track Order</button>
   
</div>
        </>
    );
}
