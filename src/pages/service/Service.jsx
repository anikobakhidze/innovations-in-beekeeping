import React from "react";
import { useTranslation } from "react-i18next";
import ServicePageDetails from "../../components/ServicePageDetails/ServicePageDetails.jsx";
function Service() {
  const { t } = useTranslation();
  return (
    <section>
      <h2>{t("service")}</h2>
      <ServicePageDetails />
    </section>
  );
}

export default Service;
