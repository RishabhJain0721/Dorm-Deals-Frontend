import React, { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import axios from "axios";

export default function Items() {
  let [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/dashboard")
      .then((res) => {
        setItems(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="p-5 flex flex-wrap px-10 ">
      {items.map((item) => (
        <ItemCard key={item._id} rest={item} />
      ))}
    </div>
  );
}
