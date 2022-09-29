import React from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";

const Header = () => {
  return (
    <div className="header">
      <img src={Logo} alt="" className="logo" />
      <ul className="header-menu">
        <li>Home</li>
        <li>Programas</li>
        <li>Porque nós</li>
        <li>Planos</li>
        <li>Testemunhos</li>
      </ul>
    </div>
  );
};

export default Header;
