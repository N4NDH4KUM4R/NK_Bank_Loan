import React, { useEffect } from "react";
import { Typography, useTheme } from "@mui/material";
import { Container, Row, Col } from "react-bootstrap";
import experts from "../images/Experts.gif";
import "./Expereince.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Experience = () => {
  const theme = useTheme();

  // Initialize AOS (Animate On Scroll)
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <Container>
      <Row className="align-items-center">
        {/* Column for the image */}
        <Col xs={12} md={6} data-aos="zoom-in-right">
          <img
            src={experts}
            alt="Logo"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "76% 24% 73% 27% / 27% 71% 29% 73%",
            }}
          />
        </Col>
        {/* Column for the text */}
        <Col xs={12} md={6} data-aos="zoom-in-left">
          <div className="bubbles-container">
            {/* Bubble for text */}
            <div className="bubble3 bubble-left"></div>
          </div>
          <Typography
            id="exp"
            variant="h5"
            style={{ color: theme.palette.text.primary }}
          >
            {/* Main text */}
            We Have 10 Years of Experience in Bank Loans
            <br />
            {/* Blockquote */}
            <blockquote className="blockquote py-4">
              <strong>
                First abundantly night you are sea great fifth year
              </strong>
            </blockquote>
            {/* Additional text */}
            <p>
              Lights fly above, bearing brought abundantly whose. Without one
              may I seed void wells great face god, were deep, be first. Unto
              for third be in moveth. Bring land bearing abundantly firmament
              appear whales them years. Lights fly above, bearing brought bold
              abundantly whose without one may I seed.
            </p>
            {/* Bubble for additional text */}
            <div className="bubble5 bubble-left"></div>
          </Typography>
        </Col>
      </Row>
    </Container>
  );
};

export default Experience;
