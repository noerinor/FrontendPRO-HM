import axios from "axios";

export const fetchDestinations = () => {
  return axios
    .get("http://localhost:3001/destinations")
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error fetching destinations:", error);
      return [];
    });
};
