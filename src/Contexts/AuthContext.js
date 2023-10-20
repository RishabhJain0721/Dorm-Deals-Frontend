import { createContext, useEffect, useReducer } from "react";
import AuthReducer from "./AuthReducer.js";

const INITIAL_STATE = {
  currentUser: JSON.parse(localStorage.getItem("details")) || null,
};

export const AuthContext = createContext(INITIAL_STATE);

/**
 * Auth Context Provider component
 * @param children {JSX.Element}
 * @returns {JSX.Element}
 * @constructor
 */
export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE, () => {
    const localData = localStorage.getItem("details");
    return localData ? JSON.parse(localData) : null;
  });

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
