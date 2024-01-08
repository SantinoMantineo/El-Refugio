import React, { useState, useEffect } from "react";
import Landing from "./components/Landing/Landing";
import Navbar from "./components/Navbar/Navbar";
import Form from "./components/Form/Form";
import Review from "./components/Review/Review";
import Fotos from "./components/Fotos/Fotos"

import './App.css'
import axios from "axios";
import Swal from "sweetalert2";
import { Routes, Route } from "react-router-dom";

function App() {
  axios.defaults.baseURL = "http://localhost:3001/";

  return (
    <>
      <Navbar/>        
      <div className="content">
        <Landing id="landing-section"/>
        <Review id="review-section"/>
        <Fotos id="fotos-section"/>
      </div>
      <Routes>
        <Route path="/reserva" element={<Form/>}/>
      </Routes>
    </>
  )
}

export default App
