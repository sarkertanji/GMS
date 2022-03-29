import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./FireBase.config";
export const initializeFirebase = () => {
  return initializeApp(firebaseConfig);
};
