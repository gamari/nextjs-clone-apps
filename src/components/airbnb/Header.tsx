import React from "react";

import { Box, Container } from "@mui/material";

import { dFlex, flexBetweenCenter } from "../themes/commonThemes";
import LocationSearch from "./LocationSearch";
import Logo from "./Logo";
import ProfileSettings from "./ProfileSettings";

const Header = () => {
  return (
    <Box
      sx={{
        ...dFlex,
        minHeight: 70,
        borderBottom: "1px solid #ddd",
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            ...flexBetweenCenter,
            minHeight: 70,
            px: 4,
          }}
        >
          <Logo />
          <LocationSearch />
          <ProfileSettings />
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
