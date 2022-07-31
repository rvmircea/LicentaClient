import { useAuth0 } from "@auth0/auth0-react";
import IButtonInterface from "../interfaces/IButtonStyle";

export const LoginButton = ({style}:IButtonInterface) => {
    const { loginWithRedirect } = useAuth0();
    
    const handleLogin = async () => {
        await loginWithRedirect({
            appState: {
                returnTo: window.location.origin,
            },
        });
    }

    return (
        <button onClick={handleLogin} className={style}>
            Logare
        </button>
    )
}