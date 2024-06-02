import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

async function getPizzaById(pizza_id) {
  const response = await fetch(`http://localhost:3000/meniu/${pizza_id}`);
  const pizza = await response.json();

  return pizza;
}


export default function editPizza() {
  const mainPage = useNavigate();

  const [pizza, setPizza] = useState({});
  const [pizzaTitle, setPizzaTitle] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  

  function savePizza() {
    fetch(`http://localhost:3000/meniu/${id}`, {
      method: "PUT",
      body: JSON.stringify(pizza),
    }).then(() => console.log("am facut update"));
  }

  useEffect(() => {
    async function main(){
      const pizzaContent = await getPizzaById(id);
      setPizza(pizzaContent);
      setPizzaTitle(pizzaContent.title);
    }
    main();
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
    <div>
      <label htmlFor="title">Title</label>
      <input name="title" type="text" value={pizzaTitle}  onChange={e => setPizzaTitle(e.target.value)} />
      <button onClick={savePizza}> Update</button>
    </div>
  );
}




// import { useParams, useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";

// async function getPizzaById(pizza_id) {
//   const response = await fetch(`http://localhost:3000/meniu/${pizza_id}`);
//   const pizza = await response.json();

//   return pizza;
// }


// export default function editPizza() {
//   const mainPage = useNavigate();

//   const [pizza, setPizza] = useState({});
//   const [pizzaTitle, setPizzaTitle] = useState('');
//   const { id } = useParams();
//   const navigate = useNavigate();

  

//   function savePizza() {
//     fetch(`http://localhost:3000/meniu/${id}`, {
//       method: "PUT",
//       body: JSON.stringify(pizza),
//     }).then(() => console.log("am facut update"));
//   }

//   useEffect(() => {
//     async function main(){
//       const pizzaContent = await getPizzaById(id);
//       console.log(pizzaContent);
//       setPizza(pizzaContent);
//       setPizzaTitle(pizzaContent.title);
//     }
//     main();
//   }, []);

//   useEffect(() => {
//     if (!pizza) {
//       navigate("/");
//     }
//   }, [pizza]);

//   if (!pizza) {
//     return;
//   }

//   return (
//     <div>
//       <label htmlFor="title">Title</label>
//       <input name="title" type="text" value={pizzaTitle}  onChange={e => setPizzaTitle(e.target.value)} />
//       <button onClick={savePizza}> Update</button>
//     </div>
//   );
// }



