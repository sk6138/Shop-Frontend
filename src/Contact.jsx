// import React from 'react'
// import Navbar from './Navbar'
// import Footer from './Footer'
// import './Contact.css'

// export default function Contact() {
//   return (
//     <div>
//         <Navbar/>
//         <div className="contact-page">
//       <div className="contact-header">
//         <h1>Contact Us</h1>
//         <p>We'd love to hear from you! Whether you have questions about our products or feedback, feel free to reach out.</p>
//       </div>

//       <div className="contact-form-container">
//         <form className="contact-form">
//           <div className="form-group">
//             <label htmlFor="name">Name</label>
//             <input type="text" id="name" placeholder="Your full name" required />
//           </div>

//           <div className="form-group">
//             <label htmlFor="email">Email</label>
//             <input type="email" id="email" placeholder="Your email address" required />
//           </div>

//           <div className="form-group">
//             <label htmlFor="subject">Subject</label>
//             <input type="text" id="subject" placeholder="Subject of your message" required />
//           </div>

//           <div className="form-group">
//             <label htmlFor="message">Message</label>
//             <textarea id="message" rows="5" placeholder="Your message..." required></textarea>
//           </div>

//           <div className="form-group">
//             <button type="submit" className="submit-btn">Send Message</button>
//           </div>
//         </form>
//       </div>

//       <div className="contact-info">
//         <h2>Contact Information</h2>
//         <p><strong>Email:</strong> support@notebookshop.com</p>
//         <p><strong>Phone:</strong> +1 234 567 890</p>
//         <p><strong>Address:</strong> 123 Study Lane, Learning City, ABC 12345</p>
//       </div>
//     </div>
//        <Footer/>
//     </div>
//   )
// }

import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css';
import Swal from 'sweetalert2';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send form data to the backend API
      const response = await axios.post('https://shop-backend-production-d74a.up.railway.app/api/contact/post', formData);
      
      // Clear form and show success message
      setFormData({
        
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      Swal.fire({
        title: 'Success!',
        text: `Message sent successfully! `,
        icon: 'success',
        showConfirmButton: false,
        timer: 4000, // Auto-close after 2 seconds
        toast: true, // Make it a small notification
        position: 'top-right'
      });

    } catch (error) {
      console.error('There was an error sending the message:', error);
      Swal.fire({
        title: 'Error!',
        text: `Failed to send message. Please try again.`,
        icon: 'error',
        showConfirmButton: false,
        timer: 4000, // Auto-close after 2 seconds
        toast: true, // Make it a small notification
        position: 'top-right'
      });
      
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you! Whether you have questions about our products or feedback, feel free to reach out.</p>
      </div>

      <div className="contact-form-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input 
              type="text" 
              id="name" 
              placeholder="Your full name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              placeholder="Your email address" 
              value={formData.email} 
              onChange={handleChange} 
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input 
              type="text" 
              id="subject" 
              placeholder="Subject of your message" 
              value={formData.subject} 
              onChange={handleChange} 
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea 
              id="message" 
              rows="5" 
              placeholder="Your message..." 
              value={formData.message} 
              onChange={handleChange} 
              required 
            />
          </div>

          <div className="form-group">
            <button type="submit" className="submit-btn">Send Message</button>
          </div>
        </form>
       
      </div>

      <div className="contact-info">
        <h2>Contact Information</h2>
        <p><strong>Email:</strong> support@notebookshop.com</p>
        <p><strong>Phone:</strong> +1 234 567 890</p>
        <p><strong>Address:</strong> 123 Study Lane, Learning City, ABC 12345</p>
      </div>
    </div>
  );
};

export default Contact;

