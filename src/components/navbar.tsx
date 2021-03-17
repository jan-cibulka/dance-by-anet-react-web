import { useAuth0, withAuth0 } from "@auth0/auth0-react";
import React from "react"
import { Button, Form, FormControl, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import AuthenticationButton from "./authentication-button";
export const CustomNavbar = () => {

  const { isAuthenticated } = useAuth0();
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
          <Link className="nav-link" to="/account">Účet</Link>
          <Link className="nav-link" to="/lecturesroster">Lekce</Link>
         {isAuthenticated ?
          <React.Fragment>
         
          </React.Fragment > :
          <React.Fragment></React.Fragment>
         }


          <AuthenticationButton />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
