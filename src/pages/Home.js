import React from "react";
import picture from "../img/dallas.png";
import { Card, Row, Col } from "react-bootstrap";
import CatList from "../components/CatList";

const Home = () => {
  return (
    <div>
      <h1 class="display-3 text-center">Profile</h1>
      <img
        src={picture}
        class="m-3 mx-auto d-block img-thumbnail shadow rounded-circle"
        alt="avatar"
        width="300em"
      ></img>
      <i class="fa-solid fa-pen-to-square btn"></i>
      <Card className="shadow m-3 p-2">
        <Row>
          <Col>
            <Card.Text>Name:</Card.Text>
          </Col>
          <Col>
            <Card.Text>Dallas Little</Card.Text>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card.Text>Phone:</Card.Text>
          </Col>
          <Col>
            <Card.Text>0478799463</Card.Text>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card.Text>Email:</Card.Text>
          </Col>
          <Col>
            <Card.Text>dallas@mail.com</Card.Text>
          </Col>
        </Row>
      </Card>
      <CatList />
    </div>
  );
};

export default Home;
