import React from "react";
import { Card, Row, Col } from "react-bootstrap";

const CatDetailsCard = () => {
  return (
    <Card className="shadow m-3 p-2">
      <Row>
        <Col>
          <Card.Text className="fs-2">Name:</Card.Text>
        </Col>
        <Col>
        <Card.Text className="fs-2">Kitty</Card.Text>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card.Text className="fs-2">Breed:</Card.Text>
        </Col>
        <Col>
          <Card.Text className="fs-2">Tabby</Card.Text>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card.Text className="fs-2">Age:</Card.Text>
        </Col>
        <Col>
          <Card.Text className="fs-2">6</Card.Text>
        </Col>
      </Row>
      <Row>
        <Col>
          <i class="fa-solid fa-pen-to-square btn"></i>
        </Col>
        <Col>
          <i class="fa-solid fa-trash-can btn"></i>
        </Col>
      </Row>
    </Card>
  );
};

export default CatDetailsCard;
