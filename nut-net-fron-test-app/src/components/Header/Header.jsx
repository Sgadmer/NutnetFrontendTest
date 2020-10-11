import React from "react";
import "./Header.scss";
import NavBar from "./NavBar";
import HeaderContent from "./HeaderContent";

function Header() {
  return (
    <header className="header">
      <NavBar />
      <HeaderContent />
    </header>
  );
}

export default Header;
