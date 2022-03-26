import React from "react";
import Container from "react-bootstrap/esm/Container";
import Carousel from 'react-bootstrap/Carousel';


export const home = () => {

    return (
        <>
         <Container fluid>
         <Carousel>
  <Carousel.Item interval={800}>
    <img
      className="d-block w-100"
      src="1.jpg"
      alt="First slide"
      
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={800}>
    <img
      className="d-block w-100"
      src="C.jpg"
      alt="Second slide"
      
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="B.jpeg"
      alt="Third slide"
      
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</Container>
        </>
    );
}
export default home;