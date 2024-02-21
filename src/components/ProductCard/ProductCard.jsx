import React from "react";
import styles from "./css/productCard.module.css";
import { useNavigate } from "react-router-dom";
import { routes } from "../../config/routes";
function ProductCard({ card }) {
  const navigate = useNavigate();
  function handleClick(id) {
    const matchingRoute = routes.find((route) => route.equal === id);
    if (matchingRoute) {
      navigate(matchingRoute.path);
    }
  }

  return (
    <div className={styles.cardWrapper}>
      <img src={card.img} alt="profPic" />
      <div onClick={() => handleClick(card.id)}>
        <h3>{card.heading}</h3>
        {card.subheading && <h4>{card.subheading}</h4>}
      </div>
      <p>{card.paragraph}</p>
    </div>
  );
}

export default ProductCard;
