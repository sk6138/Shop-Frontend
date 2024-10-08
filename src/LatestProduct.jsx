import React from 'react'
import ProductCard from './ProductCard'
import './Home.css'
import Navbar from './Navbar';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';

export default function LatestProduct() {
  const location = useLocation();
  const result = location.state?.results || []; 
  console.log("latest product");
  console.log(result);
  return (
    <div>

<Navbar/>
       <div className="cardContainer">
      <h3>Featured Books</h3>
      <div className="Feature-card">
      {/*  */}
      {result.map((item, index) => (
        <div className="carddiv">

                <ProductCard  detail={item} title="notebooks"/>
                </div>
            ))}
           
           
           
      </div>
      {/* <div className="CardButton"
      onClick={goto}>
      <Button  title="Books"/>
      </div> */}
      
      </div>
      <Footer/>
      
    </div>
  )
}
