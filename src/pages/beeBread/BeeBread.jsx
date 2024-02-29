import React from "react";
import styles from "../../sharedCss/sharedCss.module.css";
import InnovationDetailPage from "../../components/InnovationDetailPage/InnovationDetailPage";
import useTitle from "../../hook/useTitle";
function BeeBread() {
  useTitle("Beebread");
  return (
    <main className={styles.pageBackground}>
      <InnovationDetailPage id={38} />
    </main>
  );
}

export default BeeBread;
