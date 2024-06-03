
import { useEffect, useState } from "react";
import DisplayTemplateGrid from "../functii/gridtemplate";
import "./portofoliu.css";
import {Link} from 'react-router-dom';
import { useContext } from "react";
import { ProduseContext } from "../../App";

async function getMeniu(setMeniu, accessToken, navigate){
  const response = await fetch('http://localhost:3000/meniu', {
    headers: {
      'Authorization' : `Bearer ${accessToken}`
    }
  });

  const meniuFromServer = await response.json();
  
  if(response.ok){
    setMeniu(meniuFromServer);
  }

  if (response.status === 401) {
    navigate('/login')
  }
}


function DisplayPortofoliu() {
  const accessToken = localStorage.getItem("accessToken");
  const [auth, setAuth] = useState(accessToken);
  const {lista_pizza, setMeniu} = useContext(ProduseContext)
  
  useEffect(() => {
    getMeniu(setMeniu, auth)
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
