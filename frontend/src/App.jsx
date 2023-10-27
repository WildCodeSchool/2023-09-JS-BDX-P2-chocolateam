import axios from "axios";
import { useState } from "react";
import Cards from "./components/Cards";
import "./style/App.scss";

function App() {
  const [playlists, setPlaylists] = useState([]);

  // Fonction pour effectuer la première requête
  const getFirstPlaylist = async () => {
    const token =
      "BQC8WIDZFiK04LhL88V_cxRb3-cCRtjq3cXBbBymyGxLMcdH3Hw6coc92H4pRP0xIJFJqs-aS2i_rwgOn3TIHZLE2AwLge-lAlCRMiJ26KAD99lJpZA"; // Remplacez par votre token Spotify

    const response = await axios.get(
      "https://api.spotify.com/v1/search?q=chill&type=playlist",
      { headers: { Authorization: `Bearer ${token}` } }
    );

    setPlaylists(response.data.playlists.items);
  };

  // Fonction pour effectuer la deuxième requête
  const getSecondPlaylist = async () => {
    const token =
      "BQC8WIDZFiK04LhL88V_cxRb3-cCRtjq3cXBbBymyGxLMcdH3Hw6coc92H4pRP0xIJFJqs-aS2i_rwgOn3TIHZLE2AwLge-lAlCRMiJ26KAD99lJpZA"; // Remplacez par votre token Spotify

    const response = await axios.get(
      "https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFKLfwjuJMoNC/playlists",
      { headers: { Authorization: `Bearer ${token}` } }
    );

    setPlaylists(response.data.playlists.items);
  };

  return (
    <div className="container">
      <div className="btn-container">
        <button
          className="btn-generation"
          type="button"
          onClick={getFirstPlaylist}
        >
          Obtenir la première playlist
        </button>

        <button
          className="btn-generation"
          type="button"
          onClick={getSecondPlaylist}
        >
          Obtenir la deuxième playlist
        </button>
      </div>

      <div>
        {playlists.map((element) => {
          return (
            <Cards
              playlistName={element.name}
              imgCover={element.images[0].url}
              playlistCategory={element.description}
              key={element.id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
