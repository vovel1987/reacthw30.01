import { useEffect, useState } from "react";
import Categories from "../Categories/categories";
import Products from "../Products/products";
import s from "./style.module.css";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();

      setItems(data.products);
    })();
  }, []);

  console.log(items);
  const deleteCard = (delId) => {
    const newItem = items.filter((elem) => elem.id !== delId);
    setItems(newItem);
  };
  const priceWithDisc = () => {
    const newPrice = items.map(
      (elem) => (elem.price = elem.price - elem.price * 0.1)
    );
  };

  return (
    <div>
      <div className={s.data}>
        {items.map((elem) => (
          <Products key={elem.id} {...elem} deleteCard={deleteCard} />
        ))}
      </div>
      <div>
        <Categories items ={items}  />
        </div>
    </div>
  );
}

export default App;
