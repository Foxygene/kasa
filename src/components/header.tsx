import logo from "../assets/logo.svg";
import "./header.css";

function Header() {
  return (
    <div class="header">
      <img src={logo}></img>
      <div>
        <a>Accueil</a>
        <a>A Propos</a>
      </div>
    </div>
  );
}

export default Header;
