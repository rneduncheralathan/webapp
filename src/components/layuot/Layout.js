import React from 'react';
import Navbar from '../pages/Navbar';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function Layout() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>

      </Routes>
    </BrowserRouter>
  )
}

export default Layout