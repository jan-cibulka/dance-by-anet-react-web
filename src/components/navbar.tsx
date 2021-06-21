import { useAuth0, withAuth0 } from "@auth0/auth0-react";
import React from "react"
import { Button, Form, FormControl, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { isUserAdmin } from "../util/userWhitelist";
import AuthenticationButton from "./authentication-button";
export const CustomNavbar = () => {

  const { isAuthenticated, user , logout } = useAuth0();
  console.log(user);
  return (
    
    <Navbar collapseOnSelect bg="light" expand="lg" >
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse>
        <Nav className="ml-auto" >
          <Link className="nav-link" to="/">O nás</Link>
          <Link className="nav-link" to="/schedule">Rozvrh</Link>
          <Link className="nav-link" to="/instructor">Trenér</Link>
          <Link className="nav-link" to="/contact">Kontakt</Link>
          <Link className="nav-link" to="/video">Video</Link>
          {isAuthenticated ?
            <React.Fragment>
              <Link className="nav-link" onClick={() => logout({ returnTo: window.location.origin })} to="/">Odhlášení</Link>
              <Link className="nav-link" to="/account">Účet</Link>
              <Link className="nav-link" to="/lecturesroster">Lekce</Link>
             {
                isUserAdmin(user) && <Link className="nav-link" to="/lecturesadmin">Admin</Link> 
             }
              
            </React.Fragment > :
            <React.Fragment>
              <AuthenticationButton />
            </React.Fragment>
          }
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

