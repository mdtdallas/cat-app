import React from "react";
import { Row, Col, Card, Image } from "react-bootstrap";
import CatPic from "../img/cat1.png";

function CatList() {
  return (
    <div>
      <Row>
        <Col>
          <h1 className="display-4 text-center">My Cats</h1>
        </Col>
        <Col>
          <a href="/newcat" class="btn">
            <i class="fa-solid fa-plus add"></i>
          </a>
        </Col>
      </Row>
      <Card className="card rounded mx-3 mt-3 bg-light shadow btn">
        <Row>
          <Col >
            <Image src={CatPic} className="img-thumbnail"/>
          </Col>
          <Col className='col-7'>
          <Row><Col>Name:</Col><Col>Kitty</Col></Row>
          <Row><Col>Breed:</Col><Col>Tabby</Col></Row>
          <Row><Col>Age:</Col><Col>6</Col></Row>
          </Col>
        </Row>
      </Card>
    </div>
  );
}

export default CatList;
