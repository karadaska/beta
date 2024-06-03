import "./App.css";
import DisplayComponents from "./components/display-components/display";
import PizzzaDetails from "./components/pizza-details/pizzadetails";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import AdaugaPizza from "./components/add-pizza/add";
import EditPizza from "./components/edit-pizza/edit";
import EditProdus from "./components/edit-produs/editprodus";
import { Register } from "./components/auth/register/register";
import { Login } from "./components/auth/login/login";

/* de aici import pt login*/
import React, { useState } from "react";

export const ProduseContext = React.createContext();


function App() {
  const [lista_pizza, setProduse] = useState([]);
  return (
    <>
    <ProduseContext.Provider value ={{lista_pizza,setProduse}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <DisplayComponents />}></Route>
          <Route path="/viewpizza/:id" element={ <PizzzaDetails />}></Route>
          <Route path="add-pizza" element={ <AdaugaPizza />}></Route>
          <Route path="edit-pizza/:id" element={ <EditPizza />}></Route>
          <Route path="edit-produs/:id" element={ <EditProdus />}></Route>
          <Route path="/register" element={ <Register />}></Route>
          <Route path="/login" element={ <Login />}></Route>
        </Routes>
      </BrowserRouter>
      </ProduseContext.Provider>
    </>
  );
}

export default App;

    /*"server": "npx json-server-auth db.json -r routes.json"*/