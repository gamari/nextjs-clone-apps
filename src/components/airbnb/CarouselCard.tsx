import React, { FunctionComponent, useState } from "react";

import { Box, Button, MobileStepper, Typography } from "@mui/material";
import SwipeableViews from "react-swipeable-views";
import { AiFillStar } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

import {
  carouselDot,
  carouselImage,
  dFlex,
  fixedBottom,
  fixedIcon,
  flexBetween,
} from "../themes/commonThemes";
import { LocationType } from "./mockAirbnb";

const CarouselCard: FunctionComponent<{ location: LocationType }> = ({
  location,
}) => {
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = location.locationImages.length;

  const handleNext = () => {
    setActiveStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Box className="" sx={{ flexGrow: 1, position: "relative" }}>
      <Box sx={fixedIcon}>
        <FaRegHeart size={24} color="#fff" />
      </Box>

      {location.locationImages.length && (
        <SwipeableViews
          axis="x"
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {location.locationImages.map((step, index) => (
            <div key={step.id}>
              <Box
                component="img"
                sx={carouselImage}
                src={step?.url}
                alt={"no-image"}
              ></Box>
            </div>
          ))}
        </SwipeableViews>
      )}

      {/*  */}
      <Box sx={fixedBottom}>
        <MobileStepper
          sx={{ bgcolor: "transparent" }}
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              sx={carouselDot}
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              <MdKeyboardArrowRight />
            </Button>
          }
          backButton={
            <Button
              size="small"
              sx={carouselDot}
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              <MdKeyboardArrowLeft />
            </Button>
          }
        />
      </Box>

      {/*  */}
      <Box sx={flexBetween}>
        <Box sx={{ mt: 2 }}>
          <Typography component="h3"> {location.location}</Typography>
          <Typography component="h4"> {location.days}</Typography>
          <Typography component="h5"> {location.price}</Typography>
        </Box>
        <Box sx={{ mt: 2 }}>
          <Box sx={dFlex}>
            {location.isNew ? (
              <React.Fragment>
                <Typography component="h5">New</Typography>
                <AiFillStar size={18} />
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Typography component="h5"> {location.rating}</Typography>
                <AiFillStar size={18} />
              </React.Fragment>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CarouselCard;
