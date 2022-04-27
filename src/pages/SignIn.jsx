import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from '../img/logo.jpeg'

const SignIn = () => {
  return (
    <Container>
        <img src={logo} height='300em' className='my-5 mx-auto d-block'/>
        <h2 className="display-3 text-center">Sign In</h2>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Row>
          <Col>
          <Button variant="primary" type="submit">
        Submit
      </Button>
          </Col>
          <Col>
          <Button as={Link} variant="secondary" to={'/signup'}>
        Sign Up
      </Button>
          </Col>
      </Row>
    </Form>
    </Container>
  );
};

export default SignIn;
