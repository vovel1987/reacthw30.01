import React from "react";
import prod from "./prod.module.css";

export default function Products({
  category,
  brand,
  title,
  price,
  thumbnail,
  stock,
  deleteCard,
  id,
  priceWithDisc,
}) {
  return (
    <div className={prod.card}>
      <>
        <img src={thumbnail} alt="Iphone"  className={prod.img}/>
        {/* <p>Category : {category}</p>
        <p> Brand : {brand}</p> */}
        <p className={prod.title}>  {title}</p>
        <div className={prod.price}>
          <p className={prod.altPrice}> {price}</p>
          <p className={prod.newprice}>{(price = price - price * 0.1)}</p>
        </div>
        {/* <p> Stock : {stock}</p> */}
        <button onClick={() => deleteCard(id)} className={prod.button}>
          DELETE{" "}
        </button>
      </>
    </div>
  );
}
