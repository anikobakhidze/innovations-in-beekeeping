import React from "react";
import { useTranslation } from "react-i18next";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./css/innovations.module.css";
function Innovations() {
  const { t } = useTranslation();
  return (
    <main className={styles.innovationsSectionWrapper}>
      <h1>{t("innovations")}</h1>
      <div>
        {t("productDescription", { returnObjects: true }).map((card) => (
          <ProductCard card={card} key={card.id} />
        ))}
      </div>
    </main>
  );
}

export default Innovations;
