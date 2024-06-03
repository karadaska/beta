import "./header.css";
import Logo from '../../images/logo/logo_popas.jpg';
import Register from '../../images/Navbar/register.png';
import Login from '../../images/Navbar/login.jpg';
import { Link } from "react-router-dom";

function DisplayNavBar() {
  return (
    <>
      <div className="navbar">
      <div className="div1_header"></div>
        <div className="div2_logo"><img className="logo-img" src={Logo} /></div>
        <div className="div3_navbar">
        <input type="checkbox" id="nav" />
                <label htmlFor="nav"></label>
          <ul className="ul-list">
            <li className="list-item">
              <a href="/">Acasa</a>
            </li>
            <li className="list-item">
              <a href="#meniu">Meniu</a>
            </li>
            {/* <li className="list-item">
              <a href="#">Galerie</a>
            </li> */}
            <li className="list-item">
              <a href="#contact">Contact</a>
            </li>
            <li className="list-item">
            <Link to="/register">
            <img className="comanda_online" title="Vrei sa te inregistrezi?" src={Register} />
            </Link>
            </li>
            <li className="list-item">
              <Link to="/login">
            <img className="login" title="Login" src={Login} />
            </Link>
            </li>
          </ul>
        </div>
        <div className="div4_navbar"></div>
      </div>
    </>
  );
}

export default DisplayNavBar;


