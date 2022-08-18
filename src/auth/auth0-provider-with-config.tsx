import { Auth0Provider } from "@auth0/auth0-react";
import React, { PropsWithChildren } from "react";
import Auth0ProviderWithConfigProps from "../interfaces/IAuth0Provider";

export const Auth0ProviderWithConfig = ({ children }: PropsWithChildren<Auth0ProviderWithConfigProps>): JSX.Element | null => {
    const domain = "dev-4qy3uxvn.us.auth0.com";
    const clientId = "noeQ4QqHhOc9jOd7TUrPOAoN27tz5JXU";
    const redirectUri = window.location.origin;
    const audience = "https://localhost:7121";
    if (!(domain && clientId && redirectUri && audience)) {
        return null;
    }

    return (
        <Auth0Provider domain={domain}
            clientId={clientId}
            redirectUri={redirectUri}
            audience={audience}
            scope="read:current_user update:current_user_metadata buy:products"
            >
            
            {children}
        </Auth0Provider>
    )
}