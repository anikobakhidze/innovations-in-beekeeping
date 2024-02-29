import React from "react";
import styles from "../../sharedCss/sharedCss.module.css";
import InnovationDetailPage from "../../components/InnovationDetailPage/InnovationDetailPage";
import useTitle from "../../hook/useTitle";
function InvertSyrup() {
  useTitle("Invert Syrup");
  return (
    <main className={styles.pageBackground}>
      <InnovationDetailPage id={34} />
    </main>
  );
}

export default InvertSyrup;
