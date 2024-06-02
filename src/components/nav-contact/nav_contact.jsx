import "./nav_contact.css";
import Facebook from '../../images/Icons/facebook_icon.png';
import Agenda from '../../images/Icons/agenda_icon.png';
import { Link } from "react-router-dom";
function DisplayNavContact() {
  return (
    <>
    <div className="header-contact">
        <div className="div1_contact"></div>
        <div className="div2_contact">Telefon: 0756.166.400</div>
        <div className="div3_contact">
        <span className="icons_header">
        <Link to="https://www.facebook.com/pages/Popas-Pacurari/205645022807257">
        <img className="icons_header_facebook" src={Facebook} />
        </Link>
        <Link to="https://www.google.com/search?q=contact+popas+pacurari&oq=contact+popas+pacurari&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRhAMggIAhAAGBYYHjINCAMQABiGAxiABBiKBTINCAQQABiGAxiABBiKBTIKCAUQABiABBiiBDIKCAYQABiABBiiBDIKCAcQABiABBiiBNIBCDU0NTRqMGo3qAIIsAIB&sourceid=chrome&ie=UTF-8">
        <img className="icons_header_agenda" src={Agenda} />
        </Link>
      </span>
        </div>
        <div className="div4_contact"></div>
    </div>
    </>
  );
}

export default DisplayNavContact
