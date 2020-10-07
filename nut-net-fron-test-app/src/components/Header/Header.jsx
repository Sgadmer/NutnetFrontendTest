import React from "react";
import "./Header.scss";
import NavBar from "./NavBar";
import HeaderContent from "./HeaderContent";

function Header() {
  return (
    <div className="header">
      <NavBar />
      <HeaderContent />
    </div>
  );
}

export default Header;
