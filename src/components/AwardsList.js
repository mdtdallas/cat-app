import React from 'react'
import { Row, Col } from 'react-bootstrap'

const AwardsList = () => {
  return (
    <div>
      <Row>
          <Col className="col-10">
          <div className="display-4 text-center ms-5">Awards</div>
          </Col>
          <Col><a href="/addaward" class="col-2"><i class="fa-solid fa-plus add"></i></a></Col>
      </Row>
    </div>
  )
}

export default AwardsList