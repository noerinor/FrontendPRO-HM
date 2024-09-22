import axios from "axios";

export const fetchHotels = async (searchParams) => {
  const response = await axios.get("http://localhost:3001/hotels", {
    params: {
      destinationId: searchParams.destination,
    },
  });

  return response.data;
};
