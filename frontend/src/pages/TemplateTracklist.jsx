import { useLoaderData } from "react-router-dom";
import CardTrack from "../components/CardTrack";
import NavBis from "../components/NavBis";
import Redirection from "../components/Redirection";

function TemplateTracklist() {
  const { tracklists } = useLoaderData();

  return (
    <div className="resultats-tracks">
      <NavBis />
      <Redirection />
      {tracklists.map((element) => (
        <div key={element.track.id}>
          <CardTrack
            trackArtistName={element.track.artists[0].name}
            trackName={element.track.name}
            trackImgCover={element.track.album.images[0].url}
            trackPreview={element.track?.preview_url ?? ""}
            trackId={element.track.artists[0].id}
          />
        </div>
      ))}
    </div>
  );
}

export default TemplateTracklist;
