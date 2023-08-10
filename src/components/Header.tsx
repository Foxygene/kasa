import logo from "../assets/logo.svg";
import "./header.css";

function Header() {
  return (
    <div className="header">
      <img className="logo" src={logo}></img>
      <div className="navbar">
        <a href="/">Accueil</a>
        <a href="/about">A Propos</a>
      </div>
    </div>
  );
}

export default Header;
