import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/esm/Container";
//import {Link} from 'react-router-dom';

function Login()
{
    return(
          <div className="divlogin">
       <Container className='login'>
       
        <Form>
          
  <Form.Group className="mb-3" controlId="formBasicEmail">
   
    {/* <Form.Label>UserID  &nbsp; &nbsp;&nbsp;&nbsp;:&nbsp;</Form.Label> */}
    <Form.Label>UserID  </Form.Label>
    <Form.Control type="email" />
    
  </Form.Group>

 
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password : </Form.Label>
    <Form.Control type="password"  />
  </Form.Group>
 
  <Form.Group>
    <Form.Check type="checkbox" label="Remember me" />
  </Form.Group>
  
  <p>Don't Have Account?<a href="SignUp.js">SignUp</a> </p>
 
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</Container>
</div> 

    );
}

export default Login;