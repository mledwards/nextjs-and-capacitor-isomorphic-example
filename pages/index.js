import React from "react";
import { App as CapApp } from '@capacitor/app';
import { Browser } from '@capacitor/browser';

import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../components/Login";
import LogoutButton from "../components/Logout";
import Profile from "../components/Profile";

export default function Index() {
  // Get the callback handler from the Auth0 React hook
  const { isAuthenticated, handleRedirectCallback } = useAuth0();

  React.useEffect(() => {
    // Handle the 'appUrlOpen' event and call `handleRedirectCallback`
    CapApp.addListener("appUrlOpen", async ({ url }) => {
      if (
        url.includes("state") &&
        (url.includes("code") || url.includes("error"))
      ) {
        await handleRedirectCallback(url);
      }
      // No-op on Android
      await Browser.close();
    });
  }, [handleRedirectCallback]);

  return (
    <div>
      <div className="container">
        <Profile />
        <LogoutButton />
        <LoginButton />
        
      </div>
    </div>
  );
}
