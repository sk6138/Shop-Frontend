import React from 'react'
import './Login.css'
import { motion } from 'framer-motion';

export default function Login() {
  return (
    <div className="login-page">
    <div className="login-content">
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
        >
          Login
        </motion.button>
      </motion.div>
    </div>
  </div>
  )
}
