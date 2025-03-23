import React from "react";

export default function DetailShoe({ detailShoe }) {
  return (
    <div>
      <img className="w-96" src={detailShoe.image} alt="" />
      <h2>{detailShoe.name}</h2>
      <h3>{detailShoe.price}</h3>
    </div>
  );
}
