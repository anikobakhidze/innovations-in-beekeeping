import React from "react";
import styles from "../../sharedCss/sharedCss.module.css";
import InnovationDetailPage from "../../components/InnovationDetailPage/InnovationDetailPage";
import useTitle from "../../hook/useTitle";
function Candy() {
  useTitle("Candy");
  return (
    <main className={styles.pageBackground}>
      <InnovationDetailPage id={37} />
    </main>
  );
}

export default Candy;
