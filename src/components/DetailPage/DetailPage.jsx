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

      <div className={styles.imageWrapper}>
        <div>
          {detailPage.img1 && <img src={detailPage.img1} alt="inovvation" />}
          {detailPage.caption1 && <p>{detailPage.caption1}</p>}
        </div>
        {detailPage.img2 && (
          <div>
            <img src={detailPage.img2} alt="innovation 2" />
            {detailPage.caption2 && <p>{detailPage.caption2}</p>}
          </div>
        )}
        {detailPage.img3 && (
          <div>
            <img src={detailPage.img3} alt="innovation 2" />
            {detailPage.caption3 && <p>{detailPage.caption3}</p>}
          </div>
        )}
        {detailPage.img4 && (
          <div>
            <img src={detailPage.img4} alt="innovation 2" />
            {detailPage.caption4 && <p>{detailPage.caption4}</p>}
          </div>
        )}
        {detailPage.img5 && (
          <div>
            <img src={detailPage.img5} alt="innovation 2" />
            {detailPage.caption5 && <p>{detailPage.caption5}</p>}
          </div>
        )}
        {detailPage.img6 && (
          <div>
            <img src={detailPage.img6} alt="innovation 2" />

            {detailPage.caption6 && <p>{detailPage.caption6}</p>}
          </div>
        )}
      </div>
    </article>
  );
}

export default DetailPage;
