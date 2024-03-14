import React from "react";
import { useTranslation } from "react-i18next";
import styles from "../../sharedCss/sharedCss.module.css";
import InnovationDetailPage from "../../components/InnovationDetailPage/InnovationDetailPage";
import useTitle from "../../hook/useTitle";
function BeeBread() {
  const { t } = useTranslation();
  useTitle(t("dropDown", { returnObjects: true })[4].navTitle);
  return (
    <main className={styles.pageBackground}>
      <InnovationDetailPage id={38} />
    </main>
  );
}

export default BeeBread;
