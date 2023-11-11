import { useNavigate } from "react-router-dom";

function Redirection() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <button type="button" onClick={handleGoBack}>
        retour
      </button>
    </div>
  );
}

export default Redirection;
