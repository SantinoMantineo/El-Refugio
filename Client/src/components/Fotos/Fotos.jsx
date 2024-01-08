import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import style from "./Fotos.module.css";

const Fotos = () => {
  const [ref, inView] = useInView();

  return (
    <>
      <div className={style.principalDiv} id="fotos-section">
        <div className={style.overlay}></div>
        <motion.h1
          className={style.title}
          ref={ref}
          initial={{ opacity: 0, y: 50, scale: 0.5 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50, scale: inView ? 1 : 0.5 }}
          transition={{ duration: 1 }}
        >
          FOTOS
        </motion.h1>
      </div>
    </>
  );
};

export default Fotos;
