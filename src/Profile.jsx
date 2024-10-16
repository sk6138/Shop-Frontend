import {React,useContext} from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Navbar from "./Navbar";
import LogoutButton from "./LogoutButton";
import LoginButton from "./LoginButton";
import { GlobalContext } from './GlobalContext'; 
import Footer from "./Footer";

// import { GlobalContext } from './GlobalProvider';
// import { useContext ,useState} from "react";

const Profile = (props) => {

  const { globalVar, setGlobalVar } = useContext(GlobalContext);
  // console.log(globalVar);

   console.log(props.userid);
  // window.globalThis = sessionStorage.getItem('globalthis'); 
  //  console.log(window.globalThis);
  const { user, isAuthenticated, isLoading } = useAuth0();
  // const { email, setemail } = useContext(GlobalContext);
  // setemail(user.email);
  // console.log(email);
  if (isLoading) {
    return <div>Loading ...</div>;
  }
   
  return (
    <div>
    <Navbar/>
   
    
  

   
    
    {/* {isAuthenticated ? (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        
        <LoginButton />


      </div>
      
      
    ):
    (
      <LoginButton/>
    ) */}
    
  {/* } */}

  <LoginButton/>
 
    <Footer/>
    </div>
  );
};

export default Profile;
