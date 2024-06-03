import { useNavigate } from "react-router-dom";
import DisplayNavContact from "../../nav-contact/nav_contact";
import DisplayNavBar from "../../header/header";

export function Login() {
  const navigate = useNavigate();

  function login(event) {
    event.preventDefault();

    const formElement = event.target;
    const { email, password } = formElement;

    const user = {
      email: email.value,
      password: password.value,
    };

    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then(() => navigate("/login"));
  }

  return (
    <div>
      <DisplayNavContact />
      <DisplayNavBar />
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
      </div>
    </div>
  );
}
