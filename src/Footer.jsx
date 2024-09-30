import React from 'react'
import './Footer.css';


export default function Footer(props) {
    
  return (
    <div>
       <footer className="footer-container">
            <div className="footer-bottom">
                <p>&copy; 2024, {props.companyName} Design and Devlop by {props.devloper} &middot; <a href="#">Privacy policy</a></p>
            </div>
          
        </footer>
    </div>
  )
}

