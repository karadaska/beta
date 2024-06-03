import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./editprodus.css";
import DisplayNavContact from "../nav-contact/nav_contact";
import DisplayNavBar from "../header/header";

export default function UpdateProdus() {
  const { id } = useParams();
  const [values, setValues] = useState({
    id: id,
    title: "",
    descriere: "",
    pret: "",
    url: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:3000/meniu/" + id)
      .then((res) => {
        setValues({
          ...values,
          title: res.data.title,
          descriere: res.data.descriere,
          pret: res.data.pret,
          imageUrl: res.data.imageUrl,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  const navigate = useNavigate();
  const updateProdusItem = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:3000/meniu/" + id, values)
      .then((res) => {
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <DisplayNavContact />
      <DisplayNavBar />
      <form onSubmit={updateProdusItem}>
        <div className="main_div">
          <table className="table">
            <tr>
              <th className="th_table">Titlu</th>
              <td className="td_table">
                <input
                  type="text"
                  name="title"
                  className="title"
                  placeholder="title"
                  value={values.title}
                  onChange={(e) =>
                    setValues({ ...values, title: e.target.value })
                  }
                />
              </td>
            </tr>
            <tr>
              <th className="th_table">Descriere</th>
              <td className="td_table">
                <textarea
                  type="text"
                  name="poza"
                  placeholder="Descriere"
                  value={values.descriere}
                  onChange={(e) =>
                    setValues({ ...values, descriere: e.target.value })
                  }
                ></textarea>
              </td>
            </tr>
            <tr>
              <th className="th_table">Pret:</th>
              <td className="td_table">
                <input
                  type="text"
                  name="pret"
                  className="pret"
                  placeholder="Pret"
                  value={values.pret}
                  onChange={(e) =>
                    setValues({ ...values, pret: e.target.value })
                  }
                />
              </td>
            </tr>
            <tr>
              <th className="th_table">Poza:</th>
              <td className="td_table">
                <textarea
                  type="text"
                  name="poza"
                  placeholder="Url poza"
                  value={values.imageUrl}
                  onChange={(e) =>
                    setValues({ ...values, url: e.target.value })
                  }
                ></textarea>
              </td>
            </tr>
            <tr>
              <th colSpan={2}>
                <button className="update">Update</button>
                <button className="produse">
                  <Link to={"/"}>Produse</Link>
                </button>
                <button className="inapoi">
                  <Link to={/viewpizza/ + id}> Inapoi</Link>
                </button>
              </th>
            </tr>
          </table>
        </div>
      </form>
    </div>
  );
}

{
  /* <label>Title</label>
                    <input type="text" name="title" className="title" placeholder="title" value={values.title} 
                    onChange={e => setValues({...values,title:e.target.value})}/>
                      <label>Descriere</label>
                    <input type="text" name="descriere" className="title" placeholder="title" value={values.descriere} 
                    onChange={e => setValues({...values,descriere:e.target.value})}/> */
}
{
  /* <input type="text" name="pret" className="title" placeholder="title" value={values.pret} 
                    onChange={e => setValues({...values,pret:e.target.value})}/> */
}

{
  /* <input
                  type="text"
                  name="poza"                
                  placeholder="Url poza"
                  value={values.imageUrl}
                  onChange={(e) =>
                    setValues({ ...values, url: e.target.value })
                  } */
}

{
  /* <input
                  type="text"
                  name="descriere"
                  className="title"
                  placeholder="title"
                  value={values.descriere}
                  onChange={(e) =>
                    setValues({ ...values, descriere: e.target.value })
                  } */
}
