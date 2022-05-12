import React, { useState, useEffect } from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import CatList from "../components/CatList";
import { Spinner } from 'reactstrap';

function Home() {
  const email = window.localStorage.getItem('email')
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(`http://localhost:8080/api/users/${email}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`This is an HTTP error ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data)
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
  }, [email]);
  
  return (
    <div>
      {loading && <div><Spinner/></div>}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      {data && data.map(({ name, phone, email, img_path }) => (
        <Container key={email}>
        <h1 className="display-1 text-center">Profile</h1>
        <img
          src={img_path}
          className="m-3 mx-auto d-block img-thumbnail shadow rounded-circle"
          alt="avatar"
          width="500em"
        ></img>
        <i className="fa-solid fa-pen-to-square btn"></i>
        <Card className="shadow m-3 p-2" key={email}>
          <Row>
            <Col>
              <Card.Text>Name:</Card.Text>
            </Col>
            <Col>
              <Card.Text>{name}</Card.Text>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card.Text>Phone:</Card.Text>
            </Col>
            <Col>
              <Card.Text>{phone}</Card.Text>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card.Text>Email:</Card.Text>
            </Col>
            <Col>
              <Card.Text>{email}</Card.Text>
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
              <i className="fa-solid fa-plus add fs-2 mt-4"/>
            </a>
          </Col>
        </Row>
        </Container>
        </Container>
      ))}
      <CatList />
    </div>
  );
};

export default Home;

