import { Container, Grid, Typography, Button } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import Title from "../components/Title";
import { section3Content } from "../utils/content";
import Carousel from "../components/Carousel/Carousel";

const { title } = section3Content;

const Section3 = () => {
  return (
    <Container sx={{ mt: { xs: 10, md: 20 } }}>
      <Container maxWidth="md">
        <Title variant={{ xs: "h3", md: "h2" }} sx={{ textAlign: "center" }}>
          {title}
      
        </Title>
      </Container>
      <Grid sx={{ mt:5 }} justifyContent="center">
        <Carousel/>
      </Grid>
    </Container>
  );
};

export default Section3;
