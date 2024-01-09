import React from "react";
import { useTranslation } from "react-i18next";
import ProductCard from "../ProductCard/ProductCard";
function Innovations() {
  const { t } = useTranslation();
  return (
    <main>
      <h1>
        {t("productDescription", { returnObjects: true }).map((card) => (
          <ProductCard card={card} key={card.id} />
        ))}
      </h1>
    </main>
  );
}

export default Innovations;
