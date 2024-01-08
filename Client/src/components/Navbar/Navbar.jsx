import React, { useEffect, useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import Logo from "../../../public/logo.png"
import style from "./Navbar.module.css";

const Navbar = () => {

  return (
    <>
      <div className={style.navbar}>
        <Link to="/inicio" className={style.toHome}>
          <div className={style.logo}>
            <img src={Logo} alt="logo" />
          </div>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
