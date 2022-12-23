import { Box, Container } from "@mui/material";
import React from "react";
import { dFlex, flexBetweenCenter } from "../themes/commonThemes";
import Logo from "./Logo";

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
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
