import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import logo from '../assets/img/logo-laven-1.webp'
import './Footer.css'

function Footer() {
  return (
    <Container fluid className="footer mt-5">
      <Row className="">
        <Col sm={6} className="mx-auto align-self-center">
          <img src={logo} alt="logo-covidcare" className="ml-5" />
        </Col>
        <Col
          sm={6}
          className="text-center justify-content-center align-self-center mt-3"
        >
          <Container fluid className="footer__right">
            <p>Help center</p>
            <p>Contact support</p>
            <p>How it works</p>
          </Container>
        </Col>
      </Row>
    </Container>
  )
}

export default Footer
