import "./servicii.css";

function DisplayServicii() {
    return (
      <>
          <h1 className="main_title_servicii">Serviciile noastre</h1>
        <div className="servicii">
        <div className="servicii_text">
          <h2 className="title_servicii">Restaurant Iasi</h2>
          <h1 className="subtitle_servicii">Complex Popas Pacurari</h1>
          <div className="space"></div>
          <hr  style={{
                    color: '#fff',
                    backgroundColor: '#000000',
                    height: .3,
                    borderColor : '#000000',
                  }}/>
                  <p className="paragraf_title">
                  Complex Popas Păcurari este locaţia perfectă pentru a organiza orice tip de eveniment sau pentru a lua masa, a la carte, în oraş. <br/><br/>
                  Fie că vorbim de nunta Iasi, cumătrie, banchet sau diferite simpozioane, aniversări, o cerere în căsătorie, o cină în familie sau cu prietenii, Complex Popas Păcurari – restaurant Iași vă pune la dispoziţie tot ce aveţi nevoie. La noi ai parte de tot răsfăţul pe care-l meriţi!
                  </p>
                  <div className="space"></div>
        </div>
        <div className="servicii_poza"></div>
        </div>
      </>
    );
  }
  export default DisplayServicii;

