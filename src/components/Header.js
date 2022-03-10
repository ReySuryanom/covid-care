import React from 'react'
import { Button, Col, Container, Jumbotron, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import doctor from '../assets/img/doctor-1.webp'
import './Header.css'

function Header() {
  return (
    <React.Fragment>
      <Jumbotron style={{ backgroundColor: 'white' }}>
        <Container className="header">
          <Row className="justify-content-md-center">
            <Col sm={12} md={5} lg={5}>
              <div className="header__left">
                <h1>TANGGAP MENGHADAPI VIRUS CORONA</h1>
                <p className="mt-3 mb-4">
                  Punya keluhan tentang kesehatan anda? tanyakan langsung ke
                  ahlinya
                </p>
                <Link to="/tanya-dokter">
                  <Button type="button" className="btn-primary">
                    Tanya Dokter
                  </Button>
                </Link>
              </div>
            </Col>
            <Col sm={12} md={6} lg={6}>
              <img src={doctor} alt="logo-dokter" />
            </Col>
            <Col sm={0} md={1} lg={1} />
          </Row>
        </Container>
      </Jumbotron>
    </React.Fragment>
  )
}

export default Header
