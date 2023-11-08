import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardPlaylist from "../components/CardPlaylist";
import apiGet from "../services/api.service";

function TemplatePlaylist() {
  const [playlists, setPlaylists] = useState([]);
  const { nomDuGenre } = useParams();

  const getPlaylist = async () => {
    const response = await apiGet(
      `https://api.spotify.com/v1/search?q=${nomDuGenre}&type=playlist`
    );

    setPlaylists(response.playlists.items);
  };

  useEffect(() => {
    getPlaylist();
  }, []);

  return (
    <ul className="horizontal-list">
      {playlists.map((element) => {
        return (
          <CardPlaylist
            playlistName={element.name}
            imgCover={element.images[0].url}
            key={element.id}
            idPlaylist={element.id}
          />
        );
      })}
    </ul>

    // <h2> Affichages de toutes les playlists Chill</h2>
    // <CardPlaylist
    //   {element.name}
    //   {element.images[0].url}
    //   {element.description}
    //   key={element.id}
    //   idPlaylist={element.id}
    // />
  );
}

export default TemplatePlaylist;
