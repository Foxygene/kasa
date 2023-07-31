import logo from "../assets/logo.svg";
import "./header.css";

function Header() {
  return (
    <div class="header">
      <img class="logo" src={logo}></img>
      <div class="navbar">
        <a>Accueil</a>
        <a>A Propos</a>
      </div>
    </div>
  );
}

export default Header;
