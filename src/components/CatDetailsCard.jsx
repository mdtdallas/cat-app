import React, { useState, useEffect } from "react";
import { Card, Row, Col, Spinner } from "react-bootstrap";

const CatDetailsCard = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch("http://localhost:8080/api/cats")
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
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <div>
      {loading && <Spinner/>}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      {data && data.map(({catID, name, breed, age}) => {
        <Card className="shadow m-3 p-2" key={catID}>
      <Row>
        <Col>
          <Card.Text className="fs-2">Name:</Card.Text>
        </Col>
        <Col>
        <Card.Text className="fs-2">{name}</Card.Text>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card.Text className="fs-2">Breed:</Card.Text>
        </Col>
        <Col>
          <Card.Text className="fs-2">{breed}</Card.Text>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card.Text className="fs-2">Age:</Card.Text>
        </Col>
        <Col>
          <Card.Text className="fs-2">{age}</Card.Text>
        </Col>
      </Row>
      <Row>
        <Col>
          <i className="fa-solid fa-pen-to-square btn"></i>
        </Col>
        <Col>
          <i className="fa-solid fa-trash-can btn"></i>
        </Col>
      </Row>
    </Card>
      })}
      
    </div>
  );
};

export default CatDetailsCard;
