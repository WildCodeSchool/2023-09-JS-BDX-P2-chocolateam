import "../style/App.scss";
import { Link } from "react-router-dom";

function MoodButtons() {
  return (
    <div>
      <div className="mood-container horizontal-list-mood">
        <Link className="mood-button" to="/playlist/country">
          Camping
        </Link>
        <Link className="mood-button" to="/playlist/disney">
          Anniversaire
        </Link>
        <Link className="mood-button" to="/playlist/reggaeton">
          Pour pécho
        </Link>
        <Link className="mood-button" to="/playlist/sad">
          Dimanche soir
        </Link>
        <Link className="mood-button" to="/playlist/death-metal">
          Détente
        </Link>
      </div>
    </div>
  );
}

export default MoodButtons;
