import React, { useEffect } from "react";
import { Typography, useTheme } from "@mui/material";
import { Container, Row, Col } from "react-bootstrap";
import team from "../images/Good team.gif";
import "./Expereince.css";
import AOS from "aos";
import "aos/dist/aos.css";

// Quality component
const Quality = () => {
  const theme = useTheme();

  // AOS library for animations
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <Container>
      <Row className="align-items-center">
        <Col xs={12} md={6} data-aos="zoom-in-right">
          <img
            src={team}
            alt="Logo"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "76% 24% 73% 27% / 27% 71% 29% 73%",
            }}
          />
        </Col>
        <Col xs={12} md={6} data-aos="zoom-in-left">
          <div className="bubbles-container">
            <div className="bubble3 bubble-left">
              <Typography
                variant="body1"
                style={{ color: theme.palette.text.primary }}
              ></Typography>
            </div>
          </div>
          <Typography
            id="exp"
            variant="h5"
            style={{ color: theme.palette.text.primary }}
          >
            We Providing high-quality adviser service
            <br />
            <blockquote class="blockquote py-4">
              <strong>
                First Abundantly night you are sea great fifth year
              </strong>
            </blockquote>
            <p>
              Lights fly above bearing brought abundantly whose. Without one may
              i seed void wells great face god were deep be first. Unto for
              third be in moveth. Bring land bearing un abundantly firmament
              appear whales them years. Lights fly above bearing brought boldly
              abundantly whose without one may i seed.
            </p>
            <div className="bubble5 bubble-left">
              <Typography
                variant="body1"
                style={{ color: theme.palette.text.primary }}
              ></Typography>
            </div>
          </Typography>
        </Col>
      </Row>
    </Container>
  );
};

export default Quality;
