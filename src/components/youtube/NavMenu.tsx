import { AppBar, Box, IconButton, Toolbar } from "@mui/material";
import React from "react";
import { appBar, toolbarWrapper } from "../../styles/youtube-styles";

const NavMenu = () => {
  return (
    <AppBar component={"nav"} sx={appBar}>
      <Toolbar>
        <Box sx={toolbarWrapper}>
          <Box>
            <IconButton color="inherit" aria-label="open drawer" edge="start">
              a
            </IconButton>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavMenu;
