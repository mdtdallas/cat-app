import React from "react";
import { Form, FormLabel, Row, Col, Button } from "react-bootstrap";

const NewAward = () => {
  return (
    <Form>
      <Row className="my-5 mx-2">
        <Col>
          <FormLabel>Cat Show</FormLabel>
        </Col>
        <Col className="col-7">
          <Form.Control></Form.Control>
        </Col>
      </Row>
      <Row className="my-5 mx-2">
        <Col>
          <FormLabel>Year</FormLabel>
        </Col>
        <Col className="col-7">
          <Form.Control></Form.Control>
        </Col>
      </Row>
      <Row className="my-5 mx-4"> 
          <Col>
            <Button variant="primary">Add Award</Button>
          </Col>
          <Col>
            <Button variant="outline-danger">Cancel</Button>
          </Col>
      </Row>
    </Form>
  );
};

export default NewAward;
