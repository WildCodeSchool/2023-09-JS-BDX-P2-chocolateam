import "../style/App.scss";
import { Link } from "react-router-dom";

function TemplateHome() {
  return (
    <div className="container">
      <div className="mood-playlist">
        <Link to="/playlist/country">Soirée au camping Les flots Bleus</Link>
        <Link to="/playlist/kids">Anniversaire du petit Antoine</Link>
        <Link to="/playlist/reggaeton">Tu veux pécho ?</Link>
        <Link to="/playlist/sad">Dimanche soir de bonne humeur</Link>
        <Link to="/playlist/death-metal">Pour se détendre</Link>
      </div>
    </div>
  );
}

export default TemplateHome;
