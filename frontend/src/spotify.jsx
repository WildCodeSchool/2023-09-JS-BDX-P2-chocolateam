import axios from "axios";

require("dotenv").config();

const getToken = async () => {
  const data = {
    client_id: process.env.CLIENT_ID,
    client_secret: process.env.CLIENT_SECRET,
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
