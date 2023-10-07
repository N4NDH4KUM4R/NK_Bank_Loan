import React, { useEffect, useState } from "react";
import { Typography, useTheme } from "@mui/material";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../images/Personal finance.gif";
import "./Home.css"; //  custom CSS file for animations for bubbles
import AOS from "aos";
import "aos/dist/aos.css";
import Skeleton from "@mui/material/Skeleton";

// Font sizes based on screen sizes
const fontSize = {
  xs: "1.5rem",
  sm: "2rem",
  md: "2.5rem",
  lg: "3rem",
  xl: "4rem",
};

const Home = () => {
  const theme = useTheme();
  // State to control loading/skeleton display
  const [loading, setLoading] = useState(true);
  // Initialize AOS (Animate On Scroll)
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });

    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Container id="home">
      <Row className="align-items-center">
        <Col xs={12} md={6} data-aos="fade-right">
          <div className="bubbles-container">
            <div className="bubble bubble-left">
              {loading ? (
                <Skeleton variant="text" width={100} />
              ) : (
                <Typography
                  variant="body1"
                  style={{ color: theme.palette.text.primary }}
                ></Typography>
              )}
            </div>
            <div className="bubble2 bubble-right">
              {loading ? (
                <Skeleton variant="text" width={100} />
              ) : (
                <Typography
                  variant="body1"
                  style={{ color: theme.palette.text.primary }}
                ></Typography>
              )}
            </div>
          </div>

          <div className="typewriter">
            {loading ? (
              <Skeleton variant="text" width={200} />
            ) : (
              <Typography
                variant="h3"
                sx={{
                  color: (theme) => theme.palette.text.primary,
                  fontSize: {
                    xs: fontSize.xs,
                    sm: fontSize.sm,
                    md: fontSize.md,
                    lg: fontSize.lg,
                    xl: fontSize.xl,
                  },
                }}
              >
                We Are Nk Bank Loan
              </Typography>
            )}
          </div>
          <br />
          {loading ? (
            <Skeleton variant="text" width={300} />
          ) : (
            <blockquote className="blockquote text-secondary py-2">
              <strong>
                When All The Doors Are Closed, You Will Find Ours Open
              </strong>
            </blockquote>
          )}
        </Col>
        <Col xs={12} md={6} data-aos="fade-left">
          {loading ? (
            <Skeleton variant="rectangular" width={"100%"} height={300} />
          ) : (
            <img
              src={logo}
              alt="Logo"
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "34% 66% 31% 69% / 78% 28% 72% 22%",
              }}
            />
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
