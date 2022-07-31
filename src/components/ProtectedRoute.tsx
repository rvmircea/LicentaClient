import { withAuthenticationRequired } from "@auth0/auth0-react";
import React, { ComponentType } from "react";
import LoadingBar from "./LoadingBar";


interface ProtectedRouteProps {
  component: ComponentType;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  component,
}) => {
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => (
        <LoadingBar/>
    ),
  });

  return <Component />;
};