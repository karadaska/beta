
import { useEffect } from "react";
import DisplayTemplateGrid from "../functii/gridtemplate";
import "./portofoliu.css";
import {Link} from 'react-router-dom';
import { useContext } from "react";
import { ProduseContext } from "../../App";

async function getMeniu(setMeniu){
  const response = await fetch('http://localhost:3000/meniu');

  const meniuFromServer = await response.json();
  
  if(response.ok){
    setMeniu(meniuFromServer);
  }
}

function DisplayPortofoliu() {
  // const [lista_pizza, setMeniu] = useState([]);
  const {lista_pizza, setMeniu} = useContext(ProduseContext)
  useEffect(() => {
    getMeniu(setMeniu)
  }, []);

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
