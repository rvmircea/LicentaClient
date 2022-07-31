import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import IButtonInterface from "../interfaces/IButtonStyle";

export const LogoutButton = ({style}: IButtonInterface) => {
  const { logout } = useAuth0();

  const handleLogout = () => {
    logout({
      returnTo: window.location.origin,
    });
  };

  return (
    <button onClick={handleLogout} className={style}>
      Delogare
    </button>
  );
};