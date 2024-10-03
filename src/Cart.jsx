import React from 'react'
import Navbar from './Navbar'
import { useLocation } from 'react-router-dom';
import  { useState, useEffect } from 'react';

export default function Cart() {
  const [data, setData] = useState([]);
  const {
    isAuthenticated,
    isLoading,
    loginWithRedirect,
    user,
    error,
  } = useAuth0();
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  // const { cart } = location.state || { cart: [] };
  // const totalCartPrice = cart.reduce((total, item) => total + item.totalPrice, 0);
  // console.log(cart);
  const url =`https://shop-backend-production-d74a.up.railway.app/api/cart/${user.sub}`;

  useEffect(() => {
    // Call the API when the component mounts https://www.dbooks.org/api/recent
    axios.get(url)
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching the API', error);
        setLoading(false);
      });
  }, []); // The empty dependency array ensures this runs once on component mount

  if (loading) {
    return <div>Loading...</div>;
  }
  
  // const items = data.books;
  console.log(data);
  return (
    <div>
      <Navbar/>
       <div>
      <h1>Cart</h1>
      
      {data.length > 0 ? (
        data.map((product, index) => (
          <div key={index}>
             <p>Product Name: {product.name}</p>
              <p>Price: ${product.price}</p>
              <p>Quantity: {product.quantity}</p>
              <p>Total Price: ${product.totalPrice}</p>
              <img src={product.image} alt={product.name} />
            
            <h2>Total Cart Price: ${totalCartPrice}</h2>
          </div>
          
        ))
      ) : (
        <p>No products added to the cart</p>
      )}
    </div>
    </div>
  )
}
