import React from "react";
import logo from "./headerLogo.png";

function NavBar() {
    return (

        <div className="navBar  contentWrapper">
          <a href="/#" className="navBar__logo">
            <img src={logo} alt="HeaderLogo" />
          </a>

          <div className="navigation">
            <a href="/#" className="navigation__btn_active">
              HOME
            </a>
            <a href="/#" className="navigation__btn">
              ABOUT
            </a>
            <a href="/#" className="navigation__btn">
              EXPERTISE
            </a>
            <a href="/#" className="navigation__btn">
              TEAMS
            </a>
            <a href="/#" className="navigation__btn">
              WORKS
            </a>
            <a href="/#" className="navigation__btn">
              PEOPLE SAY
            </a>
            <a href="/#" className="navigation__btn">
              CONTACT
            </a>
          </div>
        </div>
        

    );
}

export default NavBar;



