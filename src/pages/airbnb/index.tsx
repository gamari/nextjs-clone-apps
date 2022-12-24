import React from "react";

import { Box, Container } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

import Header from "../../components/airbnb/Header";
import AppThemeProvider from "../../components/themes/AppThemeProvider";
import OptionsTab from "../../components/airbnb/OptionsTab";
import LocationCards from "../../components/airbnb/LocationCards";

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
          <OptionsTab />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            height: 100,
            overflowY: "scroll",
          }}
        >
          <Container maxWidth="xl" sx={{ mb: 3 }}>
            <LocationCards />
            <Box
              sx={{
                display: { xs: "flex", md: "none" },
              }}
            >
              {/* <MobileFooter /> */}
            </Box>
          </Container>
        </Box>
      </Box>
    </AppThemeProvider>
  );
};

export default Index;
