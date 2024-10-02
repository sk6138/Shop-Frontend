// import React from "react";
// import { useAuth0 } from "@auth0/auth0-react";


// const LoginButton = () => {
//   const  loginWithRedirect  = useAuth0();

//   return <button onClick={() => loginWithRedirect()}>Log In</button>;
// };

// export default LoginButton;

import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const {
    isAuthenticated,
    isLoading,
    loginWithRedirect,
    error,
  } = useAuth0();

  if (isLoading) {
    return <button disabled>Loading...</button>;
  }

  if (error) {
    console.error("Auth0 Error:", error);
    return <button disabled>Error Loading Auth0</button>;
  }

  if (isAuthenticated) {
    return null; // Optionally, render nothing or a logout button if the user is already authenticated
  }

  return (
    <button onClick={loginWithRedirect}>
      Log In
    </button>
  );
};

export default LoginButton;
