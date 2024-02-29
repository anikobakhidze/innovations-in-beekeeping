import React from "react";
import styles from "../../sharedCss/sharedCss.module.css";
import InnovationDetailPage from "../../components/InnovationDetailPage/InnovationDetailPage";
import useTitle from "../../hook/useTitle";
function Churchkhela() {
  useTitle("Churchkela");
  return (
    <main className={styles.pageBackground}>
      <InnovationDetailPage id={40} />
    </main>
  );
}

export default Churchkhela;
