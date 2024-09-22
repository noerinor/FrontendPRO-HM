import React from "react";
import { useSelector } from "react-redux";
import { Box, Typography } from "@mui/material";

const Hotels = () => {
  const { hotels, loading, error } = useSelector((state) => state.hotels);

  if (loading) {
    return <Typography variant="h6">Загрузка...</Typography>;
  }

  if (error) {
    return (
      <Typography variant="h6" color="error">
        Ошибка: {error}
      </Typography>
    );
  }

  return (
    <Box
      sx={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 5 }}
    >
      {hotels.length > 0 ? (
        hotels.map((hotel) => (
          <Box key={hotel.id} sx={{ border: "1px solid black", p: 2 }}>
            <Typography variant="h6">{hotel.name}</Typography>
            <Typography variant="body1">{hotel.city}</Typography>
            <Typography variant="body1">{hotel.address}</Typography>
            <Typography variant="body1">{hotel.phone_number}</Typography>
            <Typography variant="body1">{hotel.website}</Typography>
            <Typography variant="body1">{hotel.email}</Typography>
            {/* <Typography variant="body1">{hotel.hotel_rating}</Typography> */}
            <Typography variant="body1">
              DestinationId: {hotel.destinationId}
            </Typography>
          </Box>
        ))
      ) : (
        <Typography variant="h6" align="center">
          Нет отелей, соответствующих вашему запросу.
        </Typography>
      )}
    </Box>
  );
};

export default Hotels;
