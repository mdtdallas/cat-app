import React from "react";
import { Row, Col, Button, Form } from "react-bootstrap";
import FCCQ from "../img/FCCQ.jpg";
import CatsNSW from '../img/CatsNSW.jpg'

const MapURL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3539.7686062359303!2d153.01621141560116!3d-27.476462323570043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b915a0968742765%3A0x53b5b99532970ee3!2sBrisbane%20Convention%20%26%20Exhibition%20Centre!5e0!3m2!1sen!2sau!4v1645768985924!5m2!1sen!2sau";

const ShowView = () => {
  return (
    <div>
      <div className="display-1 text-center p-4">Brisbane Cat Show</div>
      <img
        src={FCCQ}
        className="mt-4 mx-auto d-block img-thumbnail shadow"
        alt="avatar"
        width="200em"
      />
      <Row>
        <div className="display-3 text-center pt-5">27th march 2022</div>
      </Row>
      <Row>
        <div className="display-3 text-center">Brisbane Hall</div>
      </Row>
      <Row>
        <div className="display-3 text-center">FCCQ Cat Council</div>
      </Row>
      <Row>
        <Col className="mt-4">
          <iframe
            src={MapURL}
            title="MapView"
            width="90%"
            height="100%"
            className="ms-4"
          ></iframe>
        </Col>
        <Col>
          <Row className="mt-4 me-4">
            <Form.Select>
              <option>Select Cat</option>
              <option>Cat 1</option>
              <option>Cat 2</option>
              <option>Cat 3</option>
            </Form.Select>
          </Row>
          <Row className="mt-3 me-4">
            <Button>Enter Show</Button>
          </Row>
          <Row className="mt-3">
              <div className="display-6">96 Ticket Available</div>
          </Row>
        </Col>
      </Row>
      <Row><div className="p-3 ps-5 display-5">Sponsor</div></Row>
      <Row>
      <marquee behavior="scroll" direction="left" class="pt-4 mb-4">
          <img src={CatsNSW} alt="" className="pe-3"/>
          <img src={CatsNSW} alt="" className="pe-3"/>
          <img src={CatsNSW} alt="" className="pe-3"/>
          <img src={CatsNSW} alt="" className="pe-3"/>
          <img src={CatsNSW} alt="" className="pe-3"/>
          <img src={CatsNSW} alt="" className="pe-3"/>
          <img src={CatsNSW} alt="" className="pe-3"/>
          <img src={CatsNSW} alt="" className="pe-3"/>
          <img src={CatsNSW} alt="" className="pe-3"/>
          <img src={CatsNSW} alt="" className="pe-3"/>
      </marquee>
      </Row>
    </div>
  );
};

export default ShowView;
