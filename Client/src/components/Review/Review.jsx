import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "./Review.module.css";
import carrusel from "../../assets/carrusel.jpg";
import carrusel2 from "../../assets/carrusel2.jpg";
import carrusel3 from "../../assets/carrusel3.jpg";

const Review = () => {
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
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
// poner adentro del slider un forEach y que por cada elemento del array se haga una card <div>
  return (
    <div className={style.principalDiv} id="review-section">
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
        RESEÑAS
      </motion.h1>
      <div className={style.carruselcontainer}>
        <Slider {...settings} className={style.carrusel}>
          <div>
            <h1 alt="Carrusel 1">HOLA</h1>
          </div>
          <div>
            <h1 alt="Carrusel 2">MIAU</h1>
          </div>
          <div>
            <h1 alt="Carrusel 3">CHAU</h1>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Review;
