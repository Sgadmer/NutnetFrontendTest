import React, { useState } from "react";
import logo from "../../tajamLogo.png";

function NavBar() {
  const [navigationClasses, setNavigationClasses] = useState("navigation");
  const [navbarToggleBTNClasses, setNavbarToggleBTNClasses] = useState(
    "menu-icon"
  );

  function toggleNavigation() {
    let BTNclasses = navbarToggleBTNClasses;
    let navClasses;
    if (BTNclasses.match("clicked")) {
      BTNclasses = "menu-icon";
      navClasses = "navigation";
    } else {
      BTNclasses += " clicked";
      navClasses = "navigation navigation__showed";
    }

    setNavigationClasses(navClasses);
    setNavbarToggleBTNClasses(BTNclasses);
  }

  return (
    <>
      <nav className="navBar  contentWrapper">
        <a href="/1" className="navBar__logo">
          <img src={logo} alt="HeaderLogo" />
        </a>

        <div className={navigationClasses}>
          <a href="/2" className="navigation__btn_active">
            HOME
          </a>
          <a href="/3" className="navigation__btn">
            ABOUT
          </a>
          <a href="/4" className="navigation__btn">
            EXPERTISE
          </a>
          <a href="/5" className="navigation__btn">
            TEAMS
          </a>
          <a href="/6" className="navigation__btn">
            WORKS
          </a>
          <a href="/7" className="navigation__btn">
            PEOPLE SAY
          </a>
          <a href="/8" className="navigation__btn">
            CONTACT
          </a>
        </div>

        <button
          className="navbarToggle-BTN"
          type="button"
          onClick={() => toggleNavigation()}
        >
          <div className={navbarToggleBTNClasses}>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        </button>
      </nav>
    </>
  );
}

export default NavBar;
