import React from "react";
import { useTranslation } from "react-i18next";
function ServicePageDetails() {
  const { t } = useTranslation();
  const serviceDetails = t("servicePageDetails", { returnObjects: true });
  return (
    <div>
      {serviceDetails.map((detail) => (
        <p key={detail.id}>{detail.paragraph}</p>
      ))}
    </div>
  );
}

export default ServicePageDetails;
