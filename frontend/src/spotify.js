import axios from "axios";

const CLIENT_ID = "6d42d06f69664a2d825342dbc4d9844d";
const CLIENT_SECRET = "4bf11d8f4d584e74a8369004c4881668";

const getToken = async () => {
  const data = {
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    grant_type: "client_credentials",
  };

  const returnToken = await axios.post(
    "https://accounts.spotify.com/api/token",
    data,
    {
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    }
  );

  const token = returnToken.data.access_token;

  return token;
};
export { getToken };
