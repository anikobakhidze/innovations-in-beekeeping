import React from "react";
import { useTranslation } from "react-i18next";
function Innovations() {
  const { t } = useTranslation();
  return (
    <main>
      <h1>{t("sectionName")}</h1>
    </main>
  );
}

export default Innovations;
