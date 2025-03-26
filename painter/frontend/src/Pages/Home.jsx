import React from 'react';
import '../styles/home.css'
import pict1 from '../assets/rouleau_peinture_plafond.jpg'
import Card from 'react-bootstrap/Card';
function Home() {
  return (
    
    <div className="hero-section">
      <div className="part1">
      <div className="picture1">
      <img src={pict1} alt="Pict1"  />
      </div>
      <div className="content">
        <h1>
          Brand aid Providing Best Painting Services for a Brighter Home.
          </h1>
          <p>Elevate Your Home's Curb Appeal with Expert Exterior Painting—Durable, Beautiful, and Built to Last
          </p>
          </div>
          </div>
          <div className="part2">
  <div className="text">
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  </div>
  <div 
    className="video" 
  >
    <iframe
      src="https://www.youtube.com/embed/W4CzFda1ECs"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  </div>
</div>
<div className="part3">
  <h1>25 years of interior painting expertise</h1>
  <p>
  With over 25 years of interior painting expertise, 
  our painting crews know exactly what to do to get the
  job done quickly and to a high standard.
  </p>
</div>
   </div>
  );
}

export default Home;
