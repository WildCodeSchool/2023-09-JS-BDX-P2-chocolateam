import axios from "axios";
import { useState } from "react";
import Cards from "./components/Cards";
import "./style/App.scss";

function App() {
  const [playlists, setPlaylists] = useState([]);
  const getPlaylist = async () => {
    const token =
      "BQCVAf7-rWDL5mNL50pB_ofCJqymAPYdSiL2Fh5YvHr4yOvpyocKvKKuhqIqlXcpg3mWft4hcQ6NvLe5Fjb52FniPwhSqhvGTQ_v-ymLnBLr6158ZEg";

    const reponse = await axios.get(
      "https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFKLfwjuJMoNC/playlists",
      { headers: { Authorization: `Bearer ${token}` } }
    );

    setPlaylists(reponse.data.playlists.items);
  };

  return (
    <div className="container">
      <div className="btn-container">
        <button className="btn-generation" type="button" onClick={getPlaylist}>
          Générer des playlists !
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
