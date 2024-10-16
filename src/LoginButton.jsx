// import React from "react";
// import { useAuth0 } from "@auth0/auth0-react";


// const LoginButton = () => {
//   const  loginWithRedirect  = useAuth0();

//   return <button onClick={() => loginWithRedirect()}>Log In</button>;
// };

// export default LoginButton;

import {React,useState} from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from 'react-router-dom';
import './Login.css'
import { motion } from 'framer-motion';

const LoginButton = (props) => {

  const [isLoggedIn, setIsLoggedIn] = useState(props.title);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);
  const navigate = useNavigate();
  const {
    isAuthenticated,
    isLoading,
    loginWithRedirect,
    error,
  } = useAuth0();

  const goto =() =>{
    navigate('/profile');
 }

  if (isLoading) {
    return <button disabled>Loading...</button>;
  }

  if (error) {
    console.error("Auth0 Error:", error);
    return <button disabled>Error Loading Auth0</button>;
  }

  

  return (

  //   <div className="login-page">
  //   <div className="login-content">
  //     <motion.div 
  //       initial={{ opacity: 0, y: 50 }}
  //       animate={{ opacity: 1, y: 0 }}
  //       transition={{ duration: 0.8 }}
  //       className="login-box"
  //     >
  //       <h1>Welcome Back!</h1>
  //       <p>Please Login in to continue</p>
  //       <motion.button
  //         whileHover={{ scale: 1.1 }}
  //         whileTap={{ scale: 0.9 }}
  //         className="login-button"
  //         type="button"
  //         onClick={(loginWithRedirect)}
  //       >
  //         Log In
  //       </motion.button>
  //     </motion.div>
  //   </div>
  // </div>
  //   // <button onClick={(loginWithRedirect)}>
  //   //   Log In
  //   // </button>

  <div className="login-page">
  <div className="login-content">
    {isLoggedIn ? (
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="login-box"
      >
        <h1>Goodbye!</h1>
        <p>We hope to see you soon.</p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="login-button"
          type="button"
          onClick={handleLogout}
        >
          Log Out
        </motion.button>
      </motion.div>
    ) : (
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="login-box"
      >
        <h1>Welcome Back!</h1>
        <p>Please Login in to continue</p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="login-button"
          type="button"
          onClick={handleLogin}
        >
          Log In
        </motion.button>
      </motion.div>
    )}
  </div>
</div>
    
  );
};

export default LoginButton;
