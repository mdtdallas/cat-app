import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from 'yup';
function ShowForm() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  let validationParams = Yup.object().shape({
    title: Yup.string().required('Name is required'),
    location: Yup.string().required('Location is required').min(2, 'Must be more than 2 characters'),
    photo: Yup.string().required('Photo is required').min(2, 'Must be more than 2 characters'),
    judges: Yup.string().required('Judge is required').min(2, 'Must be more than 2 characters'),
    date: Yup.string().required('Date is required'),
    council: Yup.string().required('Council is required').min(2, 'Must be more than 2 characters'),
    ticket_price: Yup.number().required('Ticket price is required'),
    ticket_count: Yup.number().required('Ticket amount is required'),
  })
  let formik = useFormik({
    initialValues: {
      title: '',
      location: '',
      photo: '',
      judges: '',
      date: '',
      council: '',
      ticket_price: '',
      ticket_count: ''
    },
    validationSchema: validationParams,
    onSubmit: values => {
      console.log(values);
      fetch('http://localhost:8080/api/shows/create', {
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
              <Form.Label className='p-2'>Title:</Form.Label>
            </Col>
            <Col>
              <Form.Control name="title" onChange={formik.handleChange} value={formik.values.title} onBlur={formik.handleBlur}/>
              {formik.errors.title && formik.touched.title ? (<p>{formik.errors.title}</p>) : null}
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Label className='p-2'>Location:</Form.Label>
            </Col>
            <Col>
              <Form.Control name="location" onChange={formik.handleChange} value={formik.values.location} onBlur={formik.handleBlur}/>
              {formik.errors.location && formik.touched.location ? (<p>{formik.errors.location}</p>) : null}
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
              <Form.Label className='p-2'>Judge:</Form.Label>
            </Col>
            <Col>
              <Form.Control name="judges" onChange={formik.handleChange} value={formik.values.judges} onBlur={formik.handleBlur}/>
              {formik.errors.judges && formik.touched.judges ? (<p>{formik.errors.judges}</p>) : null}
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Label className='p-2'>Date:</Form.Label>
            </Col>
            <Col>
              <Form.Control name="date" type='date' onChange={formik.handleChange} value={formik.values.date} onBlur={formik.handleBlur}/>
              {formik.errors.date && formik.touched.date ? (<p>{formik.errors.date}</p>) : null}
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Label className='p-2'>Council:</Form.Label>
            </Col>
            <Col>
              <Form.Control name="council" onChange={formik.handleChange} value={formik.values.council} onBlur={formik.handleBlur}/>
              {formik.errors.council && formik.touched.council ? (<p>{formik.errors.council}</p>) : null}
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Label className='p-2'>Ticket Price:</Form.Label>
            </Col>
            <Col>
              <Form.Control name="ticket_price" onChange={formik.handleChange} value={formik.values.ticket_price} onBlur={formik.handleBlur}/>
              {formik.errors.ticket_price && formik.touched.ticket_price ? (<p>{formik.errors.ticket_price}</p>) : null}
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Label className='p-2'>Ticket Amount:</Form.Label>
            </Col>
            <Col>
              <Form.Control name="ticket_count" onChange={formik.handleChange} value={formik.values.ticket_count} onBlur={formik.handleBlur}/>
              {formik.errors.ticket_count && formik.touched.ticket_count ? (<p>{formik.errors.ticket_count}</p>) : null}
            </Col>
          </Row>
          <Row>
            <Col>
              <Button className='ms-3' type="submit">Add Show</Button>
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

export default ShowForm