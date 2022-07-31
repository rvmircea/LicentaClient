import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import IButtonInterface from "../interfaces/IButtonStyle";



export const RegisterButton = ({style}:IButtonInterface) => {
  const { loginWithRedirect } = useAuth0();

  const handleSignUp = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: window.location.origin,
      },
      screen_hint: "signup",
    });
  };

  return (
    <button className={style} onClick={handleSignUp}>
      Inregistrare
    </button>
  );
};