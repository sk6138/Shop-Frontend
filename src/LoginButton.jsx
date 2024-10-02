// import React from "react";
// import { useAuth0 } from "@auth0/auth0-react";


// const LoginButton = () => {
//   const  loginWithRedirect  = useAuth0();

//   return <button onClick={() => loginWithRedirect()}>Log In</button>;
// };

// export default LoginButton;

import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from 'react-router-dom';

const LoginButton = () => {
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
    <button onClick={(loginWithRedirect,goto)}>
      Log In
    </button>
    
  );
};

export default LoginButton;
