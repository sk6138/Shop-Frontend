import React from 'react'
import Navbar from './Navbar'
import { useLocation } from 'react-router-dom';

export default function Cart() {
  const location = useLocation();
  const { cart } = location.state || { cart: [] };
  const totalCartPrice = cart.reduce((total, item) => total + item.totalPrice, 0);
  console.log(cart);
  return (
    <div>
      <Navbar/>
       <div>
      <h1>Cart</h1>
      
      {cart.length > 0 ? (
        cart.map((product, index) => (
          <div key={index}>
             <p>Product Name: {product.name}</p>
              <p>Price: ${product.price}</p>
              <p>Quantity: {product.quantity}</p>
              <p>Total Price: ${product.totalPrice}</p>
            
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
