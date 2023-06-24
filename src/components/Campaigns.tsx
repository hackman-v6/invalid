import React from "react";
import { DEBUG } from "../constantValue";
import { useTotalPublishedProjs } from "../read";
import Campaign from "./Campaign";
import { Typography, Grid } from '@mui/material';
import { Container } from "@mui/material";
import Slider from "react-slick";
import ServiceCard from "../components/Cards/ServiceCard";

function Campaigns() {
  
  var settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false, // Hides the arrows
    centerMode: true, // Centers the contents
    centerPadding: "40px",
    autoplay: true, // Enables automatic scrolling
    autoplaySpeed: 3250,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const totalPublishedProjs = useTotalPublishedProjs();
  DEBUG &&
    console.log("totalPublishedProjs: ", totalPublishedProjs?.toString());

  // if totalPublishedProjs not present return nothing
  if (!totalPublishedProjs) {
    return <Typography variant="h5" fontWeight="bold" mb={2}>
             No Projects yet!
           </Typography>
  }
  return (
    <>
        <Typography variant="h3" align="center" fontWeight="bold" mt={2} mb={2}>
          Crowdfunding Projects
        </Typography>

    <Container sx={{ mt: { xs: 10, md: 20, lg: 25 } }}>
      <Slider {...settings}>
        {Array.from(Array(totalPublishedProjs).keys()).map((projectNumber, i) => (
          <div key={i}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={10}>
              <Campaign projectNumber={projectNumber} />
              </Grid>
            </Grid>
          </div>
        ))}
      </Slider>
    </Container>
    </>
  );
}

export default Campaigns;
