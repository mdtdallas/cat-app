import React, { useState } from "react";
import { Form, Container, Button, Nav, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../img/logo.jpeg";
import { useFormik } from "formik";
import * as Yup from "yup";

const SignUp = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  let validationParams = Yup.object().shape({
    email: Yup.string().required("Email is required"),
    name: Yup.string().required(),
    phone: Yup.number().required(),
    password: Yup.string().required("Password is required"),
    confirm: Yup.string().required().oneOf([Yup.ref("password"), null], "Passwords must match"),
    agree: Yup.bool().oneOf([true], "Accept Ts & Cs is required"),
  });
  let formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      phone: "",
      password: "",
      confirm: "",
      agree: false,
    },
    validationSchema: validationParams,
    onSubmit: values => {
      console.log(values)
      fetch('http://localhost:8080/api/users/create', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(values)
      })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`This is an HTTP error ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setData(null);
      })
    },
  });
  return (
    <Container>
      <img
        src={logo}
        height="300em"
        className="my-5 mx-auto d-block"
        alt="Cat Show Logo"
      />
      <h2 className="display-3 text-center my-3">Sign Up</h2>
      <Form onSubmit={formik.handleSubmit} id="signUpForm">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
          />
          {formik.errors.email && formik.touched.email ? (
            <p>{formik.errors.email}</p>
          ) : null}
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="name"
            placeholder="name"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
            onBlur={formik.handleBlur}
          />
          {formik.errors.name && formik.touched.name ? (
            <p>{formik.errors.name}</p>
          ) : null}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPhone">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="phone"
            placeholder="phone"
            name="phone"
            onChange={formik.handleChange}
            value={formik.values.phone}
            onBlur={formik.handleBlur}
          />
          {formik.errors.phone && formik.touched.phone ? (
            <p>{formik.errors.phone}</p>
          ) : null}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            onBlur={formik.handleBlur}
          />
          {formik.errors.password && formik.touched.password ? (
            <p>{formik.errors.password}</p>
          ) : null}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicConfirm">
          <Form.Label>Confirm</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            name="confirm"
            onChange={formik.handleChange}
            value={formik.values.confirm}
            onBlur={formik.handleBlur}
          />
          {formik.errors.confirm && formik.touched.confirm ? (
            <p>{formik.errors.confirm}</p>
          ) : null}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Row>
            <Col className="col-1 mt-2 ms-2">
              <Form.Check type="checkbox" name="agree" onChange={formik.handleChange} value={formik.values.agree} onBlur={formik.handleBlur}/>
            </Col>
            <Col>
              <Nav.Link as={Link} to={"/"}>
                Agree to Terms and Conditions
              </Nav.Link>
              {formik.errors.agree && formik.touched.agree ? (<p>{formik.errors.agree}</p>) : null}
            </Col>
          </Row>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default SignUp;
