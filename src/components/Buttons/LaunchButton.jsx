import { Button } from "@mui/material";
import React from "react";
import SignUp from "../../pages/SignUp";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const LaunchButton = ({ sx = {}, ...props }) => {
  return (
    <>
    
    <a href="/signup">
      <Button variant="contained" sx={{ borderRadius: 4, ...sx }} {...props}>
        Join  us
        <KeyboardArrowRightIcon />
      </Button>
    </a>
    </>
  );
};

export default LaunchButton;
