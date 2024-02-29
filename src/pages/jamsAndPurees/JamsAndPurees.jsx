import React from "react";
import styles from "../../sharedCss/sharedCss.module.css";
import InnovationDetailPage from "../../components/InnovationDetailPage/InnovationDetailPage";
import useTitle from "../../hook/useTitle";
function JamsAndPurees() {
  useTitle("Jams&Purees");
  return (
    <main className={styles.pageBackground}>
      <InnovationDetailPage id={39} />
    </main>
  );
}

export default JamsAndPurees;
