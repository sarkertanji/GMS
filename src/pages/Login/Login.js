import { Button } from "react-bootstrap";
import React from "react";
import { useAuth } from "../../hooks/useAuth";
import { GoogleAuthProvider } from "firebase/auth";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const { SignInByGoogle } = useAuth();
  const location = useLocation();
  const navigat = useNavigate();
  const form = location.state?.form || "/";
  const handelGoogleLogin = () => {
    SignInByGoogle().then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
      navigat(form);
    });
  };
  return (
    <div>
      <Button onClick={handelGoogleLogin} variant="outline-primary">
        sign in by google
      </Button>
    </div>
  );
};

export default Login;
