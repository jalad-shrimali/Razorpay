import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./PaymentSuccessPage.css";

const PaymentSuccessPage = () => {
  const location = useLocation();
  const { paymentId, orderId, signature } = location.state || {};

  useState(() => {
    fetch(
      `http://localhost:9090/api/payment/updatePaymentDetails?payment_id=${paymentId}&order_id=${orderId}&signature=${signature}`,
      { method: "GET" }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to update payment details");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="payment-success-container">
      <div className="payment-success-box">
        <h1>Payment Successful!</h1>
        <p className="success-message">
          Thank you for your payment. Your transaction has been successfully
          completed.
        </p>

        <div className="order-details">
          <h3>Order Details</h3>
          <p>
            <strong>Order ID:</strong> {orderId}
          </p>
          <p>
            <strong>Payment ID:</strong> {paymentId}
          </p>
          <p>
            <strong>Signature:</strong> {signature}
          </p>
        </div>

        <div className="action-button-container">
          <button
            className="go-home-button"
            onClick={() => (window.location.href = "/")}
          >
            Go to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccessPage;
