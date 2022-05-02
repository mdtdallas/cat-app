import React, { useState, useEffect }from "react";
import { Row, Col, Card, Image, Container, Spinner } from "react-bootstrap";

function CatList() {
  const email = window.localStorage.getItem('email')
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(`http://localhost:8080/api/catsEmail/${email}`)
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
      {loading && <Spinner/>}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      {data && data.map(({ catID, name, breed, age, photo_path, breeder }) => (
        <Container key={catID}>
      <a href="/CatProfile/:id" className="nav-link">
        <Card className="card rounded mx-3 mt-3 bg-light shadow btn">
          <Row>
            <Col>
              <Image src={photo_path} className="img-thumbnail" alt="Cat" />
            </Col>
            <Col className="col-7">
              <Row className="mx-auto my-auto">
                <Col>
                  <Card.Text>Name:</Card.Text>
                </Col>
                <Col>
                  <Card.Text>{name}</Card.Text>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Card.Text>Breed:</Card.Text>
                </Col>
                <Col>
                  <Card.Text>{breed}</Card.Text>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Card.Text>Age:</Card.Text>
                </Col>
                <Col>
                  <Card.Text>{age}</Card.Text>
                </Col>
              </Row>
            </Col>
          </Row>
        </Card>
      </a>
      </Container>
      ))}
      
    </div>
  );
}

export default CatList;
