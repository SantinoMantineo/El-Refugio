// Review.js
import React from "react";
import { motion } from "framer-motion";
import style from "./Review.module.css";

const Review = () => {
  return (
    <motion.div
      id="review-section"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Reseñas</h1>
    </motion.div>
  );
};

export default Review;
