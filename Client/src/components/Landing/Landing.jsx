// Landing.js
import React from "react";
import style from "./Landing.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

const Landing = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={style.container} id="landing-section">
      <div className={style.text}>
        <h1><span>El Refugio</span>, tu destino perfecto para desconectar de la rutina y conectar con la naturaleza.</h1>
      </div>
      <div className={style.reservar}>
        <button>
          Reservar
        </button>
        <div className={style.mobileIcon} onClick={() => scrollToSection("review-section")}>
          <FontAwesomeIcon icon={faArrowDown} />
        </div>
      </div>
    </div>
  );
};

export default Landing;
