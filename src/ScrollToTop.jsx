import React, { useState, useEffect } from 'react';


export default function ScrollToTop() {
     const [isVisible, setIsVisible] = useState(false);
     const [isButtonHovered, setButtonHovered] = useState(false);
    const handleButtonMouseEnter = () => {
        setButtonHovered(true);
      };
    
      const handleButtonMouseLeave = () => {
        setButtonHovered(false);
      };

    // Show the button when the user scrolls down 300px
    const toggleVisibility = () => {
      if (window.scrollY  > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
  
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth', // Smooth scroll to top
      });
    };
  
    useEffect(() => {
      window.addEventListener('scroll', toggleVisibility);
      return () => {
        window.removeEventListener('scroll', toggleVisibility);
      };
    }, []);
  
    return (
      <div className='hii'>
       
        {isVisible && (
          <button
            onClick={scrollToTop}
            onMouseEnter={handleButtonMouseEnter}
            onMouseLeave={handleButtonMouseLeave}
            style={{
                width:'5%',
                height:'5%',
                position: 'fixed',
                bottom: '5%',
                right: '5%',
                // padding: '1% 1%',
                fontSize: '1rem',
                backgroundColor: 'black',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                zIndex: '1000', // Ensure the button is on top
              }}
            
          >
          {isButtonHovered ? <i className="bi bi-arrow-up-circle"></i> : <i className="bi bi-arrow-up"></i> }  
          
          </button>
        )}
      </div>
    );
}

