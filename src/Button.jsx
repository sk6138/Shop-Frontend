import { useState } from "react";
import React from 'react'
import './Button.css'

export default function Button(props) {
    const [isButtonHovered, setButtonHovered] = useState(false);
    const handleButtonMouseEnter = () => {
        setButtonHovered(true);
      };
    
      const handleButtonMouseLeave = () => {
        setButtonHovered(false);
      };
  return (
    <div>
      <button
        className="search-button"
        onMouseEnter={handleButtonMouseEnter}
        onMouseLeave={handleButtonMouseLeave}
      >
        {isButtonHovered ? <i className="bi bi-shop"></i> : `${props.title} Store`}
      </button> 
    </div>
  )
}
