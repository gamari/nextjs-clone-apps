import React from "react";

import { Box } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

import Header from "../../components/airbnb/Header";
import AppThemeProvider from "../../components/themes/AppThemeProvider";
import ProfileSettings from "../../components/airbnb/ProfileSettings";

const Index = () => {
  return (
    <AppThemeProvider>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
        }}
      >
        <Box>
          <Header />
        </Box>
      </Box>
    </AppThemeProvider>
  );
};

export default Index;
