import React, { useContext, useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import axios from "axios";
import { SearchContext } from "../Contexts/SearchContext";

export default function Items() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchedItems, setSearchedItems] = useState([]);
  const { currentSearch } = useContext(SearchContext);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/dashboard")
      .then((res) => {
        setItems(res.data);
        setSearchedItems(res.data);
        setLoading(false);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (items) {
      const filteredItems = items.filter((item) => {
        return item.itemName
          .toLowerCase()
          .includes(currentSearch.value.toLowerCase());
      });
      setSearchedItems(filteredItems);
    }
  }, [currentSearch]);

  return (
    <>
      {" "}
      {loading ? (
        <p>loading</p>
      ) : (
        <div className="p-5 flex flex-wrap px-10 ">
          {searchedItems.map((item) => (
            <ItemCard key={item._id} rest={item} />
          ))}
        </div>
      )}
    </>
  );
}
