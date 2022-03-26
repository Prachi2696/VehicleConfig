import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';

import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
import Aboutus from './Components/Aboutus';
import Home from './Components/Home';
import Registration from './Components/Registration';
import Login from './Components/Login';






function App() { 
  return (
   <>
        <Navbar/>

        <BrowserRouter>
      
      
      <Routes>
        
          <Route path="Home" element={<Home/>} />
          <Route path="Aboutus" element={<Aboutus/>} />
          <Route path="Registration" element={<Registration/>} />
          <Route path="Login" element={<Login/>} />
         
          

        
        </Routes>
      
      </BrowserRouter>



   


    
   </>
  );
}

export default App;
