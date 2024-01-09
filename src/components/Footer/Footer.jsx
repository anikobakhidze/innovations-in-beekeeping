import React from "react";
import { useTranslation } from "react-i18next";
import route from "../../constants/route";
import { NavLink } from "react-router-dom";
function Footer() {
  const { t } = useTranslation();
  return (
    <footer>
      <p>
        <NavLink to={route.SERVICE}>{t("service")}</NavLink>
      </p>
      <p>
        <NavLink to={route.ABOUT}>{t("about")}</NavLink>
      </p>
      <p>
        <NavLink to={route.CONTACT}>{t("contact")}</NavLink>
      </p>
      <p> &copy; 2024</p>
    </footer>
  );
}

export default Footer;
