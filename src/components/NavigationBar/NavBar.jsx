import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import DropDown from "../InnovationsDropDown/DropDown";
import { NavLink } from "react-router-dom";
import route from "../../constants/route";
import styles from "./css/navbar.module.css";
function NavBar() {
  const { t } = useTranslation();
  const [show, setShow] = useState(false);
  function handleShow() {
    setShow(true);
  }
  function handleHide() {
    setShow(false);
  }
  return (
    <nav>
      <ul className={styles.navbarContainer}>
        <li>
          <NavLink to={route.HOME}>{t("home")}</NavLink>
        </li>
        <li>
          <NavLink to={route.SERVICE}>{t("service")}</NavLink>
        </li>
        <li>
          <NavLink to={route.ABOUT}>{t("about")}</NavLink>
        </li>
        <li
          onMouseEnter={handleShow}
          onMouseLeave={handleHide}
          className={styles.innovationNav}
        >
          {t("innovations")}
          {show && <DropDown />}
        </li>
        <li>
          <NavLink to={route.CONTACT}>{t("contact")}</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
