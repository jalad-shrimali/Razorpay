import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./OrderPage.css";
import HeadPhone from "./assets/hd.jpg";

const OrderPage = () => {
  const [orderDetails, setOrderDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Dynamically load Razorpay script when the component is mounted
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // Function to handle the ordering logic
  const handleOrder = async () => {
    setIsLoading(true);
    setError(null);

    try {
      // Sending a POST request to the API
      const response = await fetch(
        "http://localhost:9090/api/payment/create-order?productId=123",
        {
          method: "POST",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to create order");
      }

      // Parse the response JSON
      const data = await response.json();
      console.log(data);
      // Update state with the order details
      setOrderDetails({
        orderId: data.orderId,
        amount: data.product.price,
      });
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePayment = () => {
    if (!orderDetails) return;

    const options = {
      key: "rzp_test_HF2lHcvkbTMVX6",
      amount: orderDetails.amount * 100,
      currency: "INR",
      name: "Jalad Shrimali",
      description: "Test Transaction",
      order_id: orderDetails.orderId,
      handler: function (response) {
        navigate("/payment-success", {
          state: {
            paymentId: response.razorpay_payment_id,
            orderId: response.razorpay_order_id,
            signature: response.razorpay_signature,
          },
        });

        fetch(
          `http://localhost:9090/api/payment/updatePaymentDetails?payment_id=${response.razorpay_payment_id}&order_id=${response.razorpay_order_id}&signature=${response.razorpay_signature}`,
          { method: "GET" }
        );
      },
      prefill: {
        name: "Jalad Shrimali",
        email: "jaladshrimali18@gmail.com",
        contact: "XXXXXXXXXX",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp1 = new window.Razorpay(options);

    console.log("RZPL: ", rzp1);
    rzp1.open();
  };

  return (
    <div className="order-container">
      <div className="order-box">
        <h1 className="order-title">Order Your Product</h1>

        <div className="product-container">
          <div className="product-image">
            <img src={HeadPhone} alt="Wireless Headphones" />
          </div>
          <div className="product-details">
            <h2 className="product-name">JBL TUNE 520BT</h2>
            <p className="product-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="product-price">Price: ₹999</p>
            <button
              className="order-button"
              onClick={handleOrder}
              disabled={isLoading}
            >
              {isLoading ? "Ordering..." : "Order Wireless Headphones"}
            </button>
          </div>
        </div>

        {error && <p className="error-message">{error}</p>}

        {orderDetails && (
          <div className="order-summary">
            <h3 className="order-summary-title">Order Summary</h3>
            <p>
              <strong>Order ID:</strong> {orderDetails.orderId}
            </p>
            <p>
              <strong>Amount:</strong> ₹{orderDetails.amount}
            </p>

            {/* Payment Button */}
            <button className="pay-button" onClick={handlePayment}>
              Pay Now with Razorpay
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderPage;
