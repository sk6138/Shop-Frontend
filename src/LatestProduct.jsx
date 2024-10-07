import React from 'react'
import ProductCard from './ProductCard'
import './Home.css'
import Navbar from './Navbar';
import Footer from './Footer';

export default function LatestProduct(props) {
  const data = props.data;
  return (
    <div>

<Navbar/>
       <div className="cardContainer">
      <h3>Featured Books</h3>
      <div className="Feature-card">
      {/*  */}
      {data.map((item, index) => (
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
