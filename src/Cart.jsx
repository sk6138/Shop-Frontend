import React from 'react'
import Navbar from './Navbar'
import { useLocation } from 'react-router-dom';
import  { useState, useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const {
    isAuthenticated,
    isLoading,
    loginWithRedirect,
    user,
    error,
  } = useAuth0();
  const [loading, setLoading] = useState(true);
  const [btnloading, setbtnLoading] = useState(false);
  const location = useLocation();
  // const { cart } = location.state || { cart: [] };
  // const totalCartPrice = cart.reduce((total, item) => total + item.totalPrice, 0);
  // console.log(cart);
  let userid="sahil";
  if(isAuthenticated){
    userid = (user.email);
  }
  else{
    navigate('/profile');
  }
   
  console.log(userid);
  const url =`https://shop-backend-production-d74a.up.railway.app/api/cart/${userid}`;

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

  
  // const removecart =  (id) => {
  //   try {
  //     const response =  axios.delete(`https://shop-backend-production-d74a.up.railway.app/api/cart/remove/${id}`);
  //     console.log('Item deleted:', response.data);
  //     Swal.fire({
  //       title: 'alert!',
  //       text: `${product.productName} has been added to your cart!`,
  //       icon: 'success',
  //       showConfirmButton: true,
  //       timer: 4000, // Auto-close after 2 seconds
  //       toast: true, // Make it a small notification
  //       position: 'top-right'
  //     });
      
  //     // Show success notification or reload the cart items here
  //   } catch (error) {
  //     console.error('Error deleting the item:', error);
  //     // Show error notification here
  //   }
  
    //  }

 
    const removeCart = async (CartId) => {
      setbtnLoading(true);  // Show loading state
      try {
          // Make DELETE request to API to remove item from cart
          const response = await axios.delete(`https://shop-backend-production-d74a.up.railway.app/api/cart/remove/${CartId}`);
          if (response.status === 200) {
              // Call onRemove (optional) to update the cart in the parent component
              Swal.fire({
                title: 'Success!',
                text: `Item has been removed from your cart!`,
                icon: 'success',
                showConfirmButton: false,
                timer: 4000, // Auto-close after 2 seconds
                toast: true, // Make it a small notification
                position: 'top-right'
              });
              console.log('Item removed from cart');
          }
      } catch (error) {
          console.error('Error removing item from cart:', error);
      } finally {
          setbtnLoading(false);  // Reset loading state
      }

      
    }
   
  
  
  

  
  return (
    <div>
      <Navbar/>
       <div>
      <h1>Cart</h1>
      
      {data.length > 0 ? (
        data.map((product, index) => (
         
          <div key={index}>
            <p>Cart Id : {product.id}</p>
            <p>Product Id: {product.productId}</p>
             <p>Product Name: {product.productName}</p>
              <p>Price: ${product.price}</p>
              <p>Quantity: {product.quantity}</p>
              <p>Total Price: ${product.total}</p>
              <img src={product.image} alt={product.name} />
              <button
                onClick={() => removeCart(product.id)}  // Call removeCart with the product's ID
                disabled={btnloading}  // Disable button if loading
            >
                {btnloading ? 'Removing...' : 'Remove'}
            </button>
              <hr />
            {/* <h2>Total Cart Price: ${product.total}</h2> */}
          </div>
          
        ))
      ) : (
        <p>No products added to the cart</p>
      )}
    </div>
    </div>
  )
};
