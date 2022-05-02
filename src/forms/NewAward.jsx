import React from "react";
import { Form, FormLabel, Row, Col, Button } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from 'yup';

const NewAward = () => {
  let validationParams = Yup.object().shape({
    title: Yup.string().required('Award Title required'),
    year: Yup.number().required('Year is required').max(4, 'Enter year only').min(4)
  })
  let formik = useFormik({
    initialValues: {
      title: '',
      year: ''
    },
    validationSchema: validationParams,
    onSubmit: (values) => {

    }
  })
  return (
    <Form id="newAwardForm" onSubmit={formik.handleSubmit}>
      <Row className="my-5 mx-2">
        <Col>
          <FormLabel>Cat Show</FormLabel>
        </Col>
        <Col className="col-7">
          <Form.Control name="title" onChange={formik.handleChange} value={formik.values.title} onBlur={formik.handleBlur}></Form.Control>
          {formik.errors.title && formik.touched.title ? (<p>{formik.errors.title}</p>) : null}
        </Col>
      </Row>
      <Row className="my-5 mx-2">
        <Col>
          <FormLabel>Year</FormLabel>
        </Col>
        <Col className="col-7">
          <Form.Control name="year" onChange={formik.handleChange} value={formik.values.year} onBlur={formik.handleBlur}></Form.Control>
          {formik.errors.year && formik.touched.year ? (<p>{formik.errors.year}</p>) : null}
        </Col>
      </Row>
      <Row className="my-5 mx-4"> 
          <Col>
            <Button type='submit' variant="primary">Add Award</Button>
          </Col>
          <Col>
            <Button variant="outline-danger">Cancel</Button>
          </Col>
      </Row>
    </Form>
  );
};

export default NewAward;
