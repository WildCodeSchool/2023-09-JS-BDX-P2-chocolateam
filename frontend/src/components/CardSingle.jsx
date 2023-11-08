import PropTypes from "prop-types";
import "../style/App.scss";

function CardSingle({ singleName, imgCoverSingle, idSingle }) {
  return (
    <li className="card" key={idSingle}>
      <img className="img-fluid" src={imgCoverSingle} alt="cover" />
      <h1>{singleName}</h1>
    </li>
  );
}

CardSingle.propTypes = {
  singleName: PropTypes.string.isRequired,
  imgCoverSingle: PropTypes.string.isRequired,
  idSingle: PropTypes.string.isRequired,
};

export default CardSingle;
