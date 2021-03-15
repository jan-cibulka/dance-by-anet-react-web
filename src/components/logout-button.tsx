// src/components/logout-button.tsx

import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
    <a
      className="nav-link "
      style={{cursor: "pointer"}}
      onClick={() =>
        logout({
          returnTo: window.location.origin,
        })
      }
    >
      Odhlášení
    </a>
  );
};

export default LogoutButton;