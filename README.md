# Payment Service Implementation

This document provides an overview of the `PaymentServiceImpl` class, which handles payment processing using Razorpay in a Spring Boot application.

## Overview
The `PaymentServiceImpl` class implements the `PaymentService` interface and manages the following operations:
- Creating orders for products
- Verifying payments
- Updating payment details

## Dependencies
This service requires the following dependencies:
- Spring Boot (for Dependency Injection and Repository management)
- Razorpay SDK (for order creation and payment verification)
- JSON (for constructing Razorpay requests)
- Java Logging (for logging system events)

## Functionalities

### 1. Creating an Order
**Method:** `public OrderDetails createOrder(Long productId)`

#### **Steps:**
1. Fetches the product details from `ProductRepository`.
2. Retrieves a default user from `UserRepository`.
3. Creates an `OrderDetails` object with status **PENDING**.
4. Calls Razorpay API to generate an order and fetch the order ID.
5. Updates the `OrderDetails` object with Razorpay order ID and changes status to **CREATED**.
6. Saves the order details to the database.

### 2. Verifying a Payment
**Method:** `public boolean verifyPayment(String orderId, String paymentId, String razorpaySignature)`

#### **Steps:**
1. Constructs a payload string using `orderId` and `paymentId`.
2. Uses Razorpay’s `Utils.verifySignature()` to validate the signature.
3. Logs the verification result and returns a boolean.

### 3. Updating Payment Details
**Method:** `public boolean updatePaymentDetails(String orderId, String paymentId, String signature)`

#### **Steps:**
1. Fetches the order from `OrderRepository` using `orderId`.
2. Calls `verifyPayment()` to confirm payment authenticity.
3. If verification succeeds, updates `paymentId`, `signature`, and status to **SUCCESS**.
4. Saves updated order details to the database.
5. Returns true if the update is successful, otherwise logs a warning and returns false.

## Logging
- Uses `Logger` to log key events such as order creation, payment verification, and payment update status.
- Errors are logged at `SEVERE` level to aid debugging.

## Error Handling
- Throws `RuntimeException` when a product or user is not found.
- Logs and handles errors related to Razorpay API failures.

## Configuration
Ensure that Razorpay credentials are configured correctly in the application properties or environment variables.

## Example Usage
```java
@Autowired
private PaymentService paymentService;

OrderDetails orderDetails = paymentService.createOrder(1L);
boolean isVerified = paymentService.verifyPayment(orderDetails.getOrderId(), "pay_ABC123", "signatureXYZ");
boolean isUpdated = paymentService.updatePaymentDetails(orderDetails.getOrderId(), "pay_ABC123", "signatureXYZ");
```

## Conclusion
This service ensures seamless integration with Razorpay for handling payments. It provides functionalities for order creation, payment verification, and payment status updates with robust error handling and logging mechanisms.
