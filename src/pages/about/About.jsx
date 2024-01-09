import React from "react";
import { useTranslation } from "react-i18next";
function About() {
  const { t } = useTranslation();
  return (
    <section>
      <h2>{t("about")}</h2>
    </section>
  );
}

export default About;
