import React from 'react'
// import './BookDetails.css'
import styles from './BookDetails.module.css';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import ScrollToTop from './ScrollToTop';
import  { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { useAuth0 } from "@auth0/auth0-react";
import Swal from 'sweetalert2';
import { v4 as uuidv4 } from 'uuid';





export default function BookDetails(props) {
  const {
    isAuthenticated,
    isLoading,
    loginWithRedirect,
    user,
    error,
  } = useAuth0();
  const  {id}  = useParams();
  const {path} = (props.title);
  // console.log(path);
  const apiUrl = `http://localhost:8080/api/${props.title}/${id}`;
  
  const [product, setproduct] = useState();
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]); 
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [paymentData, setPaymentData] = useState(null);
  const [payuUrl, setPayuUrl] = useState(null);
  const txnid = `TXN${uuidv4()}`;
  console.log(txnid);



  // const stripePromise = loadStripe('pk_test_51Q3BhqP6fYAkdHlV6bxC8SnaW9ML3ccPLGmWOwJVLTvVDIgDOuGw7ALlfI1d1k2RprfSBBY34MZbeWFSgWuRxjry00ABINQTVf');

  
    useEffect(() => {
      // Call the API when the component mounts
      axios.get(apiUrl)
        .then(response => {
          setproduct(response.data);
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
    
  const addToCart = async () => {
    const productWithQuantity = { ...product,image :product.image, quantity, totalPrice: product.price * quantity };
    console.log(productWithQuantity);
    // Check if the product is already in the cart
    const existingProductIndex = cart.findIndex(item => item.id === productWithQuantity.id);
    
    if (existingProductIndex !== -1) {
      // Update the quantity and total price if product already exists
      const updatedCart = cart.map((item, index) =>
        index === existingProductIndex
          ? { ...item,image :item.image, quantity: item.quantity + quantity, totalPrice: (item.quantity + quantity) * item.price }
          : item
      );
     

      setCart(updatedCart);
    } else {
      try {
        console.log(product);
        console.log(user.email);
        console.log(product.image);
        console.log(product.id);
        console.log(product.name);
        console.log(product.price);
        console.log(quantity);

         await axios.post('http://localhost:8080/api/cart/add', {
          userId: (user.email),
          image: product.image,
          productId: product.id,
          productName: product.name,
          price: product.price,
          quantity: quantity,
        });
        console.log("ok");
        Swal.fire({
          title: 'Success!',
          text: `${product.productName} has been added to your cart!`,
          icon: 'success',
          showConfirmButton: false,
          timer: 4000, // Auto-close after 2 seconds
          toast: true, // Make it a small notification
          position: 'top-right'
        });

        
      } catch (e) {
        
        console.log(e);
      }
     
      setCart((prevCart) => [...prevCart, productWithQuantity]);
    }
  };

  // Handle navigation to the cart page and pass the cart array
  const handleGoToCart = () => {
    navigate('/cart', { state: { cart } }); // Send the array of objects (cart) to CartPage
  };

 
    const createPayment = async () => {
      const total = (product.price*quantity);
      const response = await axios.post('http://localhost:8080/api/payu/create-payment', {
        txnId: txnid,   // Unique transaction ID (generate this dynamically)
        amount: total,       // Amount in INR
        productInfo: product.name,
        firstName: 'John',
        email: 'john@example.com',
        phone: '9876543210'
      });
  
      setPaymentData(response.data);
  
      // Get the PayU URL
      const payuResponse = await axios.get('http://localhost:8080/api/payu/payu-url');
      setPayuUrl(payuResponse.data);


      
    };
  

  const submitPaymentForm = () => {
    if (!paymentData || !payuUrl) return null;

    const form = document.createElement('form');
    form.method = 'POST';
    form.action = payuUrl;

    Object.keys(paymentData).forEach(key => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = key;
      input.value = paymentData[key];
      form.appendChild(input);
    });

    document.body.appendChild(form);
    form.submit();
  };

  // const handleCheckout =  () => {
   
  //   if (isAuthenticated) {
  //  // Initialize Stripe
   
  // //  const total = (product.price*quantity);
  // //  if(total>0){
      
  // //  const stripe = await stripePromise;

  //  // Call backend to create a Checkout session
  // //  const { data } = await axios.post('https://shop-backend-production-d74a.up.railway.app/api/checkout/create-session', {
  // //    price: total, // Send the price or product info to the backend
  // //    name :(product.name),
  // //    description:(product.description)
  // //   });
  //   // Redirect to the Stripe-hosted payment page (session URL is returned from backend)
  //   // const result = await stripe.redirectToCheckout({
  //   //   sessionId: data.id, // The session ID returned from backend
  //   // });

  //   // if (result.error) {
  //   //   console.error(result.error.message);
  //   // }
  //   // }
  
  //   }
  //   else{
  //     navigate('/profile');
  //   }

   
      

    

    
  

  
   
 
  return (  
    <div>
<Navbar id="nav"/>
<ScrollToTop/>

   
  <div className={styles["product-page__container"]}>
    
    <h1 className={styles["product-page__title"]}>{product.name}</h1>
    <img className={styles["product-page__image"]} src={product.image} alt={product.name} />
    <p className={styles["product-page__description"]}>{product.description}</p>
    <h3 className={styles["product-page__price"]}>Price: ₹{product.price*quantity}</h3>

    <label className={styles["product-page__quantity"]}>
        Quantity:
        <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
            className={styles["product-page__input"]}
        />
    </label>

    <div className={styles["product-page__buttons"]}>
        <button className={styles["product-page__button--add"]} onClick={addToCart}>
            Add to Cart
        </button>
        <button  className={styles["product-page__button--add"]} 
        onClick={handleGoToCart}>
          Go to Cart
          </button>
        <button className={styles["product-page__button--buy"]} onClick={createPayment}>
            Buy Now
        </button>

        {paymentData && (
        <button className={styles["product-page__button--buy"]} onClick={submitPaymentForm}>Proceed to PayU</button>
      )}
        
    </div>

    
    
</div>
<Footer companyName="shop" devloper="Sahil" path="#nav"/>
</div>

)

}

