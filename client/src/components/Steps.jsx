import React, { useEffect, useState } from "react";
import { Typography, useTheme } from "@mui/material";
import { Container, Row, Col } from "react-bootstrap";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import "./Expereince.css";
import securityImg from "../images/Forms.gif";
import approvalImg from "../images/Verified.gif";
import speed from "../images/Fast loading.gif";

import AOS from "aos";
import "aos/dist/aos.css";
import Skeleton from "@mui/material/Skeleton";

// Steps component
const Steps = () => {
  const theme = useTheme();
  // State to control loading/skeleton display
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initialize AOS library for animations
    AOS.init({
      duration: 2000,
    });

    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    // Display a skeleton while loading
    <Container>
      <Row className="align-items-center flex-wrap ">
        <Col xs={12} className="p-2" data-aos="fade-down-right">
          <div id="steps" className="title">
            {loading ? (
              <Skeleton variant="text" width={400} height={50} />
            ) : (
              <h1 style={{ color: theme.palette.text.primary }}>
                3 Simple Steps To Solve All Your Money-Related Problems
              </h1>
            )}
          </div>
          <br />
          {loading ? (
            <Skeleton variant="text" width={300} height={20} />
          ) : (
            <h6 style={{ textAlign: "center" }} className="text-secondary">
              We yearn to make this process easier, faster and safer for you in
              every possible way!
            </h6>
          )}
        </Col>
      </Row>
      <Row className="align-items-center flex-wrap ">
        {loading ? (
          Array.from({ length: 3 }).map((_, index) => (
            <Col
              key={index}
              xs={12}
              md={4}
              className="py-2"
              data-aos="zoom-in-up"
            >
              <Card sx={{ maxWidth: 350 }}>
                <CardActionArea>
                  <Skeleton variant="rectangular" width={"100%"} height={200} />
                  <CardContent>
                    <Skeleton variant="text" width={"100%"} height={40} />
                    <Skeleton variant="text" width={"100%"} height={40} />
                    <Skeleton variant="text" width={"100%"} height={40} />
                  </CardContent>
                </CardActionArea>
              </Card>
            </Col>
          ))
        ) : (
          // Display actual content once loading is complete
          <>
            {/* Card for Fill Basic Details */}
            <Col xs={12} md={4} className="py-2" data-aos="zoom-in-up">
              <Card sx={{ maxWidth: 350 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image={securityImg}
                    alt="Security"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Fill Basic Details
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      We will help you to simplify your financial issues and
                      take control of your debt. To get started, simply fill in
                      your basic information in the form on our website. And let
                      the process begin!
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Col>

            {/* Card for Submit Documents for Verification */}
            <Col xs={12} md={4} className="py-2" data-aos="zoom-in-up">
              <Card sx={{ maxWidth: 350 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image={approvalImg}
                    alt="Approval"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Submit Documents for Verification
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      We will help you to simplify your financial issues and
                      take control of your debt. To get started, simply fill in
                      your basic information in the form on our website. And let
                      the process begin!
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Col>

            {/* Card for Get Instant Funds */}
            <Col xs={12} md={4} className="py-2" data-aos="zoom-in-up">
              <Card sx={{ maxWidth: 350 }}>
                <CardActionArea>
                  <CardMedia component="img" image={speed} alt="Instant" />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Get Instant Funds
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Once approved, your required amount will be transferred
                      directly to your bank account instantly.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Col>
          </>
        )}
      </Row>
    </Container>
  );
};

export default Steps;
