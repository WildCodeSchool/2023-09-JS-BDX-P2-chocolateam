import axios from "axios";
import { useEffect, useState } from "react";

const useToken = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const getToken = async () => {
      try {
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

        const accessToken = returnToken.data.access_token;
        setToken(accessToken);
      } catch (error) {
        console.error("Error fetching token:", error);
      }
    };

    getToken();
  }, []);

  return token;
};

export default useToken;
