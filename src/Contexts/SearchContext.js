import { createContext, useEffect, useReducer } from "react";
import SearchReducer from "./SearchReducer.js";

const INITIAL_STATE = {
  currentSearch: null,
};

export const SearchContext = createContext(INITIAL_STATE);

/**
 * Search Context Provider
 *
 * @param children {JSX.Element}
 * @returns {JSX.Element}
 * @constructor
 */
export const SearchContextProvider = ({ children }) => {
  const [searchState, searchDispatch] = useReducer(
    SearchReducer,
    INITIAL_STATE,
    () => {
      const localData = localStorage.getItem("search");
      return localData ? JSON.parse(localData) : null;
    },
  );

  useEffect(() => {
    console.log("useEffect in SearchContextProvider is running");
    searchState.currentSearch &&
      localStorage.setItem("search", JSON.stringify(searchState.currentSearch));
  }, [searchState.currentSearch]);

  return (
    <SearchContext.Provider
      value={{ currentSearch: searchState.currentSearch, searchDispatch }}
    >
      {children}
    </SearchContext.Provider>
  );
};
