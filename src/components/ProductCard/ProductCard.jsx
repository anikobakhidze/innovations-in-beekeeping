import React from "react";

function ProductCard({ card }) {
  console.log(card.img);
  return (
    <div>
      <img src={card.img} alt="profPic" />
      <h3>{card.heading}</h3>
      {card.subheading && <h4>{card.subheading}</h4>}
      <p>{card.paragraph}</p>
    </div>
  );
}

export default ProductCard;
