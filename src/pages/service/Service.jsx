import React from "react";
import { useTranslation } from "react-i18next";
import ServicePageDetails from "../../components/ServicePageDetails/ServicePageDetails.jsx";

import styles from "./css/service.module.css";
import useTitle from "../../hook/useTitle.js";
function Service() {
  const { t } = useTranslation();
  useTitle("Service");
  return (
    <section className={styles.serviceWrapper}>
      <div>
        <h2>{t("service")}</h2>
        <ServicePageDetails />
      </div>

      <img src="../../images/servicePic.png" alt="service" />
    </section>
  );
}

export default Service;
