import React from 'react'
import { Link } from 'react-router-dom';
import './Catelog.css';
import Navbar from './Navbar';
import Footer from './Footer';


export default function Catelog() {
  return (
   
    <div>
    <Navbar/>
       <div className="product-type-container">
      <h1 className="title">Explore Our Product Categories</h1>
      <div className="product-list">
        <div className="product-item">
          <Link to="/books">
            <div className="product-icon">
              📚
            </div>
            <h2>Books</h2>
            <p>Browse a wide variety of books from different genres.</p>
          </Link>
        </div>
        <div className="product-item">
          <Link to="/notebooks">
            <div className="product-icon">
              📒
            </div>
            <h2>Notebooks</h2>
            <p>Find notebooks for school, work, or personal use.</p>
          </Link>
        </div>
        <div className="product-item">
          <Link to="/accesaries">
            <div className="product-icon">
              ✏️
            </div>
            <h2>Study Accessories</h2>
            <p>Get all the accessories you need for effective studying.</p>
          </Link>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
   
  )
}
