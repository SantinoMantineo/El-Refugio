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
        <Link to="/" className={style.toHome}>
          <div className={style.logo}>
            <img src={Logo} alt="logo" />
          </div>
        </Link>
        <div className={style.directAccess}>
          <Link to="/" onClick={() => scrollToSection("landing-section")}>
            <span>Home</span>
          </Link>
          <Link to="/" onClick={() => scrollToSection("review-section")}>
            <span>Reviews</span>
          </Link>
          <Link to="/" onClick={() => scrollToSection("fotos-section")}>
            <span>Fotos</span>
          </Link>
          <Link to="/reserva">
            <span>Reservar</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
