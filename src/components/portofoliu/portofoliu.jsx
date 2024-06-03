
import { useEffect, useState } from "react";
import DisplayTemplateGrid from "../functii/gridtemplate";
import "./portofoliu.css";
import {Link} from 'react-router-dom';
// import { useContext } from "react";
// import { ProduseContext } from "../../App";
import { useNavigate } from "react-router-dom";
import { getMeniu } from "../../lib/produse";

function DisplayPortofoliu() {
  const navigate = useNavigate();
  const accessToken = localStorage.getItem("accessToken");

  const [lista_pizza, setMeniu] = useState([]);
  const [auth, setAuth] = useState(accessToken);

  useEffect(() => {
    getMeniu(setMeniu, auth, navigate).catch((error) =>
      console.log(error)
    );
  }, [auth]);

  return (
    <>
      <h2 className="main-title" id="meniu">Meniu pizza</h2>
      <div className="main_div">
        <div className="div_first_portofoliu"></div>
        <div className="grid-portofoliu">
          {lista_pizza.map((item_pizza) => (
         <Link key = {item_pizza.id} to={'/viewpizza/' + item_pizza.id}>
          <DisplayTemplateGrid lista_pizza={item_pizza}  />
          {/* <div><Link to="add-pizza">Adauga produs</Link></div> */}
          </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default DisplayPortofoliu;

 