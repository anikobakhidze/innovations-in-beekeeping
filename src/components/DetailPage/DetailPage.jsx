import React from "react";
import styles from "./css/detailPage.module.css";
function DetailPage({ detailPage }) {
  return (
    <article className={styles.articleContainer}>
      <h3>{detailPage.title}</h3>
      {detailPage.subtitle && <h5>{detailPage.subtitle}</h5>}
      <p>{detailPage.paragraph1}</p>
      <p>{detailPage.paragraph2}</p>
      <p>{detailPage.paragraph3}</p>
      <p>{detailPage.paragraph4}</p>
      {detailPage.paragraph5 && <p>{detailPage.paragraph5}</p>}
    </article>
  );
}

export default DetailPage;
