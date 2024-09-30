import React from 'react'
import './ProductCard.css'
import { useNavigate } from 'react-router-dom';




export default function ProductCard(props) {
  const navigate = useNavigate(); 
  
  
  const handleCardClick = (id) => {
   const url = (props.title);
   navigate(`/${url}/${id}`, {
    state: { 
      title: url, 
      
    }
  });
    
  };

  return (
    <div key={props.detail.id}
    className="book-card"
    onClick={() => handleCardClick(props.detail.id)} // On click, navigate to the book details page
    style={{  cursor: 'pointer' }}
    >


        
            
          
       <div className="card">

        <div className="card-image-container">
          {/* <img
            src="public\DALL·E 2024-08-15 17.36.52 - A detailed 4K image of the NCERT Class X Mathematics textbook cover. The design includes a geometric pattern with mathematical symbols like triangles,.webp" // Replace with your image URL
            alt="Ncert Class X MATH"
            className="card-image"
          /> */}
          <img src={props.detail.image} alt=""
          className="card-image"
           />
          <span className="sold-out-badge">Sold out</span>
          <span className="off-badge">8% off</span>
        </div>
        <div className="card-content">
          <h4 className="product-name">{props.detail.name}</h4>
          <div className="product-prices">
            <span className="original-price">RS.{props.detail.price + 20}</span>
            <span className="discounted-price">RS.{props.detail.price}</span>
          </div>
        </div>
      </div>
    </div>
   
  )
}
