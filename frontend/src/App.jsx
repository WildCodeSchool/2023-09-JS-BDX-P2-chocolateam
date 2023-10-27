import axios from "axios";
import { useState } from "react";
import Cards from "./components/Cards";
import "./App.css";

function App() {
  const [playlists, setPlaylists] = useState([]);
  const getPlaylist = async () => {
    const token =
      "BQDyJW32z5870eVNnsy9Bsh6OMNKPZykID8hBDPXqk8n55BAAjmP8ht9wgFJU2xeuXaJkQ4hs_vqDZfyIqCXHdg2Nke4Cs0dfjLv1bhRy02S49VxM3k";

    const reponse = await axios.get(
      "https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFKLfwjuJMoNC/playlists",
      { headers: { Authorization: `Bearer ${token}` } }
    );

    setPlaylists(reponse.data.playlists.items);
  };

  return (
    <div>
      <button type="button" onClick={getPlaylist}>
        Avoir une playlist !
      </button>

      <div>
        {playlists.map((element) => {
          return (
            <Cards
              playlistName={element.name}
              imgCover={element.images[0].url}
              key={element.id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
