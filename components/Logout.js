import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Browser } from "@capacitor/browser";

const logoutUri =
  "com.mymotorhub.app://mymotorhub.eu.auth0.com/capacitor/com.mymotorhub.app/callback";

function LogoutButton() {
  const { buildLogoutUrl, logout } = useAuth0();

  const doLogout = async () => {
    // Open the browser to perform a logout
    await Browser.open({ url: buildLogoutUrl({ returnTo: logoutUri }) });
    // Ask the SDK to log out locally, but not do the redirect
    logout({ localOnly: true });
  };

  return (
    <button
      onClick={() => {
        logout(doLogout);
      }}
    >
      Log out
    </button>
  );
}

export default LogoutButton;
