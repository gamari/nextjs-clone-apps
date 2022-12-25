import React, { useState } from "react";

import { Box, Grid } from "@mui/material";

import { locations as cardLocations } from "../../data/mockAirbnb";
import CarouselCard from "./CarouselCard";

const LocationCards = () => {
  const [cards, setCards] = useState(cardLocations);

  if (!cards.length) {
    return null;
  }

  return (
    <Box sx={{ mx: 2 }}>
      <Grid container rowSpacing={3} columnSpacing={3}>
        {cards.map((location) => (
          <Grid key={location.id} item xs={12} sm={4} md={4} lg={3}>
            <CarouselCard location={location} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default LocationCards;
