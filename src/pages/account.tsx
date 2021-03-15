import React from "react"
import { useAuth0 } from "@auth0/auth0-react"
import { addEmitHelper } from "typescript";

export const Account = () => {
 
  const auth = useAuth0();
  if(auth.isAuthenticated){
    return <div className="textBox">
    asd
   
     </div>

  }
  const { loginWithRedirect } = useAuth0();
  loginWithRedirect();
  return <div></div>;
 
  
}
