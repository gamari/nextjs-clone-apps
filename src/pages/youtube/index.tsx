import React, { useEffect } from "react";

import { Box } from "@mui/material";
import NavMenu from "../../components/youtube/NavMenu";

const Index = () => {
  useEffect(() => {
    fetch(
      `https://content-youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=javascript&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <Box>
      <NavMenu />
    </Box>
  );
};

export default Index;
