import React from 'react';
import { useNavigate } from 'react-router-dom';

function Cancel() {
  const navigate = useNavigate();

//   const handleRetryPayment = () => {
//     navigate('/checkout'); // Redirect to checkout page for retrying the payment
//   };

  const handleBackToHome = () => {
    navigate('/'); // Redirect to the homepage
  };

  return (
    <div style={styles.container}>
      <h1>Payment Canceled</h1>
      <p>It looks like you canceled the payment. If this was a mistake, you can retry the payment.</p>
      {/* <button onClick={handleRetryPayment} style={styles.retryButton}>Retry Payment</button> */}
      <button onClick={handleBackToHome} style={styles.homeButton}>Back to Home</button>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '50px',
    fontFamily: 'Arial, sans-serif'
  },
  retryButton: {
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    marginTop: '20px',
    marginRight: '10px'
  },
  homeButton: {
    backgroundColor: '#6c757d',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    marginTop: '20px'
  }
};

export default Cancel;
