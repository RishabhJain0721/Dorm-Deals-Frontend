import React, { useContext, useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import axios from "axios";
import { SearchContext } from "../Contexts/SearchContext";
import { InfinitySpin } from "react-loader-spinner";

export default function Items() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchedItems, setSearchedItems] = useState([]);
  const { currentSearch } = useContext(SearchContext);

  // Fetch all items from the database
  useEffect(() => {
    axios
      .get("/api/dashboard")
      .then((res) => {
        setItems(res.data);
        setSearchedItems(res.data);
        console.log("In Items rendered on dashboard : ", res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // Filter items based on search query
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
        <div className="flex items-center justify-center h-96">
          <InfinitySpin width="200" color="#424242" />
        </div>
      ) : (
        <div className="p-5 flex flex-wrap px-10 justify-center md:justify-start">
          {searchedItems.map((item) => (
            <ItemCard key={item._id} rest={item} />
          ))}
        </div>
      )}
    </>
  );
}
