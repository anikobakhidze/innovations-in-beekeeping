import React from "react";
import { useTranslation } from "react-i18next";
function AboutPageDetails() {
  const { t } = useTranslation();
  const details = t("aboutPageDetails", { returnObjects: true });
  return (
    <div>
      {details.map((detail) => {
        return (
          <React.Fragment key={detail.id}>
            <h3>{detail.heading}</h3>
            <p>{detail.paragraph}</p>
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default AboutPageDetails;
