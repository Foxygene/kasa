import "./footer.css";
import logo from "../assets/logo.svg";

function Footer() {
  return (
    <div className="footer">
      <img src={logo}></img>
      <p>© 2020 Kasa. All rights reserved</p>
    </div>
  );
}

export default Footer;
