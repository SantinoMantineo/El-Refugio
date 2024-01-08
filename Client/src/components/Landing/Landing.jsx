// Landing.js
import React, { useEffect, useState } from "react";
import style from "./Landing.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

const Landing = () => {
  const [typedText, setTypedText] = useState("");
  const targetText = "EL REFUGIO";

  const animateText = () => {
    for (let i = 0; i < targetText.length; i++) {
      setTimeout(() => {
        setTypedText(targetText.substring(0, i + 1));
      }, (i + 1) * 200); // Adjust the speed by changing the multiplier
    }
  };

  useEffect(() => {
    animateText();
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={style.container} id="landing-section">
      <div className={style.text}>
        <h1><span style={{ color: 'green' }}>{typedText}</span><br></br>tu destino perfecto para desconectar de la rutina y conectar con la naturaleza.</h1>
      </div>
      <div className={style.reservar}>
        <button>
          Reservar
        </button>
        <div className={style.mobileIcon} onClick={() => scrollToSection("fotos-section")}>
          <FontAwesomeIcon icon={faArrowDown} />
        </div>
      </div>
    </div>
  );
};

export default Landing;
