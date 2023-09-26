import { createContext, useEffect, useReducer } from "react";
import ItemReducer from "./ItemReducer.js";

const INITIAL_STATE = {
  currentItem: null,
};

export const ItemContext = createContext(INITIAL_STATE);

export const ItemContextProvider = ({ children }) => {
  const [itemState, itemDispatch] = useReducer(ItemReducer, INITIAL_STATE);

  useEffect(() => {
    itemState.currentItem &&
      localStorage.setItem("item", JSON.stringify(itemState.currentItem));
  }, [itemState.currentItem]);

  return (
    <ItemContext.Provider value={{ currentItem: itemState.currentItem, itemDispatch }}>
      {children}
    </ItemContext.Provider>
  );
};
