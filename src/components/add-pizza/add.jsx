import { Link, useNavigate, useParams } from "react-router-dom";
import DisplayNavContact from "../nav-contact/nav_contact";
import DisplayNavBar from "../header/header";


export default function createPizza() {
  const navidate = useNavigate();
  const {id} = useParams();

    
  function SavePizza(event) {
    event.preventDefault();
    const formElement = event.target;

    const { title, descriere, pret, imageUrl } = formElement;

    const pizza = {
      title: title.value,
      descriere: descriere.value,
      pret: pret.value,
      imageUrl: imageUrl.value,
    };

    fetch("http://localhost:3000/meniu", {
      method: "POST",
      body: JSON.stringify(pizza),
    }).then(() => navidate('/'));

    formElement.reset();
  }

  return (
    <>
     <DisplayNavContact />
      <DisplayNavBar />
    <Link to="/">Inapoi</Link>
    <form onSubmit={SavePizza}>
      <fieldset>
        <label htmlFor="title">Nume pizza</label>
        <input
          id="title"
          type="text"
          required
          className="title"
          minLength={3}
        />
      </fieldset>

      <fieldset>
        <label htmlFor="descriere">Descriere:</label>
        <textarea
          id="descriere"
          type="text"
          required
          className="descriere"
          minLength={5}
        />
      </fieldset>

      <fieldset>
        <label htmlFor="pret">Pret:</label>
        <textarea
          id="pret"
          type="text"
          required
          className="pret"
          minLength={1}
        />
      </fieldset>

      <fieldset>
        <label htmlFor="imageUrl">Image Url</label>
        <input
          id="imageUrl"
          type="text"
          required
          className="imageUrl"
          minLength={1}
        />
      </fieldset>
      <button>Adauga</button>
    </form>
    </>
  );
}
