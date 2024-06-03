import "./App.css";
import DisplayComponents from "./components/display-components/display";
import PizzzaDetails from "./components/pizza-details/pizzadetails";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import AdaugaPizza from "./components/add-pizza/add";
import EditProdus from "./components/edit-produs/editprodus";
import React, { useState } from "react";
import { Register } from "./components/auth/register/register";
import { Login } from "./components/auth/login/login";

export const ProduseContext = React.createContext();
export const AuthContext = React.createContext();

function App() {
  const accessToken = localStorage.getItem("accessToken");
  const [lista_pizza, setProduse] = useState([]);
  const [auth, setAuth] = useState(accessToken);
  
  return (
    <>
    <ProduseContext.Provider value ={{lista_pizza,setProduse}}>
    <AuthContext.Provider value={{ auth, setAuth }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <DisplayComponents />}></Route>
          <Route path="/viewpizza/:id" element={ <PizzzaDetails />}></Route>
          <Route path="add-pizza" element={ <AdaugaPizza />}></Route>
          <Route path="edit-produs/:id" element={ <EditProdus />}></Route>
          <Route path="/register" element={ <Register />}></Route>
          <Route path="/login" element={ <Login />}></Route>
        </Routes>
      </BrowserRouter>
      </AuthContext.Provider>
      </ProduseContext.Provider>
    </>
  );
}

export default App;
