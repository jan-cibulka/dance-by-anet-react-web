// src/components/login-button.tsx

import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <a
      className="nav-link"
      style={{cursor: "pointer"}}
      onClick={() => loginWithRedirect()}
    >
      Přihlášení
    </a>
  );
};

export default LoginButton;