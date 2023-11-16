import "../style/App.scss";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="container">
      <div className="btn-container">
        <img
          src="./src/assets/LogoMoodStationVSansRond.png"
          alt="Logo Mood Station"
        />
        <Link className="search-button" to="/playlist/country">
          Soirée au camping Les Flots Bleus
        </Link>
        <Link className="search-button" to="/playlist/reggaeton">
          Est-ce que tu veux pécho ce soir ?
        </Link>
        <Link className="search-button" to="/playlist/sad">
          Dimanche soir chill & relax
        </Link>
        <Link className="search-button" to="/playlist/disney">
          Anniversaire du petit Antoine
        </Link>
        <Link className="search-button" to="/playlist/death-metal">
          Une de perdue, zéro de retrouvée
        </Link>
      </div>
    </div>
  );
}

export default Nav;
