import React from "react";
import { useTranslation } from "react-i18next";
import AboutPageDetails from "../../components/AboutPageDetails/AboutPageDetails";
function About() {
  const { t } = useTranslation();
  return (
    <section>
      <h2>{t("about")}</h2>
      <AboutPageDetails />
    </section>
  );
}

export default About;
