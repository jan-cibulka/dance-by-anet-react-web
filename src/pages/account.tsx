import React from "react"
import { useAuth0 } from "@auth0/auth0-react";
import { Redirect } from "react-router-dom";



const Account = () => {
  const { user, isAuthenticated } = useAuth0();
  if (isAuthenticated) {
    return (
      <div className="textBox">
        Účet : {user.nickname ? <>{user.nickname}</> : <>{user.name}</>}
        <br />
        Email : {user.email}
        <br />
      </div>
    )
  }

  return <Redirect to="/" />;

}
export default Account


