import React from "react";
import picture from "../img/dallas.png";
import { Card, Row, Col, Container } from "react-bootstrap";
import CatList from "../components/CatList";

const Home = () => {
  
  return (
    <div>
      <h1 className="display-1 text-center">Profile</h1>
      <img
        src={picture}
        className="m-3 mx-auto d-block img-thumbnail shadow rounded-circle"
        alt="avatar"
        width="500em"
      ></img>
      <i className="fa-solid fa-pen-to-square btn"></i>
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
      <Container>
      <Row>
        <Col>
          <h1 className="display-2 text-center ms-5">My Cats</h1>
        </Col>
        <Col className="col-2">
          <a href="/newcat" className="btn">
            <i className="fa-solid fa-plus add fs-2 mt-4">&nbsp;Add&nbsp;Cat</i>
          </a>
        </Col>
      </Row>
      </Container>
      <CatList />
    </div>
  );
};

export default Home;
