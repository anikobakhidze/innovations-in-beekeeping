import React from "react";
import { useTranslation } from "react-i18next";
import ServicePageDetails from "../../components/ServicePageDetails/ServicePageDetails.jsx";

import styles from "./css/service.module.css";
function Service() {
  const { t } = useTranslation();
  return (
    <section className={styles.serviceWrapper}>
      <div>
        <h2>{t("service")}</h2>
        <ServicePageDetails />
      </div>
      <div>
        <img src="../../images/servicePic.png" alt="service" />
      </div>
    </section>
  );
}

export default Service;
