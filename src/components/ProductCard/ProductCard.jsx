import React from "react";
import styles from "./css/productCard.module.css";
function ProductCard({ card }) {
  console.log(card.img);
  return (
    <div className={styles.cardWrapper}>
      <div>
        <img src={card.img} alt="profPic" />
      </div>
      <div>
        <h3>{card.heading}</h3>
        {card.subheading && <h4>{card.subheading}</h4>}
        <p>{card.paragraph}</p>
      </div>
    </div>
  );
}

export default ProductCard;
