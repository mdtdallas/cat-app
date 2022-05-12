import { useEffect, useState } from "react";
import { Col, Row, Container, Card, Button, Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Shows() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    
    fetch("http://localhost:8080/api/shows")
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
      <ul>
        {data &&
          data.map(({ showID, title, location, image_path, date }) => (
            <>
              <Container key={showID}>
                <Card as={Link} to={"/show/:id"} className="rounded-50 shadow">
                  <Row>
                    <div className="text-center display-5">
                      {title}
                    </div>
                  </Row>
                  <Row>
                    <Col>
                      <img src={image_path} alt="" className="img-thumbnail m-4" />
                    </Col>
                    <Col>
                      <Row>
                        <div className="fs-4 pt-2">{date}</div>
                      </Row>
                      <Row>
                        <div className="fs-4 pt-2">{location}</div>
                      </Row>
                      <Button as={Link} to={'/show/:id'} className="fs-4 mt-2">Enter Show</Button>
                    </Col>
                  </Row>
                </Card>
              </Container>
            </>
          ))}
      </ul>
    </div>
  );
}

export default Shows;
