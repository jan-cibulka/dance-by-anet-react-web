export {}
/*
import React from "react"
import { Router } from "@reach/router"
import { login, logout, isAuthenticated, getProfile } from "../utils/auth"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Video from "./video"

const UserAccount = ({ user }) => {

  return   <div className="textBox"><p>Ahoj, {user.name ? user.name : "friend"}! Zde je přehled vašeho účtu.</p></div>

}

const Account = () => {
  if (!isAuthenticated()) {
    login()
    return <p>Redirecting to login...</p>
  }

  const user = getProfile()

  return (
    <Layout>
      <Router className="h-100">
        <UserAccount path="/account/" user={user} />
        <Video path="/account/video" user={user} />
      </Router>
    </Layout>
  )
}

export default Account
*/