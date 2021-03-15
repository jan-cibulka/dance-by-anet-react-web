import React from "react"
import { useAuth0 } from "@auth0/auth0-react"
import { addEmitHelper } from "typescript";

export const Account = () => {
 
  const auth = useAuth0();
  if(auth.isAuthenticated){

    console.log(auth.user);
    return <div className="textBox">
    Účet {auth.user.nickname ? <>{auth.user.nickname}</>: <>{auth.user.name}</>} 
    <br />
    Email {auth.user.email}
    <br />
     
     </div>

  }
  const { loginWithRedirect } = useAuth0();
  loginWithRedirect();
  return <div></div>;
 
  
}
