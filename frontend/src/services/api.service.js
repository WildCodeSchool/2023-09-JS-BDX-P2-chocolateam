import axios from "axios";
import { getToken } from "../spotify";

const apiGet = async (url) => {
  const token = await getToken();
  const response = await axios.get(
    url,

    { headers: { Authorization: `Bearer ${token}` } }
  );

  return response.data;
};

export default apiGet;
