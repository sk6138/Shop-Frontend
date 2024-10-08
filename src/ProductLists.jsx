import React from 'react'
import { useLocation } from 'react-router-dom';
import ProductCard from './ProductCard';
import './ProductLists.css'
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import Navbar from './Navbar';

export default function ProductLists(props) {
const location = useLocation();
const products = location.state?.list || [];
console.log(products);
  return (
    <div>
       <Navbar id="nav"/>
       <ScrollToTop/>
      <div className="cardContainer">
      <h3>Books {props.title}</h3>
      <div className="Feature-card">
      
      {products.map((item, index) => (
        <div className="carddiv">

                <ProductCard  detail={item}/>
                </div>
            ))}
           
           
           </div>
      </div>
      <Footer companyName="shop" devloper="Sahil" path="#nav"/>
    </div>
  )
}
