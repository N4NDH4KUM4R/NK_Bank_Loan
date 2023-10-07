import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import health from "../images/Health professional team.gif";
import wedding from "../images/Indian wedding.gif";
import creditcard from "../images/Plain credit card.gif";
import house from "../images/House searching.gif";
import { Container } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";

// Styled Card component for each card
const StyledCard = styled(Card)(({ theme }) => ({
  position: "relative",
  maxWidth: 450,
  margin: "auto",
  transition: "0.3s ease",
  // Reduce image opacity on hover
  "&:hover": {
    opacity: 0.7,
  },
  "&:hover .top-text": {
    backgroundColor: "rgba(255, 255, 255, 0.7)", // Background blur effect
    fontWeight: "bold", // Increase font weight on hover
  },
}));

// Styled Typography for top text
const TopText = styled(Typography)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(1),
  borderRadius: theme.shape.borderRadius,
  border: "2px solid transparent",
  transition: "0.3s ease",
}));

// Styled Typography for bottom text
const BottomText = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  padding: theme.spacing(2),
}));

// Data for the cards
const cardData = [
  {
    imageUrl: health,
    topText: "Health",
    bottomText:
      "Any untimely medical bill or emergency can be met with our help. You can take care of your loved ones without any financial fear!",
  },
  {
    imageUrl: wedding,
    topText: "Wedding",
    bottomText:
      "Marriage is a lifetime experience. We are determined to make it a memorable one for you by offering our best instant loan service.",
  },
  {
    imageUrl: creditcard,
    topText: "Interest Payments",
    bottomText:
      "It allows you to integrate several high-interest loans you have on your card into one consolidated loan with fixed tenure and interest rates. This way you can pay your monthly payments on time and faster!",
  },
  {
    imageUrl: house,
    topText: "House Loan",
    bottomText:
      "You can refinance your loan by combining various high-interest paying/loans into one consolidated personal loan. Showing that you can repay your loan on time, can help improve your CIBIL score!",
  },
];

export default function ImageCardGrid() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <Container id="money">
      <div className="title" data-aos="fade-down">
        <Typography variant="h4" component="h2" gutterBottom>
          No Money? No Problem!
        </Typography>
      </div>
      <h6
        style={{ textAlign: "center" }}
        className=" text-secondary py-2"
        data-aos="fade-down"
      >
        Nk Bank Loan is here to help you take away your worries about unexpected
        sudden budget surges!
      </h6>

      <Grid container spacing={2}>
        {cardData.map((data, index) => (
          <Grid item xs={12} md={6} key={index} data-aos="zoom-in-right">
            <StyledCard>
              <TopText variant="subtitle1" className="top-text">
                {data.topText}
              </TopText>
              <CardMedia
                component="img"
                height="430"
                image={data.imageUrl}
                alt="Image"
                style={{ objectFit: "cover" }}
              />
              <CardContent>
                <BottomText variant="body2" sx={{ textAlign: "justify" }}>
                  {data.bottomText}
                </BottomText>
              </CardContent>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
