import React, { useEffect } from "react";
import { Grid, Typography, IconButton, Box } from "@mui/material";
import { Container, styled } from "@mui/system";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import AOS from "aos";
import "aos/dist/aos.css";

// Styled component for the footer
const Footer = styled("footer")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(6),
}));

// Styled component for hyperlinks in the footer
const Link = styled("a")(({ theme }) => ({
  color: "inherit",
  textDecoration: "none",
  backgroundColor: theme.palette.background.paper,
  // link hover effect
  "&:hover": {
    color: "yellow",
    fontWeight: 600,
    backgroundColor: theme.palette.background.paper,
  },
}));

// Styled component for IconButton
const IconButtonStyled = styled(IconButton)(({ theme }) => ({
  color: "inherit",
  "&:hover": {
    color: "yellow",
  },
}));

// Initialize AOS (Animate On Scroll)
export default function AppFooter() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <Container id="contact">
      <Footer>
        <Grid container spacing={4} justifyContent="center">
          {/* Grid item for logo */}
          <Grid item xs={12} sm={6} md={3} data-aos="zoom-in-right">
            <img
              src={require("../images/Logo.png")}
              alt="NK Bank Loan Logo"
              width="100px"
              height="100px"
            />
            {/* Social Media icons using Material ui */}
            <IconButtonStyled>
              <TwitterIcon />
            </IconButtonStyled>
            <IconButtonStyled>
              <InstagramIcon />
            </IconButtonStyled>
          </Grid>

          {/* Grid item for Services */}
          <Grid item xs={12} sm={6} md={3} data-aos="zoom-in-right">
            <Box display="flex" flexDirection="column">
              <Typography variant="h6" gutterBottom>
                Services
              </Typography>
              <ul style={{ listStyleType: "none", padding: "0" }}>
                {[
                  "Managed Website",
                  "Manage Reputation",
                  "Power Tools",
                  "Marketing Service",
                ].map((item) => (
                  <li key={item}>
                    <Link href="#">{item}</Link>
                  </li>
                ))}
              </ul>
            </Box>
          </Grid>

          {/* Grid item for Company */}
          <Grid item xs={12} sm={6} md={3} data-aos="zoom-in-left">
            <Box display="flex" flexDirection="column">
              <Typography variant="h6" gutterBottom>
                Company
              </Typography>
              <ul style={{ listStyleType: "none", padding: "0" }}>
                {[
                  "Career",
                  "Brand Assets",
                  "Investor Relations",
                  "Terms of Service",
                ].map((item) => (
                  <li key={item}>
                    <Link href="#">{item}</Link>
                  </li>
                ))}
              </ul>
            </Box>
          </Grid>

          {/* Grid item for Address */}
          <Grid item xs={12} sm={6} md={3} data-aos="zoom-in-left">
            <Typography variant="h6" gutterBottom>
              Address
            </Typography>
            <Typography>123 Main Street, Anytown, State, Country</Typography>
          </Grid>
        </Grid>

        {/* Copyright text */}
        <Typography
          variant="body2"
          color="textSecondary"
          align="center"
          style={{ marginTop: "2rem" }}
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
        >
          {"Copyright © "}
          Nk Bank Loan {new Date().getFullYear()}
        </Typography>
      </Footer>
    </Container>
  );
}
