import React, { useState, useEffect } from "react";
import Landing from "./components/Landing/Landing";
import Navbar from "./components/Navbar/Navbar";
import Form from "./components/Form/Form";
import Review from "./components/Review/Review";

import './App.css'
import axios from "axios";
import Swal from "sweetalert2";
import { Routes, Route } from "react-router-dom";

function App() {
  axios.defaults.baseURL = "http://localhost:3001/";

  return (
    <>
      <Routes>
        <Route path="/" element={
          <>
            <Navbar/>
            <Landing/>
            <Review/>
          </>
          }
        />
        <Route path="/navbar" element={<Navbar/>}/>
        <Route path="/reserva" element={<Form/>}/>
        <Route path="/review" element={<Review/>}/>
      </Routes>
    </>
  )
}

export default App
