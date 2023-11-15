import axios from "axios";

const CLIENT_ID = "6d42d06f69664a2d825342dbc4d9844d";
const CLIENT_SECRET = "4bf11d8f4d584e74a8369004c4881668";

const getToken = async () => {
  if (localStorage.getItem("token")) {
    return localStorage.getItem("token");
  }

  const data = {
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    grant_type: "client_credentials",
  };

  try {
    const returnToken = await axios.post(
      "https://accounts.spotify.com/api/token",
      data,
      {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      }
    );

    const token = returnToken.data.access_token;
    localStorage.setItem("token", token);

    return token;
  } catch (err) {
    console.error(err);
    localStorage.removeItem("token");

    throw err;
  }
};

const requestSpotify = async (url) => {
  try {
    const token = await getToken();

    const response = await axios.get(url, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return response;
  } catch (err) {
    console.error(err);

    return requestSpotify(url);
  }
};

export default requestSpotify;
