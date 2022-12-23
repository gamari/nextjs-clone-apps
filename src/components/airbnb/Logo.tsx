import React from "react";

import { Box, Typography } from "@mui/material";
import { FaAirbnb } from "react-icons/fa";

import { flexBetween } from "../themes/commonThemes";
import { pink } from "@mui/material/colors";

const Logo = () => {
  return (
    <Box sx={flexBetween}>
      <FaAirbnb size={40} color={pink[500]} />
      <Typography
        sx={{
          ml: 1,
          color: (theme) => theme.palette.secondary.main,
          fontSize: "20px",
          fontWeight: "bold",
        }}
        component="h3"
      >
        airBnb
      </Typography>
    </Box>
  );
};

export default Logo;
