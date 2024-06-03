import { useNavigate } from "react-router-dom";
import "./register.css";
import DisplayNavContact from "../../nav-contact/nav_contact";
import DisplayNavBar from "../../header/header";

export function Register() {
  const navigate = useNavigate();

  function register(event) {
    event.preventDefault();

    const formElement = event.target;
    const { email, username, password, reTypePassword } = formElement;

    if (password.value !== reTypePassword.value) {
      console.warn(`Parolele nu sunt la fel`);
      return;
    }

    const user = {
      email: email.value,
      username: username.value,
      password: password.value,
    };

    fetch("http://localhost:3000/register", {
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
      <div className="login-page">
        <div className="form">
          <form onSubmit={register}>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Introduc username"
            />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Introdu adresa de email"
            />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="password"
            />
            <input
              type="password"
              id="reTypePassword"
              name="reTypePassword"
              placeholder="Reintrodu parola"
            />
            <button>Inregistreaza</button>
          </form>
          <p className="message">Daca ai cont click aici:</p>
        </div>
      </div>
    </div>
  );
}

{
  /* <fieldset>
          <label htmlFor="username">Username:</label>
          <div>
            <input type="text" id="username" name="username" />
          </div>
        </fieldset>

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

        <fieldset>
          <label htmlFor="reTypePassword">Re type password:</label>
          <div>
            <input type="password" id="reTypePassword" name="reTypePassword" />
          </div>
        </fieldset> */
}
{
  /* <div className="butoane">
        <button className="register">Register</button>
        </div> */
}
