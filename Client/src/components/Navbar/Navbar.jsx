// Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import style from "./Navbar.module.css";

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className={style.navbar}>
        <div className={style.directAccess}>
          <Link to="/" onClick={() => scrollToSection("landing-section")}>
            <span>Home</span>
          </Link>
          <Link onClick={() => scrollToSection("fotos-section")}>
            <span>Fotos</span>
          </Link>
          <Link onClick={() => scrollToSection("review-section")}>
            <span>Reseñas</span>
          </Link>
          <Link onClick={() => scrollToSection("planes-section")}>
            <span>Planes</span>
          </Link>
          <Link onClick={() => scrollToSection("form-section")}>
            <span>Reservar</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
