// import React, { useState } from 'react';
// import axios from 'axios';
// import { v4 as uuidv4 } from 'uuid';


// const PayUForm = () => {
  
//   const [paymentData, setPaymentData] = useState(null);
//   const [payuUrl, setPayuUrl] = useState(null);
//   const txnid = `TXN${uuidv4()}`;
//   console.log(txnid);

//   const createPayment = async () => {
//     const response = await axios.post('https://shop-backend-production-d74a.up.railway.app/api/payu/create-payment', {
//       txnId: txnid,   // Unique transaction ID (generate this dynamically)
//       amount: '500',       // Amount in INR
//       productInfo: 'Test Product',
//       firstName: 'John',
//       email: 'john@example.com',
//       phone: '9876543210'
//     });

//     setPaymentData(response.data);

//     // Get the PayU URL
//     const payuResponse = await axios.get('https://shop-backend-production-d74a.up.railway.app/api/payu/payu-url');
//     setPayuUrl(payuResponse.data);
//   };

//   const submitPaymentForm = () => {
//     if (!paymentData || !payuUrl) return null;

//     const form = document.createElement('form');
//     form.method = 'POST';
//     form.action = payuUrl;

//     Object.keys(paymentData).forEach(key => {
//       const input = document.createElement('input');
//       input.type = 'hidden';
//       input.name = key;
//       input.value = paymentData[key];
//       form.appendChild(input);
//     });

//     document.body.appendChild(form);
//     form.submit();
//   };

//   return (
//     <div>
//       <button onClick={createPayment}>Create Payment</button>
//       {paymentData && (
//         <button onClick={submitPaymentForm}>Proceed to PayU</button>
//       )}
//     </div>
//   );
// };

// export default PayUForm;
import React from 'react'

export default function PayUForm() {
  return (
    <div>
      
    </div>
  )
}
