import React from 'react'
import './Home.css'
import Navbar from './Navbar'
import HeroPage from './HeroPage'
import CardContainer from './CardContainer'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'
import NotebookCardContainer from './NotebookCardContainer'
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from 'react-router-dom';





export default function Home() {
  const navigate = useNavigate();
  const {
    isAuthenticated,
    isLoading,
    loginWithRedirect,
    error,
    user
  } = useAuth0();
 

   if(!isAuthenticated){
    navigate('/profile');
   }
   else{
    window.globalThis=user.email;
    console.log(window.globalThis);
   }
  return (
    <div>

{isAuthenticated ? (
      <div>
        <Navbar id="nav"/>
        <ScrollToTop/>
        <HeroPage/>
        <CardContainer title=" Books" />
        <NotebookCardContainer title=" NoteBooks"/>
        <CardContainer title=" Accesaries"/>
        <Footer companyName="shop" devloper="Sahil" path="#nav"/> 
      </div>
      
    ):
    (
      <div>
        {/* {
          navigate('/profile');
        } */}
      
      </div>
    )
  }
      
      </div>
         
        
      
      
      
    
  )
}
