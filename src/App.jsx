import React from 'react'
import'./App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import BookDetails from './BookDetails';
import Contact from './Contact';
import Cart from './Cart';
import Profile from './Profile';
import Search from './Search';
import SpringBootFront from './SpringBootFront';
import LatestProduct from './LatestProduct';
import ProductLists from './ProductLists';
import Cancel from './Cancel';
import Success from './Success';


export default function App() {
  return (
    <>
   
 <BrowserRouter>
 <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/cancel' element={<Cancel/>}/>
  <Route path='/success' element={<Success/>}/>
  <Route path="/books/:id" element={<BookDetails title="books" />} />
  <Route path="/notebooks/:id" element={<BookDetails title="notebooks" />} />
  <Route path='/search' element={<Search/>}/>
  <Route path='/productlists' element={<ProductLists/>}/>
  <Route path='/latest' element={<LatestProduct/>}/>
  <Route path='/contact' element={<Contact/>}/>
  <Route path='/cart' element={<Cart/>}/>
  <Route path='/profile' element={<Profile/>}/>
  <Route path='/spring' element={<SpringBootFront/>}/>
 </Routes>
 </BrowserRouter>
   </>
  )
}

