import React, { createContext } from "react";
import useFireBase from "../../hooks/useFirebase";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const allConstxt = useFireBase();
  return (
    <AuthContext.Provider value={allConstxt}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
