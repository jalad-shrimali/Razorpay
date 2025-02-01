import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use Routes instead of Switch
import './App.css'; // Your CSS file
import OrderPage from './orderpage';
import PaymentSuccessPage from './PaymentSuccessPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Replace Switch with Routes and Route with element prop */}
        <Route path="/" element={<OrderPage />} />
        <Route path="/payment-success" element={<PaymentSuccessPage />} />
      </Routes>
    </Router>
  );
}


export default App;
