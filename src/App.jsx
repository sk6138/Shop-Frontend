import React from 'react'
import'./App.css'
import { BrowserRouter, Routes, Route,HashRouter } from 'react-router-dom';
import Home from './Home';
import BookDetails from './BookDetails';
import Contact from './Contact';
import Cart from './Cart';
import Profile from './Profile';
import Search from './Search';
import LatestProduct from './LatestProduct';
import ProductLists from './ProductLists';
import Cancel from './Cancel';
import Success from './Success';
import Catelog from './Catelog';
import Books from './Books';
import Notebooks from './Notebooks';
import Accesaries from './Accesaries';
import PayUForm from './PayUForm';


export default function App() {
  return (
    <>
   
 <HashRouter>
 <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/cancel' element={<Cancel/>}/>
  <Route path='/success' element={<Success/>}/>
  <Route path='/catelog' element={<Catelog/>}/>
  <Route path='/payment' element={<PayUForm/>}/>
  <Route path='/books' element={<Books title="books"/>}/>
  <Route path='/notebooks' element={<Notebooks />}/>
  <Route path='/accesaries' element={<Accesaries />}/>
  <Route path="/books/:id" element={<BookDetails title="books" />} />
  <Route path="/accesaries/:id" element={<BookDetails title="accesaries" />} />
  <Route path="/notebooks/:id" element={<BookDetails title="notebooks" />} />
  <Route path='/search' element={<Search/>}/>
  {/* <Route path='/productlists' element={<ProductLists/>}/> */}
  <Route path='/latest' element={<LatestProduct/>}/>
  <Route path='/contact' element={<Contact/>}/>
  <Route path='/cart' element={<Cart/>}/>
  <Route path='/profile' element={<Profile/>}/>
  
 </Routes>
 </HashRouter>
   </>
  )
}

