import logo from "../assets/logo.svg";
import "./header.css";

function Header() {
  return (
    <div className="header">
      <img className="logo" src={logo}></img>
      <div className="navbar">
        <a>Accueil</a>
        <a>A Propos</a>
      </div>
    </div>
  );
}

export default Header;
