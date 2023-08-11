import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <div className="header">
      <img className="logo" src={logo}></img>
      <div className="navbar">
        <Link to="/">Accueil</Link>
        <Link to="/about">A Propos</Link>
      </div>
    </div>
  );
}

export default Header;
