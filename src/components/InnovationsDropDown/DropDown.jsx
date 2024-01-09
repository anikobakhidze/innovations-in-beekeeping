import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { routes } from "../../config/routes";
function DropDown() {
  const { t } = useTranslation();

  return (
    <ul>
      {t("dropDown", { returnObjects: true }).map((title) => {
        const equalRoute = routes.find((route) => route.id === title.id);
        return (
          <li key={title.navTitle}>
            {equalRoute && (
              <NavLink to={equalRoute.path}>{title.navTitle}</NavLink>
            )}
          </li>
        );
      })}
    </ul>
  );
}

export default DropDown;
