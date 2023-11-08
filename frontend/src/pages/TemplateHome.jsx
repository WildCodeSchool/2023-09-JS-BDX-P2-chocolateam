import "../style/App.scss";
import { Link } from "react-router-dom";

function TemplateHome() {
  return (
    <div className="container">
      <div className="btn-container">
        <Link className="search-button" to="/playlist/country">
          Soirée au camping Les flots Bleus
        </Link>
        <Link className="search-button" to="/playlist/disney">
          Anniversaire du petit Antoine
        </Link>
        <Link className="search-button" to="/playlist/reggaeton">
          Est-ce que tu veux pécho ce soir ?
        </Link>
        <Link className="search-button" to="/playlist/sad">
          Dimanche soir de bonne humeur
        </Link>
        <Link className="search-button" to="/playlist/death-metal">
          Pour se détendre et se relaxer
        </Link>
      </div>
    </div>
  );
}

export default TemplateHome;
