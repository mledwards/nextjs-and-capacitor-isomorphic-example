import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Browser } from "@capacitor/browser";

const LoginButton = () => {
  const { buildAuthorizeUrl } = useAuth0();
  const login = async () => {
    // Ask auth0-react to build the login URL
    const url = await buildAuthorizeUrl();
    // Redirect using Capacitor's Browser plugin
    await Browser.open({ url });
  };

  return <button onClick={login}>Log In</button>;
};

export default LoginButton;
