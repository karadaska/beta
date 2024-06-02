import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "../pizza-details/pizzadetails.css";


async function getPizzaById(seteazaPizza, pizza_id) {
  const response = await fetch(`http://localhost:3000/meniu/${pizza_id}`);
  const meniuFromServer = await response.json();

  seteazaPizza(meniuFromServer);
}

export default function PizzaDetails() {
  const mainPage = useNavigate();


  function deletePizza(){
    const deleteConfirm = confirm('Sigur vrei sa stergi produsul?');
    if(deleteConfirm){
      fetch(`http://localhost:3000/meniu/${id}`, {method : 'DELETE'}).then(() => mainPage('/'));
    }
  }
  
  function editPizza(){
      navigate(`/edit-pizza/${id}`)
  }

  function editProdus(){
    navigate(`/edit-produs/${id}`)
}

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

  return (
    <div className="div_details">
      <div>
        <h3>Titlu: {pizza.title}</h3>
        <h3>Descriere{pizza.descriere}</h3>
        <h3>Pret: {pizza.pret}</h3>
        Am de facut poza
      </div>
       <button onClick={deletePizza}> delete</button>
       <button onClick={editProdus}> Edit</button>
    </div>
  );
}

