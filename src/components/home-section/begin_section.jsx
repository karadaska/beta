import "./begin_section.css";

function DisplayBeginSection() {
  return (
    <>
      <div className="home">
            <div className="container">
                <div className="home-information">
                    <h2 className="home-title margin-bottom">Pizza la cuptor pe lemne</h2>
                    <h4 className="home-info">Preluam comenzi telefonic: 0741 971 614</h4>
                    <p className="home-desc">
                    Comandă minimă:  <span>În Iași 65 lei</span> iar În exteriorul orașului, la maxim 9 km de la sediul firmei 150 lei 
                    </p>
                    <p className="home-desc">Vă mulțumim pentru înțelegere!</p>
                    {/* <button className="home-btn" id="meniu2">Meniu</button> */}
                </div>
            </div>
        </div>
    </>
  );
}
export default DisplayBeginSection;
