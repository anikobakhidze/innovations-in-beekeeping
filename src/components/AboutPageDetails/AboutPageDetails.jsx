import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./css/aboutPageDetails.module.css";

function AboutPageDetails() {
  const { t } = useTranslation();
  const details = t("aboutPageDetails", { returnObjects: true });
  const [isVisibleParagraph, setIsVisibleParagrah] = useState([]);
  function handleShow(id) {
    if (isVisibleParagraph.includes(id)) {
      setIsVisibleParagrah(isVisibleParagraph.filter((item) => item !== id));
    } else {
      setIsVisibleParagrah([...isVisibleParagraph, id]);
    }
  }
  return (
    <div className={styles.AboutPageDetailsContainer}>
      {details.map((detail) => {
        const isParagraph = isVisibleParagraph.includes(detail.id);
        return (
          <div key={detail.id} className={styles.aboutPageDetailsWrapper}>
            <div
              className={styles.aboutHeadingWrapper}
              onClick={() => handleShow(detail.id)}
            >
              <h3>{detail.heading}</h3>
              <button>{isParagraph ? "-" : "+"}</button>
            </div>
            {isParagraph && <p>{detail.paragraph}</p>}
          </div>
        );
      })}
    </div>
  );
}

export default AboutPageDetails;
