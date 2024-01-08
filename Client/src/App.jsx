import React, { useState, useEffect } from "react";
import Landing from "./components/Landing/Landing";
import Navbar from "./components/Navbar/Navbar";
import Form from "./components/Form/Form";
import Review from "./components/Review/Review";
import Fotos from "./components/Fotos/Fotos"
import Planes from "./components/Planes/Planes";

import './App.css'
import axios from "axios";
import Swal from "sweetalert2";
import { Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";

function App() {
  axios.defaults.baseURL = "http://localhost:3001/";

  return (
    <>
      <Navbar/>        
      <Routes>
        <Route path="/" element={
                <div className="content">
                <Landing id="landing-section"/>
                <motion.div className="animationDiv">
                  <motion.div
                    className="line"
                    animate={{
                      x: [-500, 0],
                    }}
                    transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
                  ></motion.div>
                  <motion.div
                    className="line"
                    animate={{
                      x: [500, 0],
                    }}
                    transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
                  ></motion.div>
                </motion.div>
                <Fotos id="fotos-section"/>
                <Review id="review-section"/>
                <Planes id="planes-section"/>
                <Form id="form-section"/>
              </div>
        }
        />
      </Routes>
    </>
  )
}

export default App
