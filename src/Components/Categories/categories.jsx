import React from "react";
import cat from "./cat.module.css";
export default function Categories({ items }) {
  //   const newCat = basket.filter((elem) => elem.category === "smartphones");

  return (
    <div>
      <div className={cat.block}>
        {items.map((elem) => {
          //   if (elem.category === "smartphones") {
          //     return <p key={elem.id}> {elem.title} {elem.stock}</p>;
          //   }
          return (
            <p key={elem.id} className={cat.card}>
              <span>Product: {elem.title}</span>
              <span>Stock : {elem.stock}</span>
              <span>Price :{elem.price}</span>
              <span>
                Price with Discount (10%) :{(elem.price * 0.9).toFixed(2)}
              </span>
            </p>
          );
        })}
      </div>
      <div className={cat.block2}>
        <p className={cat.total}>
          {" "}
          Total : {items.reduce((acc, elem) => acc + elem.stock, 0).toFixed(2)}
        </p>
        <p className={cat.total}>
          Price :
          {items
            .reduce((acc, elem) => acc + elem.stock * elem.price, 0)
            .toFixed(2)}
        </p>
        <p className={cat.total}>
          Price with Discount(10%):
          {items.reduce((acc, elem) => acc + elem.stock * elem.price, 0) *
            (0.9).toFixed(2)}
        </p>
      </div>
    </div>
  );
}
