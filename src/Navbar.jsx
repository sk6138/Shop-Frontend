import React,{useState} from 'react';
import { NavLink} from 'react-router-dom';

import 'bootstrap-icons/font/bootstrap-icons.css';
import "./Navbar.css"; // Assuming you have a CSS file for styling
import LoginButton from './LoginButton';
function Navbar() {

    const [isSearchActive, setSearchActive] = useState(false);
    const [isButtonHovered, setButtonHovered] = useState(false);
    

    const handleSearchClick = (event) => {
      event.preventDefault(); // Prevent default link behavior
      setSearchActive(true);
    };
  
    const handleSearchClose = () => {
      setSearchActive(false);
    };

    const handleSearchSubmit = () => {
        console.log("Search submitted");
        // Add search functionality here
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
      <NavLink to="/catalog" style={({ isActive }) => ({
      borderBottom: isActive ? '2px solid black' : 'none',
    })} className="nav-link" >
        Catalog
      </NavLink>
      <NavLink to="/contact" style={({ isActive }) => ({
      borderBottom: isActive ? '2px solid black' : 'none',
    })} className="nav-link" >
        Contact
      </NavLink>
          {/* <a href="/">Home</a>
          <a href="/catalog">Catalog</a>
          <a href="/contact">Contact</a> */}
        </div>
      </div>
      <div className="Navbar-center">
       {!isSearchActive ? (<span className='navbar-greeting'>
        <i className="bi bi-twitter-x"></i>
        <i className="bi bi-facebook"></i>
        <i className="bi bi-youtube"></i>

        </span>  ) :
        (
          <div className="big-search-container container">
          <input
            type="text"
            className="big-search-bar"
            placeholder="Search for anything..."
            autoFocus
          />
  
           <button
              className="search-button"
              onClick={handleSearchSubmit}
              onMouseEnter={handleButtonMouseEnter}
              onMouseLeave={handleButtonMouseLeave}
            >
              {isButtonHovered ? <i className="bi bi-search searching"></i> : "Search"}
            </button> 
          {/* <button className="search-button" onClick={handleSearchSubmit}>
              Search
            </button> */}
          <button className="close-search" onClick={handleSearchClose}>
            &times;
          </button>
        </div>
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
      placeholder="Search for anything..."
      autoFocus
    />

     <button
        className="search-button"
        onClick={handleSearchSubmit}
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

