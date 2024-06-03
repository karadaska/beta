import { useNavigate } from "react-router-dom";
import DisplayNavContact from "../../nav-contact/nav_contact";
import DisplayNavBar from "../../header/header";
import { useContext } from "react";
import { AuthContext } from "../../../App";
import "./login.css";

export function Login() {
  const navigate = useNavigate();

  const { setAuth } = useContext(AuthContext);

  async function login(event) {
    event.preventDefault();

    const formElement = event.target;
    const { email, password } = formElement;

    const user = {
      email: email.value,
      password: password.value,
    };

    const response = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const body = await response.json();

    if (response.status === 400) {
      return;
    }

    if (response.ok) {
      localStorage.setItem("accessToken", body.accessToken);
      setAuth(body.accessToken);
      navigate("/");
    }
  }

  return (
    <div>
      <DisplayNavContact />
      <DisplayNavBar />
      <div className="login-page">
  <div className="form">
    <form className="register-form" onSubmit={login}>
      <input type="text" placeholder="name"/>
      <input type="password" placeholder="password"/>
      <input type="text" placeholder="email address"/>
      <button>create</button>
      <p className="message">Already registered? <a href="#">Sign In</a></p>
    </form>
    <form className="login-form">
      <input type="text" placeholder="username"/>
      <input type="password" placeholder="password"/>
      <button>login</button>
      <p className="message">Nu este inregistrat? Inregistreaza-te acum!</p>
    </form>
  </div>
</div>


{/*       
      <div className="formular">
        <form onSubmit={login}>
          <fieldset>
            <label htmlFor="email">Email:</label>
            <div>
              <input type="email" id="email" name="email" />
            </div>
          </fieldset>
          <fieldset>
            <label htmlFor="password">Password:</label>
            <div>
              <input type="password" id="password" name="password" />
            </div>
          </fieldset>
          <button>Login</button>
        </form>
      </div> */}
    </div>
  );
}
