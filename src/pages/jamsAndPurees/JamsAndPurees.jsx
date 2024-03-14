import React from "react";
import styles from "../../sharedCss/sharedCss.module.css";
import InnovationDetailPage from "../../components/InnovationDetailPage/InnovationDetailPage";
import useTitle from "../../hook/useTitle";
import { useTranslation } from "react-i18next";
function JamsAndPurees() {
  const { t } = useTranslation();
  useTitle(t("dropDown", { returnObjects: true })[5].navTitle);
  return (
    <main className={styles.pageBackground}>
      <InnovationDetailPage id={39} />
    </main>
  );
}

export default JamsAndPurees;
