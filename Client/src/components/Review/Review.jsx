import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "./Review.module.css";

const Review = () => {
  const [ref, inView] = useInView();
  const [showModal, setShowModal] = useState(false);
  // Configuración del carrusel
  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1050,
        settings: {
          autoplay: true,
          dots: true,
          arrows: true,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 750,
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
  
  const [formData, setFormData] = useState({
    nombre: "",
    title: "",
    comentario: "",
    rating: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

      setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formErrors = validateAddressForm(formData);

    if (Object.values(formErrors).some((error) => error)) {
      setErrors(formErrors);
      return;
    }

    let ubicationData = {
      direccion: `${formData.calle} ${formData.numero}`,
      celular: formData.celular,
      indicaciones: formData.indicaciones,
      id: userData.id,
    };

    if (formData.pisoDeptoChecked) {
      ubicationData.piso = formData.piso;
      ubicationData.depto = formData.depto;
    }

    try {
      const response = await axios.post("/envios/ubiForm", ubicationData);
      if (response) {
        onAddressAdded(ubicationData.direccion);
        Swal.fire({
          icon: "success",
          title: `Direccion agregada!`,
          text: "¡Ya puedes realizar tus pedidos con envio!",
        }).then(() => {
          window.location.reload();
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const review1 = {
    nombre: "Santino Mantineo",
    titulo: "Una verga",
    Comentario: "El lugar esta tremendo",
    rating: 4

  }

  const review2 = {
    nombre: "Indira Mantineo",
    titulo: "Una Locura",
    Comentario: "no vuelvo mas",
    rating: 5

  }

  const review3 = {
    nombre: "Mauricio Mantineo",
    titulo: "Una Maravilla",
    Comentario: "Me golpeo una silla aca",
    rating: 3

  }
  const review4 = {
    nombre: "AA AA",
    titulo: "Una ASD",
    Comentario: "no vueASDlvo mas",
    rating: 5

  }
  const reviews = [review1, review2, review3, review4]

  const handleRating = async (value) => {
    setFormData((prevData) => ({ ...prevData, rating: value }));
  };

  useEffect(()=>{
    console.log(formData)
  },[formData])
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
      <motion.div         ref={ref}
        initial={{ opacity: 0, y: 50, scale: 0.5 }}
        animate={{
          opacity: inView ? 1 : 0,
          y: inView ? 0 : 50,
          scale: inView ? 1 : 0.5,
        }}
        transition={{ duration: 1 }} className={ !showModal ? style.carruselcontainer : style.carruselcontainerNone}>
      <Slider {...settings} className={style.carrusel}>
        {reviews.map((review, index) => (
          <div key={index} className={`${style.box} ${style.reviewCard}`}>
      <span></span>
      <div className={style.content}>
        <h2>{review.nombre}</h2>
        <p>{review.titulo}</p>
        <p>{review.Comentario}</p>
        <div className={style.rating}>{review.rating}</div>
      </div>
    </div>
        ))}
      </Slider>

      </motion.div>
      <button onClick={()=> setShowModal(true)} className={ !showModal ? style.reservar : style.reservarNone}>
        Crear Reseña
      </button>
      {showModal && (
          <div className={style.modal}>
            <div className={style.modalContent}>
              <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className={style.container}
      >
                      <button
                className={style.close}
                onClick={() => setShowModal(false)}
              >
                ←
              </button>
        <h3>Crear Reseña</h3>
        <form className={style.create}>
          <div className={style.part1}>
            <label>
              Nombre
              <input
                className={style.input}
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                placeholder="Ej: Marcelo Martinez"
              />
            </label>
          </div>
          <div className={style.part1}>
            <label>
              Titulo del Comentario
              <input
                className={style.input}
                type="textarea"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder='Ej: Ideal Para Niños'
              />
            </label>
          </div>
          <div className={style.part1}>
            <label>
              Comentario
              <input
                className={style.input}
                type="textarea"
                name="comentario"
                value={formData.comentario}
                onChange={handleChange}
                placeholder='Ej: El lugar excelente, la atencion todavia mejor!'
              />
            </label>
          </div>
          <div className={style.part1}>
            <label>
              <div className={style.rating}>
                      <p>Calificacion</p>
                      {[1, 2, 3, 4, 5].map((value) => (
                        <label key={value}>
                          <input
                            type="radio"
                            name="rating"
                            value={value}
                            onClick={() => handleRating(value)}
                          />
                          {value}
                        </label>
                      ))}
                    </div>
            </label>
          </div>
        </form>

        <button type="submit" onClick={handleSubmit} className={style.button}>
          Enviar
        </button>
      </motion.div>
            </div>
          </div>
        )}
    </div>
  );
};

export default Review;
