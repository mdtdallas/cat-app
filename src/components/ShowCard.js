import React from 'react'
import { Card, Row, Col, Container, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import FCCQ from '../img/FCCQ.jpg'

const ShowCard = () => {
  return (
    <Container>
        <Card as={Link} to={'/show/:id'} className='rounded-50 shadow'>
            <Row>
                <div className='text-center display-5'>Brisbane Cat Show</div>
            </Row>
            <Row>
                <Col>
                <img src={FCCQ} alt="" className="img-thumbnail m-4"/>
                </Col>
                <Col>
                    <Row>
                        <div className='fs-4 pt-2'>27th March 2022</div>
                    </Row>
                    <Row>
                        <div className='fs-4 pt-2'>Brisbane Hall</div>
                    </Row>
                    <Button className='fs-4 mt-2'>Enter Show</Button>
                </Col>
            </Row>
        </Card>
    </Container>
  )
}

export default ShowCard