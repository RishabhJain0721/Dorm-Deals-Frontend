import React, { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import axios from "axios";

export default function Items() {
  let [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/dashboard")
      .then((res) => {
        setItems(res.data);
        setLoading(false);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      {" "}
      {loading ? (
        <p>loading</p>
      ) : (
        <div className="p-5 flex flex-wrap px-10 ">
          {items.map((item) => (
            <ItemCard key={item._id} rest={item} />
          ))}
        </div>
      )}
    </>
  );
}
