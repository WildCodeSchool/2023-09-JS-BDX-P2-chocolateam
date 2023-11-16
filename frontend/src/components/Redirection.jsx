import { useNavigate } from "react-router-dom";

function Redirection() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <button type="button" onClick={handleGoBack}>
      <img
        className="retour-button"
        src="../src/assets/bouton-retour.png"
        alt="bouton retour"
      />
    </button>
  );
}

export default Redirection;
