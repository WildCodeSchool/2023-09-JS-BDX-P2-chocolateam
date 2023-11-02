import axios from "axios";

const getToken = async () => {
  const keys = await axios.get("http://localhost:3310/keys");

  const data = {
    client_id: keys.data.clientId,
    client_secret: keys.data.clientSecret,
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
export default getToken;
