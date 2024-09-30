import React from 'react'
import './Home.css'
import Navbar from './Navbar'
import HeroPage from './HeroPage'
import CardContainer from './CardContainer'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'
import NotebookCardContainer from './NotebookCardContainer'




export default function Home() {
  const items = ['Apple', 'Banana', 'Cherry', 'Date'];
  return (
    <div>
       <Navbar id="nav"/>
       <ScrollToTop/>
     <HeroPage/>
     
      <CardContainer title=" Books" />
      <NotebookCardContainer title=" NoteBooks"/>
      {/* <CardContainer title=" Accesaries"/> */}
      <Footer companyName="shop" devloper="Sahil" path="#nav"/>
      </div>
         
        
      
      
      
    
  )
}
