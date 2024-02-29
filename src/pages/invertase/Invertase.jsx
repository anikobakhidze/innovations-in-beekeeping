import React from "react";
import styles from "../../sharedCss/sharedCss.module.css";
import InnovationDetailPage from "../../components/InnovationDetailPage/InnovationDetailPage";
import useTitle from "../../hook/useTitle";
function Invertase() {
  useTitle("Invertase");
  return (
    <main className={styles.pageBackground}>
      <InnovationDetailPage id={35} />
    </main>
  );
}

export default Invertase;
