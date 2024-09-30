import React from 'react';
import { useNavigate } from 'react-router-dom';

function Success() {
  const navigate = useNavigate();

  const handleContinueShopping = () => {
    navigate('/'); // Redirect to the shop or home page
  };

  return (
    <div style={styles.container}>
      <h1>Payment Successful!</h1>
      <p>Thank you for your purchase. Your transaction has been successfully processed.</p>
      <p>An email receipt has been sent to your email address.</p>
      <button onClick={handleContinueShopping} style={styles.button}>Continue Shopping</button>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '50px',
    fontFamily: 'Arial, sans-serif'
  },
  button: {
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    marginTop: '20px'
  }
};

export default Success;

