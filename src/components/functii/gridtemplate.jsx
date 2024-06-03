import PropTypes from 'prop-types';
import "./gridtemplate.css";

function DisplayTemplateGrid (props) {
  const {lista_pizza} = props;
    return (
      <div className="grid-item" key={lista_pizza.id}>
      <img src={lista_pizza.imageUrl} className='poza_portofoliu' alt="Mamma mia" />
      <div className="content">
        <h3>{lista_pizza.title}</h3>
        <p>{lista_pizza.descriere}</p>
      </div>
      <div className="space"></div>
      <div className="info">
        <span className="pret">{lista_pizza.pret}</span>
        <button className="adauga_cos">Adauga in cos</button>
      </div>
    </div>
    )
}

export default DisplayTemplateGrid;

// DisplayTemplateGrid.propTypes = 
// {
//   lista_pizza : {
//   id: PropTypes.string,
//   imageUrl: PropTypes.string,
//   pret: PropTypes.string,
//   title: PropTypes.string
// }
// }

