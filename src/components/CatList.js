import React from "react";
import { Row, Col, Card, Image } from "react-bootstrap";
import CatPic from "../img/cat1.png";

function CatList() {
  return (
    <div>
      <a href="/CatProfile/:id" className="nav-link">
        <Card className="card rounded mx-3 mt-3 bg-light shadow btn">
          <Row>
            <Col>
              <Image src={CatPic} className="img-thumbnail" alt="Cat" />
            </Col>
            <Col className="col-7">
              <Row className="mx-auto my-auto">
                <Col><Card.Text>Name:</Card.Text></Col>
                <Col><Card.Text>Kitty</Card.Text></Col>
              </Row>
              <Row>
              <Col><Card.Text>Breed:</Card.Text></Col>
              <Col><Card.Text>Tabby</Card.Text></Col>
              </Row>
              <Row>
              <Col><Card.Text>Age:</Card.Text></Col>
              <Col><Card.Text>6</Card.Text></Col>
              </Row>
            </Col>
          </Row>
        </Card>
      </a>
    </div>
  );
}

export default CatList;
