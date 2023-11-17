import { useNavigate } from "react-router-dom";
import boutonRetour from "../assets/bouton-retour.png";

function Redirection() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <button type="button" onClick={handleGoBack}>
      <img className="retour-button" src={boutonRetour} alt="bouton retour" />
    </button>
  );
}

export default Redirection;
