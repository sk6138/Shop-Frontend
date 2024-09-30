import React from 'react'
import './HeroPage.css'
import { useNavigate } from 'react-router-dom';
 
import Button from './Button'

export default function HeroPage() {
  const navigate = useNavigate();
  const gotolatestproducts = () => {
    navigate('/latest',{ state: { list: items}  });
  }
  return (
    <div>
       <div className="hero-container">
      <div className="hero-content">
        <h1>Browse our latest products</h1>
       <div className="herobutton" onClick={gotolatestproducts}><Button title="" /></div>
      </div>
      
    </div>
   
    </div>
  )
}
