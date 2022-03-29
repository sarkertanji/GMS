import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { initializeFirebase } from "../pages/FireBase/Init.authentaction";
initializeFirebase();
const googleprovider = new GoogleAuthProvider();
const auth = getAuth();

const useFireBase = () => {
  const [user, SetUser] = useState(null);
  const [isLoading, setIsloadind] = useState(true);

  const SignInByGoogle = () => {
    setIsloadind(true);
    return signInWithPopup(auth, googleprovider)
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      })
      .finally(() => {
        setIsloadind(false);
      });
  };

  const logOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        SetUser(null);
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => {
        setIsloadind(false);
      });
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        SetUser(user);
      } else {
        // User is signed out
        // ...
        SetUser(null);
      }
      setIsloadind(false);
    });
  }, []);
  return {
    user,
    isLoading,
    SignInByGoogle,
    logOut,
  };
};
export default useFireBase;
