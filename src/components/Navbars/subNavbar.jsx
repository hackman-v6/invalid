import {
    AppBar,
    Container,
    IconButton,
    Stack,
    Typography,
    useMediaQuery,
    useTheme,
  } from "@mui/material";
  import React, { Children } from "react";
  import { NAVBAR_HEIGHT } from "../../constants";
  import useScrollPosition from "../../hooks/useScrollPosition";
  import { navbarContent } from "../../utils/content";
  import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
  import CallMadeIcon from "@mui/icons-material/CallMade";
  import LanguageIcon from "@mui/icons-material/Language";
  import LaunchButton from "../Buttons/LaunchButton";
  import MenuIcon from "@mui/icons-material/Menu";
  import { Link } from 'react-router-dom'
  import Section6 from "../../containers/Section6";
  
  
  const { Logo } = navbarContent;
  
  const LinkButton = ({ children, ...props }) => (
    <Stack
      direction="row"
      alignItems="center"
      spacing={0.2}
      sx={{
        cursor: "pointer",
        color: "text.secondary",
        "&:hover": { color: "text.primary" },
      }}
      {...props}
    >
      {children}
    </Stack>
  );
  
  const SubNavbar = () => {
    const scrollPosition = useScrollPosition();
  
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  
    return (
      <AppBar
        elevation={0}
        sx={{
          py: 1,
          height: NAVBAR_HEIGHT,
          bgcolor: scrollPosition > 10 ? "rgba(7,7,16,.7)" : "transparent",
          backdropFilter: scrollPosition > 10 && "blur(60px)",
        }}
      >
        <Container
          sx={{
            [theme.breakpoints.up("lg")]: {
              maxWidth: "1380px!important",
            },
          }}
        >
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            flexWrap="wrap"
          >
            {/* Logo */}
            {/* <img src={Logo} style={{ height: "100%", objectFit: "contain" }} /> */}
            <Typography variant="h1" sx={{ fontSize: 32}}>
            TerraDapp
          </Typography>
            {/* Links */}
            {/* {!isMobile && (
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="center"
                spacing={6}
                sx={{ flex: 1 }}
                flexWrap="wrap"
              >
                <LinkButton >
                  <Typography variant="body2">Campaigns</Typography>
                </LinkButton>
  
  
                <LinkButton>
                  <Typography variant="body2">About</Typography>
                </LinkButton>
  
                <LinkButton>
                  <Typography variant="body2">Contact us</Typography>
                </LinkButton>
              </Stack>
            )} */}
  
            {/* Action Buttons */}
            {isMobile ? (
              <IconButton>
                <MenuIcon sx={{ color: "text.secondary" }} />
              </IconButton>
            ) : (
              <Stack direction="row" spacing={5} alignItems="center">
                {/* <LinkButton spacing={1}>
                  <LanguageIcon fontSize="small" />
                  <Typography variant="body2">EN</Typography>
                </LinkButton> */}
                </Stack>
            )}
          </Stack>
        </Container>
      </AppBar>
    );
  };
  
  export default SubNavbar;
  