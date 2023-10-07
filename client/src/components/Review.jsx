import React, { useEffect } from "react";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import one from "../images/5.jpg";
import two from "../images/2.jpg";
import three from "../images/3.jpg";
import four from "../images/4.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const TestimonialsCarousel = () => {
  // Initialize AOS (Animate On Scroll)
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  // Array of object userData data
  const userData = [
    {
      name: "Angel",
      review: "Lorem ipsum dolor sit amet,  adipiscing elit.",
      imageAlt: "Angel",
      imageUrl: one,
    },
    {
      name: "Jane Smith",
      review: "Lorem ipsum dolor  consectetur adipiscing elit.",
      imageAlt: "Jane Smith",
      imageUrl: two,
    },
    {
      name: "Smith",
      review: "Lorem ipsum adipiscing elit.",
      imageAlt: "Smith",
      imageUrl: three,
    },
    {
      name: "Leena",
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageAlt: "Leena",
      imageUrl: four,
    },
  ];

  return (
    <Container id="review">
      <Row className="d-flex justify-content-center">
        <Col xs={12} className="text-center pb-3" data-aos="zoom-in-down">
          <div className="title">
            <h3>Customer Reviews</h3>
          </div>
        </Col>
        <Col xs={12}>
          <Carousel>
            {userData.map((testimonial, index) => (
              <Carousel.Item key={index}>
                <div
                  style={{
                    backgroundImage: `url(${testimonial.imageUrl})`,
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    height: "400px",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <Carousel.Caption className="mt-5">
                    <h3>{testimonial.name}</h3>
                    <p>{testimonial.review}</p>
                  </Carousel.Caption>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

export default TestimonialsCarousel;
