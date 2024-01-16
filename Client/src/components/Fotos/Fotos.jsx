import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "./Fotos.module.css";
import carrusel from "../../assets/carrusel.jpg";
import carrusel2 from "../../assets/carrusel2.jpg";
import carrusel3 from "../../assets/carrusel3.jpg";

const Fotos = () => {
  const [ref, inView] = useInView();

  // Configuración del carrusel
  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          autoplay: true,
          dots: true,
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={style.principalDiv} id="fotos-section">
      <div className={style.overlay}></div>
      <motion.h1
        className={style.title}
        ref={ref}
        initial={{ opacity: 0, y: 50, scale: 0.5 }}
        animate={{
          opacity: inView ? 1 : 0,
          y: inView ? 0 : 50,
          scale: inView ? 1 : 0.5,
        }}
        transition={{ duration: 1 }}
      >
        FOTOS
      </motion.h1>
      <motion.div         ref={ref}
        initial={{ opacity: 0, y: 50, scale: 0.5 }}
        animate={{
          opacity: inView ? 1 : 0,
          y: inView ? 0 : 50,
          scale: inView ? 1 : 0.5,
        }}
        transition={{ duration: 1 }} className={style.carruselcontainer}>
        <Slider {...settings} className={style.carrusel}>
          <div>
            <img src={carrusel} alt="Carrusel 1" />
          </div>
          <div>
            <img src={carrusel2} alt="Carrusel 2" />
          </div>
          <div>
            <img src={carrusel3} alt="Carrusel 3" />
          </div>
        </Slider>
      </motion.div>
    </div>
  );
};

export default Fotos;
