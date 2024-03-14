import React from "react";
import { useTranslation } from "react-i18next";
import AboutPageDetails from "../../components/AboutPageDetails/AboutPageDetails";
import styles from "./css/about.module.css";
import useTitle from "../../hook/useTitle";
function About() {
  const { t } = useTranslation();
  useTitle(t("about"));
  return (
    <section className={styles.aboutWrapper}>
      <h2>{t("about")}</h2>
      <AboutPageDetails />
    </section>
  );
}

export default About;
