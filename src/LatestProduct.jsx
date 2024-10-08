// import React from 'react'
// import ProductCard from './ProductCard'
// import './Home.css'
// import Navbar from './Navbar';
// import Footer from './Footer';
// import { useLocation } from 'react-router-dom';

// export default function LatestProduct() {
//   const location = useLocation();
//   const result = location.state?.results || []; 
//   console.log("latest product");
//   console.log(result);
//   return (
//     <div>

// <Navbar/>
//        <div className="cardContainer">
//       <h3>Featured Books</h3>
//       <div className="Feature-card">
//       {/*  */}
//       {result.map((item, index) => (
//         <div className="carddiv">

//                 <ProductCard  detail={item} title="notebooks"/>
//                 </div>
//             ))}
           
           
           
//       </div>
//       {/* <div className="CardButton"
//       onClick={goto}>
//       <Button  title="Books"/>
//       </div> */}
      
//       </div>
//       <Footer/>
      
//     </div>
//   )
// }

import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ProductCard from './ProductCard';

const LatestProduct = () => {
  const location = useLocation();
  
  // Retrieve the passed results
  const result = location.state?.searchList || [];
  console.log(result);

  return (
    <>
    <div>
      <Navbar/>
      <h2>Search Results</h2>
      
        {result.length > 0 ? (
            <div className="cardContainer">
            <h3>Featured Books</h3>
            <div className="Feature-card">
            {/*  */}
            {result.map((item, index) => (
              <div className="carddiv">
      
                      <ProductCard  detail={item} title="books"/>
                      </div>
                  ))}
                 
                 
                 
            </div>
            
            
            </div>
        ) : (
          <p>No results found</p>
        )}
      

      <Footer/>
    </div>
    </>
    
  );
};

export default LatestProduct;

