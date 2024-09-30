import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Navbar from "./Navbar";
import LogoutButton from "./LogoutButton";
import LoginButton from "./LoginButton";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <div>
    <Navbar/>

    
    {isAuthenticated ? (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <LogoutButton/>
      </div>
      
    ):
    (
      <LoginButton/>
    )
  }
 
    </div>
  );
};

export default Profile;
