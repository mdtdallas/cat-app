import React from 'react'
import { Form, Container, Button, Nav, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from '../img/logo.jpeg'


const SignUp = () => {
  return (
    <Container>
        <img src={logo} height='300em' className='my-5 mx-auto d-block' alt='Cat Show Logo'/>
        <h2 className="display-3 text-center my-3">Sign Up</h2>
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
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Confirm</Form.Label>
        <Form.Control type="password" placeholder="Confirm Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Row>
            <Col className='col-1 mt-2 ms-2'>
            <Form.Check type="checkbox"/>
            </Col>
            <Col>
            <Nav.Link as={Link} to={'/'}>Agree to Terms and Conditions</Nav.Link>
            </Col>
        </Row>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Container>
  )
}

export default SignUp