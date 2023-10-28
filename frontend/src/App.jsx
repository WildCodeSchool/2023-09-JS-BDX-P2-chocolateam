import axios from "axios";
import { useState } from "react";
import Cards from "./components/Cards";
import "./style/App.scss";
import Direction from "./models/Moods";

function App() {
  const [playlists, setPlaylists] = useState([]);

  const getPlaylist = async () => {
    const token =
      "BQBULDxixWbgGC733VNdzdgjs5px4Z-0Bi_TgNwgmnpqUPwhKC06bP25HhImG8-cCxvvCeerHiRCRpEcr8PxYfhwXlddQL8O_v5rhnM0gjNNxMK__YA";

    const reponse = await axios.get(
      `https://api.spotify.com/v1/browse/categories/${Direction.Chill}/playlists`,
      { headers: { Authorization: `Bearer ${token}` } }
    );

    setPlaylists(reponse.data.playlists.items);
  };

  return (
    <div className="container">
      <div className="btn-container">
        <button className="btn-generation" type="button" onClick={getPlaylist}>
          Playlist Happy !
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
