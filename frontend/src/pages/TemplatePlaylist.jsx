import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import CardPlaylist from "../components/CardPlaylist";
import { getToken } from "../spotify";
import CardSingle from "../components/CardSingle";
import apiGet from "../services/api.service";

function TemplatePlaylist() {
  const [playlists, setPlaylists] = useState([]);
  const [singleList, setSingleList] = useState([]);
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

  const getSingleList = async () => {
    const token = await getToken();
    const reponseSingle = await axios.get(
      `https://api.spotify.com/v1/search?q=${nomDuGenre}&type=track&limit=15`,

      { headers: { Authorization: `Bearer ${token}` } }
    );
    setSingleList(reponseSingle.data.tracks.items);
  };

  useEffect(() => {
    getSingleList();
  }, []);
  return (
    <div>
      <div className="general-title">
        <h2>Une sélection aux petits oignons</h2>
        <button type="button">Bouton</button>
      </div>
      <div className="title-results-playlist">
        <h2>Les playlists</h2>
      </div>
      <div className="resultat-playlist">
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
      </div>
      <div className="title-results-singlelist">
        <h2 className="title-results-single">Quelques morceaux</h2>
      </div>
      <div className="resultat-singlelist">
        <ul className="horizontal-list">
          {singleList.map((element) => {
            return (
              <CardSingle
                key={element.id}
                singleName={element.name}
                imgCoverSingle={element.album.images[0].url}
                trackSinglePreview={element.preview_url}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}
export default TemplatePlaylist;
