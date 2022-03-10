import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import avatar1 from '../assets/img/avatar1.svg'
import avatar2 from '../assets/img/avatar2.svg'
import positif from '../assets/img/positif.webp'
import meninggal from '../assets/img/meninggal.webp'
import sembuh from '../assets/img/sembuh.webp'
import ImageCard from './ImageCard'
import './Testimonial.css'

function Testimonial() {
  return (
    <Container className="testimonial m-auto">
      <h1 className="font-weight-bold text-center mt-5 mb-5">
        Tanya keluhanmu dan diskusikan
      </h1>
      <Row className="justify-content-md-center mb-5">
        <Col md={12} lg={4}>
          <ImageCard
            image={avatar1}
            title="Rizaldi Aphian"
            text="Hallo, saya mau tanya biar nyaman dirumah itu harus ngapain aja yah, karena kan selama ini dikarantina."
          />
        </Col>
        <Col md={12} lg={4}>
          <ImageCard
            image={avatar2}
            title="Alfin"
            text="Kadang kadang saya merasa ga enak badan dan disertai batuk, kira kira hal apa yang mesti saya lakukan?"
          />
        </Col>
        <Col md={12} lg={4}>
          <ImageCard
            image={avatar1}
            title="Muhammad Sulthan"
            text="Tips agar dari korona dong walaupun masih sering keluyuran luar rumah."
          />
        </Col>
      </Row>
    </Container>
  )
}

export default Testimonial
