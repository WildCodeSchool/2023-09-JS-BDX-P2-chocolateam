// const [tracks, setTracks] = useState([]);

// const getTrackList = async () => {
//   const token = await getToken();
//   const reponseTrack = await axios.get(
//     `https://api.spotify.com/v1/playlists/${idPlaylist}/tracks`,
//     { headers: { Authorization: `Bearer ${token}` } }
//   );
//   setTracks(reponseTrack.data.items);
// }

// {tracks.map((track) => {
//     return (
//       <CardTrack
//         nameTrack={track.track.name}
//         imgCoverTrack={track.track.album.images[0].url}
//       />
//     );
//   })}
