import { Container, Grid } from "@mui/material";
import Slider from "react-slick";
import React from "react";
import ServiceCard from "../components/Cards/ServiceCard";
import Title from "../components/Title";
import { section6Content } from "../utils/content";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const { title, ITEMS } = section6Content;

const Section6 = () => {
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

  return (
    
    <Container sx={{ mt: { xs: 10, md: 20, lg: 25 } }}>
      <Title variant={{ xs: "h3", md: "h2" }} sx={{ mb: { xs: 5, md: 8 } }}>
        {title}
      </Title>
      <Slider {...settings}>
        {ITEMS.map((item) => (
          <div key={item.title}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={10}>
                <ServiceCard {...item} />
              </Grid>
            </Grid>
          </div>
        ))}
      </Slider>
    </Container>
  );
};

export default Section6;
