import {React,useContext} from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Navbar from "./Navbar";
import LoginButton from "./LoginButton";
import Footer from "./Footer";

const Profile = (props) => {

  

   console.log(props.userid);
  
  const { user, isAuthenticated, isLoading } = useAuth0();
  
  if (isLoading) {
    return <div>Loading ...</div>;
  }
   
  return (
    <div>
    <Navbar/>
   
    
  

   
    


  <LoginButton/>
 
    <Footer/>
    </div>
  );
};

export default Profile;
