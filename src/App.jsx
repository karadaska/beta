import "./App.css";
import DisplayComponents from "./components/display-components/display";
import PizzzaDetails from "./components/pizza-details/pizzadetails";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import AdaugaPizza from "./components/add-pizza/add";
import EditPizza from "./components/edit-pizza/edit";
import EditProdus from "./components/edit-produs/editprodus";
import { Register } from "./components/auth/register/register";
// import { Login } from "./components/auth/login/Login";

/* de aici import pt login*/
// import React, { useEffect, useState } from "react";

// export const AuthContext = React.createContext();


function App() {
  // const [auth, setAuth] = useState(accessToken);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <DisplayComponents />}></Route>
          <Route path="/viewpizza/:id" element={ <PizzzaDetails />}></Route>
          <Route path="add-pizza" element={ <AdaugaPizza />}></Route>
          <Route path="edit-pizza/:id" element={ <EditPizza />}></Route>
          <Route path="edit-produs/:id" element={ <EditProdus />}></Route>
          <Route path="/register" element={ <Register />}></Route>
          {/* <Route path="/Login" element={ <Login />}></Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

    /*"server": "npx json-server-auth db.json -r routes.json"*/