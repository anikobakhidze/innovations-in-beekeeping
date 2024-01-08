import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import route from "../../constants/route";
function DropDown() {
  const { t } = useTranslation();

  return (
    <ul>
      {t("dropDown", { returnObjects: true }).map((title) => (
        <li key={title.navTitle}>
          <NavLink to={route[title.navTitle.split(" ").join("").toUpperCase()]}>
            {title.navTitle}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

export default DropDown;
