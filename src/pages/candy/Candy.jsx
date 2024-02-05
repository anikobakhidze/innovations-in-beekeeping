import React from "react";
import styles from "../../sharedCss/sharedCss.module.css";
import InnovationDetailPage from "../../components/InnovationDetailPage/InnovationDetailPage";
function Candy() {
  return (
    <main className={styles.pageBackground}>
      <InnovationDetailPage id={37} />
    </main>
  );
}

export default Candy;
