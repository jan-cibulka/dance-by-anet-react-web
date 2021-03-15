// src/components/login-button.tsx

import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button
      className="nav-link"
      onClick={() => loginWithRedirect()}
    >
      Přihlášení
    </button>
  );
};

export default LoginButton;