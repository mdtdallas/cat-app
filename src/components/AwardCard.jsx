import React from "react";
import { Row, Col } from "react-bootstrap";

const AwardCard = () => {
  return (
    <div>
      <a href="/award/:id" className="rounded mx-3 mt-3 bg-light shadow card p-2 btn">
        <Row>
          <Col>
            <i className="fa-solid fa-award"></i>
          </Col>
          <Col>Cat Show</Col>
          <Col>2018</Col>
          <Col><i className="fa-solid fa-minus"></i></Col>
        </Row>
      </a>
    </div>
  );
};

export default AwardCard;
