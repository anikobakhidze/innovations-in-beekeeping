import React from "react";
import LogoImage from "../LogoImage/LogoImage";
import styles from "./css/logo.module.css";
import { NavLink } from "react-router-dom";
import route from "../../constants/route";
function Logo() {
  return (
    <NavLink to={route.HOME}>
      <div className={styles.logoWrapper}>
        <LogoImage />
        <h1> Demetra</h1>
      </div>
    </NavLink>
  );
}

export default Logo;
