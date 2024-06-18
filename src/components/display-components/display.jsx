
import DisplayNavContact from "../nav-contact/nav_contact";
import DisplayNavBar from "../header/header";
import DisplayBeginSection from "../home-section/begin_section";
import DisplayServicii from "../servicii/servicii";
import DisplayPortofoliu from "../portofoliu/portofoliu";
import DisplayFooter from "../footer/footer";
import DisplayCopyright from "../copyright/copyright";
import DisplayUser from "../user/user"

export default function DisplayComponents(){
    return (
        <>
        <DisplayNavContact />
        <DisplayNavBar />
        <DisplayBeginSection />
        <DisplayServicii />
        <DisplayPortofoliu /> 
        <DisplayFooter />
        <DisplayCopyright /> 
        <DisplayUser /> 
        </>
    );
}