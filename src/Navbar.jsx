import React,{useState,useEffect} from 'react';
import { NavLink} from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./Navbar.css"; // Assuming you have a CSS file for styling
function Navbar() {
   const navigate = useNavigate();
    const [isSearchActive, setSearchActive] = useState(false);
    const [isButtonHovered, setButtonHovered] = useState(false);
    const [data, setData] = useState([]);


    const [searchTerm, setSearchTerm] = useState('');  // Default search term
    const [results, setResults] = useState([]);
    
    
    

    const handleSearchClick = (event) => {
      event.preventDefault(); // Prevent default link behavior
      setSearchActive(true);
    };
  
    const handleSearchClose = () => {
      setSearchActive(false);
    };

    const handleSearchSubmits = async () => {
      if (searchTerm==undefined) {
        console.error('Search term is empty');
        return;
      }
      try {
        console.log(searchTerm);
        const response = await axios.get('http://localhost:8080/api/search', {
          params: { term: searchTerm },
        });
        
        console.log(response.data); // Check if you are getting the correct response
        setResults(response.data);
       
        
        // Directly pass the results to navigate
        navigate('/latest', { state: {searchList : (response.data) } });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

      const handleButtonMouseEnter = () => {
        setButtonHovered(true);
      };
    
      const handleButtonMouseLeave = () => {
        setButtonHovered(false);
      };
     

  return (
    <> 
    <div className="navbar-welcome">
       
    <span className="welcome-text">Welcome to our store</span>
  </div>
    
   {!isSearchActive ? ( 
    <nav className="navbar container">
      <div className="navbar-left">
       
        <span className="brand-name">Store</span>
        <div className="nav-links">
        <NavLink  to="/" style={({ isActive }) => ({
      borderBottom: isActive ? '2px solid black' : 'none',
    })} className="nav-link" >
        Home
      </NavLink>
      <NavLink to="/catelog" style={({ isActive }) => ({
      borderBottom: isActive ? '2px solid black' : 'none',
    })} className="nav-link" >
        Catalog
      </NavLink>
      <NavLink to="/contact" style={({ isActive }) => ({
      borderBottom: isActive ? '2px solid black' : 'none',
    })} className="nav-link" >
        Contact
      </NavLink>
         
        </div>
      </div>
      <div className="Navbar-center">
       {!isSearchActive ? (<span className='navbar-greeting'>
        <i className="bi bi-twitter-x"></i>
        <i className="bi bi-facebook"></i>
        <i className="bi bi-youtube"></i>

        </span>  ) :
          (
        //   <div className="big-search-container container">
        //   <input
        //     type="text"
        //     className="big-search-bar"
        //     value={searchTerm}
        //     onChange={(e) => setSearchTerm(e.target.value)}
        //     placeholder="Search....."
        //   />
  
        //    <button
        //       className="search-button"
        //       //  onClick={handleSearchSubmits}
        //       onMouseEnter={handleButtonMouseEnter}
        //       onMouseLeave={handleButtonMouseLeave}
        //     >
        //       {isButtonHovered ? <i className="bi bi-search searching"></i> : "Search"}
        //     </button> 
        //   <button className="search-button" onClick={handleSearchSubmits}>
        //       Search
        //     </button>
        //   <button className="close-search" onClick={handleSearchClose}>
        //     &times;
        //   </button>
        // </div>
        <p></p>
         )}
        
      </div>
      <div className="navbar-right">
     
        
        <div className="icons">
        <NavLink to=""  className="nav-icon " >
         <i className=" bi bi-search" onClick={handleSearchClick} ></i>
         
      </NavLink>
         
      <NavLink to="/profile" style={({ isActive }) => ({
      borderBottom: isActive ? '2px solid black' : 'none',
    })} className="nav-icon " >
         <i className="bi bi-person"></i>
         
      </NavLink>

      <NavLink to="/cart" style={({ isActive }) => ({
      borderBottom: isActive ? '2px solid black' : 'none',
    })}
       className="nav-icon "  >
          <i className="bi bi-cart"></i>
          
      </NavLink>

      
          
          
        </div>
      </div>
      
    </nav>
   ):(
    <div className="big-search-container ">
          <input
        type="text"
        className="big-search-bar"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        autoFocus
      />

     <button
        className="search-button"
          onClick={handleSearchSubmits}
        onMouseEnter={handleButtonMouseEnter}
        onMouseLeave={handleButtonMouseLeave}
      >
        {isButtonHovered ? <i className="bi bi-search"></i> : "Search"}
      </button> 
    <button className="close-search" onClick={handleSearchClose}>
      &times;
    </button>
  </div>
   )}
    
    </>
  );
}

export default Navbar;

