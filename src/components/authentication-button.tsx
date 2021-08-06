import React from "react";

import LoginButton from "./login-button";
import LogoutButton from "./logout-button";

import { useAuth0 } from "@auth0/auth0-react";

const AuthenticationButton = () => {

    const { isAuthenticated, user } = useAuth0();
    //console.log(user)
    return isAuthenticated ? <LogoutButton /> : <LoginButton />;
};

export default AuthenticationButton;