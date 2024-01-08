// Landing.js
import React from "react";
import style from "./Landing.module.css";

const Landing = () => {
  return (
    <div className={style.container} id="landing-section">
      <div className={style.text}>
        <h1><span>El Refugio</span>, tu destino perfecto para desconectar de la rutina y conectar con la naturaleza.</h1>
      </div>
      <div className={style.reservar}>
        <button>
          Reservar
        </button>
      </div>
    </div>
  );
};

export default Landing;
