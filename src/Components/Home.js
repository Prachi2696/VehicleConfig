import React from "react";
import Container from "react-bootstrap/esm/Container";
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'


export const home = () => {

  return (
    <>
      <Container fluid className="home">
      <marquee width="100%" direction="right" height="30px" ><b>
      Welcome to V-Configurator!!!</b></marquee>
        <Carousel>
          <Carousel.Item interval={800}>
            <img
              className="d-block w-100"
              src="1.jpg"
              alt="First slide"

            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p bg-color="dark">V- Conf is India's leading car search venture that helps users to buy car of their choice and within their budget.</p>
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
              <p>V-Conf has launched many innotive features to ensure to ensure that users get an immersive experience of the car model before visiting a dealer's showroom.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="6.jpg"
              alt="Third slide"

            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>This website and app carry rich automotive content such as expert reviews,detailed specs and prices, comarisons as well as videos and picture of all car brands and models available in India.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>



        <div className="cards">

          <CardGroup>
            <Card>
              <Card.Img variant="top" src="C2.jpg" height="400px" width="200px" />
              <Card.Body>
                <Card.Title><b>HONDA CITY</b></Card.Title>
                <Card.Text>
                  All Rounder It is a beast.A good looking,Comfortable and good performance car.
                </Card.Text>
              </Card.Body>

            </Card>
            <Card>
              <Card.Img variant="top" src="C1.jpg" height="400px" width="200px" />
              <Card.Body>
                <Card.Title ><b>BMW X</b></Card.Title>
                <Card.Text>
                  My First Car,Best in the class.An entry-level hatchback.No other competitor
                  of this level matches its performance.Very affodable car.
                </Card.Text>
              </Card.Body>

            </Card>
            <Card>
              <Card.Img variant="top" src="C3.jpg" height="400px" width="200px" />
              <Card.Body>
                <Card.Title ><b>MINI COOPER</b></Card.Title>
                <Card.Text>
                  Super performance, high-performance diesel engine, good looking, good music system and a comfortable seats with the height adjustable driver seat.
                </Card.Text>
              </Card.Body>
            </Card>
          </CardGroup>
        </div>
      </Container>
    </>
  );
}
export default home;