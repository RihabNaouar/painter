import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/home.css";
import Slideshow from "../components/Slideshow.jsx";

// OPTION 1: Si les images sont dans src/assets/
import col1 from "../assets/col1.png";
import col2 from "../assets/col2.png";
import col3 from "../assets/col3.png";


function Home() {
  return (
    <div className="home">
      {/* Section 1 */}
      <div className="part1">
        <div className="animated-text">
          <h1>Brand Aid Providing Best Painting Services for a Brighter Home.</h1>
          <p>From Interior Perfection to Exterior Excellence</p>
        </div>
      </div>

      <Container className="part2">
        <Row>
          <Col>
            <Slideshow images={[
              { src: col1 },
              { src: col2 },
              { src: col3}
            ]} />
          </Col>
          <Col>
            <h1>Why Choose Us?</h1>
            <p>
              At Brandaid Painting, we believe that the quality of your home’s exterior is a reflection of your pride and attention to detail.
              Our premium paint solutions are designed to offer the best in durability, beauty, and environmental consciousness.
              With our expert team and superior products, we ensure that your home not only looks stunning but is also protected against the elements
              for years to come. Trust us to elevate your home’s curb appeal and provide you with a finish that you’ll love for a lifetime.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
