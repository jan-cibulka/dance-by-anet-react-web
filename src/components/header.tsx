import PropTypes from "prop-types"
import React from "react"
import {
  BrowserRouter as Router,
  Link

} from 'react-router-dom';
import gifFacebook from '../images/facebook.gif';
import gifInstagram from '../images/instagram.gif';


const Header = (props : {siteTitle: string}) => {


  return (

    <header style={{ position: "relative" }}>

      <h1 style={{ margin: 0, position: "relative" }} className="headerTitle">
        <Link
          to="/"
          style={{
            color: `black `,
            fontFamily: 'Quicksand',
            textDecoration: "none",
            fontWeight: 'bold',
            textShadow: `2px 2px rgb(255 0 102)`
          }}
        >
          {props.siteTitle}
        </Link>
      </h1>

      <div className={"fb-ig-icons"}>
        <a href="https://instagram.com/dancebyanet?igshid=o4v428nwwkqf" className="m-2" ><img src={gifFacebook} width={30} /></a>
        <a href="https://facebook.com" className="m-2" ><img src={gifInstagram} width={30} /></a>
      </div>
    </header>
  )
}

export default Header;
