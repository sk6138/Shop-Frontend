import React from 'react'
import ProductCard from './ProductCard'
import './Home.css'
import Button from './Button'
import  { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function CardContainer(props) {
    
   const navigate = useNavigate();
     const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      // Call the API when the component mounts
      axios.get('https://shop-backend-production-d74a.up.railway.app/api/notebooks/all')
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
       <div className="cardContainer">
      <h3>Featured {props.title}</h3>
      <div className="Feature-card">
      
      {data.slice(0, 4).map((item, index) => (
        <div className="carddiv">

                <ProductCard  detail={item} title = "notebooks"/>
                </div>
            ))}
           
           
           
      </div>
      <div className="CardButton"
      onClick={goto}>
      <Button  title={props.title}/>
      </div>
      
      </div>
      </div>
   
  )
}
