import React, { useState } from "react";
import axios from "axios";
import './Profiledata.css'

export default function Profiledata() {
    const [fullName, setFullName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [image, setImage] = useState(null);
    const [phoneOtp, setPhoneOtp] = useState('');
    const [emailOtp, setEmailOtp] = useState('');
    const [isPhoneVerified, setIsPhoneVerified] = useState(false);
    const [isEmailVerified, setIsEmailVerified] = useState(false);
    const [progress, setProgress] = useState(0);

     // Send OTP request to the backend for phone
  // const sendPhoneOtp = () => {
  //   axios.post('localhost:8080/api/sendPhoneOtp', { 'phone' : (phone)  })
  //     .then(response => {
  //       alert('OTP sent to phone!');
  //     }).catch(error => {
  //       console.log(error);
  //       alert('Error sending OTP.');
  //     });
  // };

  const sendPhoneOtp = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/sendPhoneOtp', 
        {
          "phone": phone
        },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      
      console.log(response.data);  // Handle the response data here
    } catch (error) {
      console.error('Error sending OTP:', error);  // Handle the error here
    }
  };


  

  // Verify OTP for phone
  const verifyPhoneOtp = async () => {
    const response = await axios.post('http://localhost:8080/api/verifyPhoneOtp', { "phone": phone, "otp": phoneOtp }, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        if (response.data.success) {
          setIsPhoneVerified(true);
          updateProgress();
        } else {
          alert('Incorrect OTP');
        }
      }).catch(error => {
        alert('Error verifying OTP.');
      });
  };

  // Send OTP request to the backend for email
  const sendEmailOtp = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/sendEmailOtp', 
        {
          "Email": email
        },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      
      console.log(response.data);  // Handle the response data here
    } catch (error) {
      console.error('Error sending OTP:', error);  // Handle the error here
    }
  };

  // Verify OTP for email
  const verifyEmailOtp =  async () => {
    const response = await axios.post('http://localhost:8080/api/verifyEmailOtp', { "Email": email, "otp": emailOtp }, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        if (response.data.success) {
          setIsEmailVerified(true);
          updateProgress();
        } else {
          alert('Incorrect OTP');
        }
      }).catch(error => {
        alert('Error verifying OTP.');
      });
  };

  const handleSave = (type) => {
    alert(`${type} saved successfully!`);
    updateProgress();
  };

  const updateProgress = () => {
    let completedFields = 0;
    if (fullName) completedFields++;
    if (phone && isPhoneVerified) completedFields++;
    if (email && isEmailVerified) completedFields++;
    if (address) completedFields++;
    if (image) completedFields++;
    
    const newProgress = (completedFields / 5) * 100;
    setProgress(newProgress);
  };
  return (
    <div>
      <div className="containe">
      <h1>Profile Information</h1>

      <div className="form-group">
        <label>Full Name:</label>
        <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} />
        <button onClick={() => handleSave('Full Name')}>Save</button>
      </div>

      <div className="form-group">
        <label>Phone Number:</label>
        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
        <button onClick={sendPhoneOtp}>Send OTP</button>
        <input type="text" placeholder="Enter OTP" value={phoneOtp} onChange={(e) => setPhoneOtp(e.target.value)} />
        <button onClick={verifyPhoneOtp}>Verify OTP</button>
      </div>
      {isPhoneVerified && <p>Phone verified!</p>}

      <div className="form-group">
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <button onClick={sendEmailOtp}>Send OTP</button>
        <input type="text" placeholder="Enter OTP" value={emailOtp} onChange={(e) => setEmailOtp(e.target.value)} />
        <button onClick={verifyEmailOtp}>Verify OTP</button>
      </div>
      {isEmailVerified && <p>Email verified!</p>}

      <div className="form-group">
        <label>Address:</label>
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
        <button onClick={() => handleSave('Address')}>Save</button>
      </div>

      <div className="form-group">
        <label>Upload Image:</label>
        <input type="file" onChange={(e) => setImage(e.target.files[0])} />
        <button onClick={() => handleSave('Image')}>Save</button>
      </div>

      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      </div>
      <p>{progress}% of your profile is complete</p>
    </div>
    </div>
  )
}






