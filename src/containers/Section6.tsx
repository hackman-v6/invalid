import React from "react";
import { Typography, Grid, Container } from '@mui/material';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Campaign from "../components/Campaign";
import { useTotalPublishedProjs } from "../read";
import DashboardCampaign from "../components/DashboardCampaign";

function Campaigns() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    autoplaySpeed: 3250,
    autoplay: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const totalPublishedProjs = useTotalPublishedProjs();
  console.log("totalPublishedProjs: ", totalPublishedProjs?.toString());

  if (!totalPublishedProjs) {
    return (
      <Typography variant="h5" fontWeight="bold" mb={2}>
        No Projects yet!
      </Typography>
    );
  }

  return (
    <>
      <Typography variant="h2" align="center" fontWeight="bold" mt={10} mb={5}>
        Crowdfunding Campaigns
      </Typography>
      <Container sx={{ mt: { xs: 3, md: 3, lg: 3 } }}>
        <Slider {...settings}>
          {Array.from(Array(totalPublishedProjs).keys()).map((projectNumber, i) => (
            <Grid container spacing={1} key={i}>
              <Grid item xs={12} md={10}>
                <DashboardCampaign projectNumber={projectNumber} />
              </Grid>
            </Grid>
          ))}
        </Slider>
      </Container>
    </>
  );
}

export default Campaigns;
