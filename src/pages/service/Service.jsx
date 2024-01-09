import React from "react";
import { useTranslation } from "react-i18next";

function Service() {
  const { t } = useTranslation();
  const serviceDetails = t("servicePageDetails", { returnObjects: true });
  console.log(serviceDetails);
  return (
    <section>
      <h2>{t("service")}</h2>
      {serviceDetails.map((detail) => (
        <p key={detail.id}>{detail.paragraph}</p>
      ))}
    </section>
  );
}

export default Service;
