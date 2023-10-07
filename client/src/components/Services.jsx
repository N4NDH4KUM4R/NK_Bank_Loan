import React, { useEffect } from "react";
import { Typography, useTheme } from "@mui/material";
import { Container, Row, Col } from "react-bootstrap";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import "./Expereince.css";
import securityImg from "../images/Safe.gif";
import approvalImg from "../images/Confirmed.gif";
import instant from "../images/Instant information.gif";
import document from "../images/Documents.gif";
import AOS from "aos";
import "aos/dist/aos.css";

// Services component
const Services = () => {
  const theme = useTheme();
  // Initialize AOS library for animations
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <Container id="why" className="py-5">
      <Row className="align-items-center flex-wrap justify-content-center">
        <Col
          xs={12}
          className="text-center"
          data-aos="fade-up"
          style={{ maxWidth: "800px" }}
        >
          <div className="title">
            <h1 style={{ color: theme.palette.text.primary }}>
              Why Choose Us?
            </h1>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-around py-2">
        {/* Card for Swift Approval */}
        <Col xs={12} md={6} lg={4} className="py-2" data-aos="zoom-in-up">
          <Card sx={{ maxWidth: 350 }}>
            <CardActionArea>
              <CardMedia component="img" image={securityImg} alt="Security" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Swift Approval
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  We believe in saving your valuable time and quick money
                  compliance by using our upgraded software. After successfully
                  checking your documents, we approve your loan within minutes
                  and in no time it gets transferred to your account!
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Col>
        {/* Card for Quick Approval */}
        <Col xs={12} md={6} lg={4} className="py-2" data-aos="zoom-in-up">
          <Card sx={{ maxWidth: 350 }}>
            <CardActionArea>
              <CardMedia component="img" image={approvalImg} alt="Approval" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Quick Approval
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  We believe in saving your valuable time and quick money
                  compliance by using our upgraded software. After successfully
                  checking your documents, we approve your loan within minutes
                  and in no time it gets transferred to your account!
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-around">
        {/* Card for Instant Funds */}
        <Col xs={12} md={6} lg={4} className="py-2" data-aos="zoom-in-up">
          <Card sx={{ maxWidth: 350 }}>
            <CardActionArea>
              <CardMedia component="img" image={instant} alt="Instant" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Instant Funds
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  We believe in saving your valuable time and quick money
                  compliance by using our upgraded software. After successfully
                  checking your documents, we approve your loan within minutes
                  and in no time it gets transferred to your account!
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Col>
        {/* Card for Easy Documentation */}
        <Col xs={12} md={6} lg={4} className="py-2" data-aos="zoom-in-up">
          <Card sx={{ maxWidth: 350 }}>
            <CardActionArea>
              <CardMedia component="img" image={document} alt="Document" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Easy Documentation
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  We believe in saving your valuable time and quick money
                  compliance by using our upgraded software. After successfully
                  checking your documents, we approve your loan within minutes
                  and in no time it gets transferred to your account!
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Services;
