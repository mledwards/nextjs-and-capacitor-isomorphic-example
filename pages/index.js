import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../components/Login";
import LogoutButton from "../components/Logout";
import Profile from "../components/Profile";

export default function Index() {
  const { isAuthenticated } = useAuth0();

  return (
    <div>
      <div className="container">
        <Profile />
        {isAuthenticated ? <LogoutButton /> : <LoginButton />}
      </div>
    </div>
  );
}
