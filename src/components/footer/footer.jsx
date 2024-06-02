import "./footer.css";

function DisplayFooter() {
  return (
    <>
      <div className="div_title_footer" id="contact">
        <h2 className="title_footer">Contacteaza-ne</h2>
      </div>
      <div className="flex-container">
        <div className="div1_sites_left">
          <span>
            Telefon: 0741456655
          </span>
          <br />
          <span>
          Telefon: 0741456655
          </span>
          <br />
          <span>
          Fax: 0262332555
          </span>
        </div>
        <div>
          <div
            className="flex-item-center">
            <div className="vl"></div>
          </div>
        </div>
        <div className="div1_sites_right">
        <span>
            Email: comenzi@yahoo.com
          </span>
          <br />
          <span>
          Judet: Iasi
          </span>
          <br />
          <span>
          Loc: Rediu Iasi
          </span>
        </div>
      </div>
      <div className="space">&nbsp;</div>
    </>
  );
}
export default DisplayFooter;
