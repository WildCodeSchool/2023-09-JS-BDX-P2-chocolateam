import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import CardTrack from "../components/CardTrack";
import { getToken } from "../spotify";
import NavBis from "../components/NavBis";

function TemplateTracklist() {
  const [tracklists, setTracklists] = useState([]);
  const { idPlaylist } = useParams();

  const getTrackList = async () => {
    const token = await getToken();
    const reponse = await axios.get(
      `https://api.spotify.com/v1/playlists/${idPlaylist}/tracks`,

      { headers: { Authorization: `Bearer ${token}` } }
    );

    setTracklists(reponse.data.items);
  };

  useEffect(() => {
    getTrackList();
  }, []);

  return (
    <div className="resultats-tracks">
      {tracklists.map((element) => {
        return (
          <div>
            <NavBis />
            <CardTrack
              trackArtistName={element.track.artists[0].name}
              trackName={element.track.name}
              trackImgCover={element.track.album.images[0].url}
              trackPreview={element.track.preview_url}
              trackId={element.track.artists[0].id}
            />
          </div>
        );
      })}
    </div>
  );
}

export default TemplateTracklist;
