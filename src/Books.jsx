import React from 'react'
import ProductCard from './ProductCard'
import './Home.css'
import  { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Books() {
    
   const navigate = useNavigate();
     const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      // Call the API when the component mounts https://www.dbooks.org/api/recent
      axios.get('http://localhost:8080/api/books/all')
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
    
    const items = data.books;
    console.log(data);

    const goto =() =>{
       navigate('/productlists',{ state: { list: items}  });
    }
   
   

  return (
    <div>
        <Navbar/>
       <div className="cardContainer">
      <h3>Featured Books</h3>
      <div className="Feature-card">
      {/*  */}
      {data.map((item, index) => (
        <div className="carddiv">

                <ProductCard  detail={item} title="books"/>
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
