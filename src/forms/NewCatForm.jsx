import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from 'yup';

const NewCatForm = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  let validationParams = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    breed: Yup.string().required('Breed is required').min(2, 'Must be more than 2 characters'),
    age: Yup.number().required('Age is required'),
    photo: Yup.string().required('Photo is required').min(2, 'Must be more than 2 characters'),
    breeder: Yup.string().required('Breeder is required').min(2, 'Must be more than 2 characters'),
  })
  let formik = useFormik({
    initialValues: {
      name: '',
      breed: '',
      age: '',
      photo: '',
      breeder: ''
    },
    validationSchema: validationParams,
    onSubmit: values => {
      console.log(values);
      fetch('http://localhost:8080/api/catCreate/create', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(values)
      })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`This is an HTTP error ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        console.log(data);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setData(null);
      })
      .finally(() => {
        setLoading(false);
      })
    }
  })
  return (
    <div>
      <Container>
      <Form id="createCatForm" onSubmit={formik.handleSubmit}>
        <Col>
          <Row>
            <Col>
              <Form.Label className='p-2'>Name:</Form.Label>
            </Col>
            <Col>
              <Form.Control name="name" onChange={formik.handleChange} value={formik.values.name} onBlur={formik.handleBlur}/>
              {formik.errors.name && formik.touched.name ? (<p>{formik.errors.name}</p>) : null}
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Label className='p-2'>Breed:</Form.Label>
            </Col>
            <Col>
              <Form.Control name="breed" onChange={formik.handleChange} value={formik.values.breed} onBlur={formik.handleBlur}/>
              {formik.errors.breed && formik.touched.breed ? (<p>{formik.errors.breed}</p>) : null}
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Label className='p-2'>Age:</Form.Label>
            </Col>
            <Col>
              <Form.Control name="age" onChange={formik.handleChange} value={formik.values.age} onBlur={formik.handleBlur}/>
              {formik.errors.age && formik.touched.age ? (<p>{formik.errors.age}</p>) : null}
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Label className='p-2'>Photo:</Form.Label>
            </Col>
            <Col>
              <Form.Control name="photo" onChange={formik.handleChange} value={formik.values.photo} onBlur={formik.handleBlur}/>
              {formik.errors.photo && formik.touched.photo ? (<p>{formik.errors.photo}</p>) : null}
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Label className='p-2'>Breeder:</Form.Label>
            </Col>
            <Col>
              <Form.Control name="breeder" onChange={formik.handleChange} value={formik.values.breeder} onBlur={formik.handleBlur}/>
              {formik.errors.breeder && formik.touched.breeder ? (<p>{formik.errors.breeder}</p>) : null}
            </Col>
          </Row>
          <Row>
            <Col>
              <Button className='ms-3' type="submit">Add Cat</Button>
            </Col>
            <Col>
              <Button variant='danger'>Cancel</Button>
            </Col>
          </Row>
        </Col>
      </Form>
      </Container>
    </div>
  )
}

export default NewCatForm