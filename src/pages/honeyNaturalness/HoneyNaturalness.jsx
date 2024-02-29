import React from "react";
import styles from "../../sharedCss/sharedCss.module.css";
import InnovationDetailPage from "../../components/InnovationDetailPage/InnovationDetailPage";
import useTitle from "../../hook/useTitle";
function HoneyNaturalness() {
  useTitle("Honey Naturalness");
  return (
    <main className={styles.pageBackground}>
      <InnovationDetailPage id={36} />
    </main>
  );
}

export default HoneyNaturalness;
