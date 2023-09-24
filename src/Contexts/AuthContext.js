import { createContext, useEffect, useReducer } from "react";
import AuthReducer from "./AuthReducer.js";

console.log(localStorage);

const INITIAL_STATE = {
  currentUser: JSON.parse(localStorage.getItem("details")) || null,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  useEffect(() => {
    state.currentUser &&
      localStorage.setItem("details", JSON.stringify(state.currentUser));
  }, [state.currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser: state.currentUser, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
