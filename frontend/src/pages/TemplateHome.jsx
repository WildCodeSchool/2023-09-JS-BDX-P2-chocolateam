import "../style/App.scss";
import { Link } from "react-router-dom";

function TemplateHome() {
  return (
    <div className="container">
      <div className="mood-playlist">
        <Link to="/playlist/acoustic">Acoustic</Link>
        <Link to="/playlist/afrobeat">Afrobeat</Link>
        <Link to="/playlist/anime">Animé</Link>
      </div>
    </div>
  );
}

export default TemplateHome;
