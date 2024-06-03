import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "../pizza-details/pizzadetails.css";
import DisplayNavContact from "../nav-contact/nav_contact";
import DisplayNavBar from "../header/header";


async function getPizzaById(seteazaPizza, pizza_id) {
  const response = await fetch(`http://localhost:3000/meniu/${pizza_id}`);
  const meniuFromServer = await response.json();

  seteazaPizza(meniuFromServer);
}

export default function PizzaDetails() {
  const mainPage = useNavigate();

  const [pizza, setPizza] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getPizzaById(setPizza, id);
  }, []);

  useEffect(() => {
    if (!pizza) {
      navigate("/");
    }
  }, [pizza]);

  if (!pizza) {
    return;
  }

  function deletePizza(){
    const deleteConfirm = confirm('Sigur vrei sa stergi produsul?');
    if(deleteConfirm){
      fetch(`http://localhost:3000/meniu/${id}`, {method : 'DELETE'}).then(() => mainPage('/'));
    }
  }

  function editProdus(){
    navigate(`/edit-produs/${id}`)
}


  return (
    <div className="div_details">
       <DisplayNavContact />
         <DisplayNavBar />
      <div>
        <table className="table">
        <tr>
            <th className="table_td">Poza:</th>
            <td>
            <img src={pizza.imageUrl} className='table_img' alt="Mamma mia" />
            </td>
          </tr>
          <tr>
            <th className="table_td">Titlu:</th>
            <td>{pizza.title}</td>
          </tr>
          <tr>
            <th className="table_td">Descriere:</th>
            <td>{pizza.descriere}</td>
          </tr>
          <tr>
            <th className="table_td">Pret:</th>
            <td>{pizza.pret}</td>
          </tr>
          <tr>
            <th colSpan={2}>
            <button className="delete" onClick={deletePizza}> Delete</button>
          <button className="edit" onClick={editProdus}> Edit</button>
            </th>
          </tr>
        </table>
      </div>
    </div>
  );
}

 {/* <h3>Titlu: {pizza.title}</h3>
        <h3>Descriere{pizza.descriere}</h3>
        <h3>Pret: {pizza.pret}</h3> */}