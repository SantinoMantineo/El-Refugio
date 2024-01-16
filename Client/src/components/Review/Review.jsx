import React, { useState } from "react";
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
    Nombre: "",
    Apellido: "",
    Comentario: "",
    Calificacion: "",
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

      </div>
      <button onClick={()=> setShowModal(true)} className={style.reservar}>
        Crear Review
      </button>
      {showModal && (
          <div className={style.modal}>
            <div className={style.modalContent}>
              <button
                className={style.close}
                onClick={() => setShowModal(false)}
              >
                X
              </button>
              <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className={style.container}
      >
        <h3>Tú dirección para envíos</h3>
        <form className={style.create}>
          <div className={style.part1}>
            <label>
              Calle
              <input
                className={style.input}
                type="text"
                name="calle"
                value={formData.calle}
                onChange={handleChange}
                placeholder="Ej: Necochea"
              />
              {errors.calle && (
                <span className={style.error}>{errors.calle}</span>
              )}
            </label>
          </div>

          <div className={style.part1}>
            <label>
              Numero de Casa
              <input
                className={style.input}
                type="text"
                name="numero"
                value={formData.numero}
                onChange={handleChange}
                placeholder="Ej: 1900"
              />
              {errors.numero && (
                <span className={style.error}>{errors.numero}</span>
              )}
            </label>
          </div>

          <div className={style.part1}>
            <label>
              Piso/Depto
              <input
                className={style.inputCheck}
                type="checkbox"
                name="pisoDeptoChecked"
                checked={formData.pisoDeptoChecked}
                onChange={handleChange}
              />
            </label>
          </div>

          {formData.pisoDeptoChecked && (
            <>
              <div className={style.part1}>
                <label>
                  Piso
                  <input
                    className={style.input}
                    type="text"
                    name="piso"
                    value={formData.piso}
                    onChange={handleChange}
                    placeholder="Ej: 1"
                  />
                  {errors.piso && (
                    <span className={style.error}>{errors.piso}</span>
                  )}
                </label>
              </div>

              <div className={style.part1}>
                <label>
                  Depto
                  <input
                    className={style.input}
                    type="text"
                    name="depto"
                    value={formData.depto}
                    onChange={handleChange}
                    placeholder='Ej: "A"'
                  />
                  {errors.depto && (
                    <span className={style.error}>{errors.depto}</span>
                  )}
                </label>
              </div>
            </>
          )}

          <div className={style.part1}>
            <label>
              Numero Celular
              <input
                className={style.input}
                type="text"
                name="celular"
                value={formData.celular}
                onChange={handleChange}
                placeholder="Ej: 3408 12345"
              />
              {errors.celular && (
                <span className={style.error}>{errors.celular}</span>
              )}
            </label>
          </div>

          <div className={style.part1}>
            <label>
              Indicaciones Extra
              <input
                className={style.input}
                type="textarea"
                name="indicaciones"
                value={formData.indicaciones}
                onChange={handleChange}
                placeholder='Ej: Piso 1, Dto. "A"'
              />
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
