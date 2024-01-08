import React from "react";
import { useTranslation } from "react-i18next";
import DropDown from "../InnovationsDropDown/DropDown";
import { NavLink } from "react-router-dom";
import route from "../../constants/route";
function NavBar() {
  const { t } = useTranslation();
  return (
    <nav>
      <ul>
        <li>
          <NavLink to={route.HOME}>{t("home")}</NavLink>
        </li>
        <li>
          <NavLink to={route.SERVICE}>{t("service")}</NavLink>
        </li>
        <li>
          <NavLink to={route.ABOUT}>{t("about")}</NavLink>
        </li>
        <li>
          {t("innovations")}
          <DropDown />
        </li>
        <li>
          <NavLink to={route.CONTACT}>{t("contact")}</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
