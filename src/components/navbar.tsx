import React from "react"
import { Button, Form, FormControl, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import AuthenticationButton from "./authentication-button";
export class CustomNavbar extends React.Component {

  render(): JSX.Element {
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
            
            <AuthenticationButton />
{/*  {!isAuthenticated() ? <React.Fragment>
              <Link className="nav-link" to="/account">Přihlášení</Link>
            </React.Fragment>
              : ""}
            {isAuthenticated() ? <React.Fragment>
              <Link className="nav-link" to="/account/">Účet</Link>
              <Link className="nav-link" to="/account/video/">Video</Link>
              <a
                href="#logout"
                className="nav-link"
                onClick={e => {
                  logout()
                  e.preventDefault()
                }}
              >
                Odhlášení
               </a>
            </React.Fragment>
              : ""} */ } 
          
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default CustomNavbar
