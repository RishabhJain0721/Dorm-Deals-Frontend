import { createContext, useEffect, useReducer } from "react";
import AuthReducer from "./AuthReducer.js";

const INITIAL_STATE = {
  currentUser: JSON.parse(localStorage.getItem("name")) || null,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  useEffect(() => {
    state.currentUser && localStorage.setItem("name", JSON.stringify(state.currentUser.name));
    state.currentUser && localStorage.setItem("token", JSON.stringify(state.currentUser.token));
  }, [state.currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser: state.currentUser, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
