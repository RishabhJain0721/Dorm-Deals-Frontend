import { createContext, useEffect, useReducer } from "react";
import ItemReducer from "./ItemReducer.js";

const INITIAL_STATE = {
  currentItem: JSON.parse(localStorage.getItem("item")) || null,
};

export const ItemContext = createContext(INITIAL_STATE);

/**
 * Item Context Provider
 *
 * @param children {JSX.Element}
 * @returns {JSX.Element}
 * @constructor
 */
export const ItemContextProvider = ({ children }) => {
  const [itemState, itemDispatch] = useReducer(
    ItemReducer,
    INITIAL_STATE,
    () => {
      const localData = localStorage.getItem("item");
      return localData ? JSON.parse(localData) : null;
    },
  );

  useEffect(() => {
    console.log("useEffect in ItemContextProvider is running");
    itemState.currentItem &&
      localStorage.setItem("item", JSON.stringify(itemState.currentItem));
  }, [itemState.currentItem]);

  return (
    <ItemContext.Provider
      value={{ currentItem: itemState.currentItem, itemDispatch }}
    >
      {children}
    </ItemContext.Provider>
  );
};
