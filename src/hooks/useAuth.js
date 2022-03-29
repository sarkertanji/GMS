import { useContext } from "react";
import { AuthContext } from "../pages/context/AuthProvider";

export const useAuth = () => {
  return useContext(AuthContext);
};
