import React from "react"
import { withAuth0 } from "@auth0/auth0-react"



export class Account extends React.Component<{ auth0: any }> {


  render(): JSX.Element {
    console.log(this.props.auth0);
    if (this.props.auth0.isAuthenticated) {
      return (
        <div className="textBox">
          Účet {this.props.auth0.user.nickname ? <>{this.props.auth0.user.nickname}</> : <>{this.props.auth0.user.name}</>}
          <br />
          Email {this.props.auth0.user.email}
          <br />
        
        </div>
      )
    }
    return <div></div>;
  }
}
export default withAuth0(Account)


