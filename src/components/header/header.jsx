import "./header.css";
import Logo from '../../images/logo/logo_popas.jpg';
import Comanda from '../../images/Navbar/comanda.png';
import Login from '../../images/Navbar/login.png';

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
              <a href="/">Acasa main</a>
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
            <img className="comanda_online" src={Comanda} />
            </li>
            <li className="list-item">
            <img className="login" src={Login} />
            </li>
          </ul>
        </div>
        <div className="div4_navbar"></div>
      </div>
    </>
  );
}

export default DisplayNavBar;


