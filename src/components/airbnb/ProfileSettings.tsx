import React from "react";

import { Box, Button, Link, Stack } from "@mui/material";
import { BsGlobe } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";

import { flexCenter } from "../themes/commonThemes";

const ProfileSettings = () => {
  return (
    <Box sx={flexCenter}>
      <Link href="#">Become A Host</Link>

      <Stack>
        <Button>
          <BsGlobe size={24} />
        </Button>
        <Button sx={{ borderRadius: 10, border: "1px solid #ddd" }}>
          <Stack>
            <AiOutlineMenu />
            <FaRegUserCircle />
          </Stack>
        </Button>
      </Stack>
    </Box>
  );
};

export default ProfileSettings;
