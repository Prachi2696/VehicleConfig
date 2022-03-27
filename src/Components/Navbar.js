import React from "react";
import Navbar from "react-bootstrap/navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/Container";
import FormControl from "react-bootstrap/Formcontrol";
import Image from "react-bootstrap/Image"

import signon from './SignOn';
import registration from './Registration';
import aboutus from "./Aboutus";





export const navbar = () => {

    return (
        <>
            <Navbar bg="secondary " expand="lg">
                <Container fluid>
                    <Image src="A.png" height="50" width="50"></Image>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="/Home"><b>Home</b></Nav.Link>
                            <Nav.Link href="/Aboutus"><b>About us</b></Nav.Link>
                            <Nav.Link href="/Contactus"><b>Contact us</b></Nav.Link>
                            <Nav.Link href="/Registration"><b>Register</b></Nav.Link>
                            <Nav.Link href="/Login"><b>Sign in</b></Nav.Link>

                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-dark">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
  
</>
        
    );

}
export default navbar;