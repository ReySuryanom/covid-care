import React from 'react'
import cegah_1 from '../assets/img/cegah-1.webp'
import cegah_2 from '../assets/img/cegah-2.webp'
import cegah_3 from '../assets/img/cegah-3.webp'
import CardVirus from './CardVirus'
import { Col, Container, Row } from 'react-bootstrap'

function CegahVirus() {
  return (
    <Container className="cegahVirus m-auto mb-5" style={{ color: `#4f4c5f` }}>
      <h1 className="font-weight-bold text-center mt-5 mb-5">
        3 Langkah Pencegahan Virus Corona
      </h1>
      <Row className="justify-content-md-center">
        <Col md={12} lg={4}>
          <CardVirus
            image={cegah_1}
            text="Gunakan Masker jika beraktifitas di luar rumah"
          />
        </Col>
        <Col md={12} lg={4}>
          <CardVirus
            image={cegah_2}
            text="Rajin mencuci tangan dengan handsanitizer"
          />
        </Col>
        <Col md={12} lg={4}>
          <CardVirus image={cegah_3} text="Melakukan olah raga rutin dirumah" />
        </Col>
      </Row>
    </Container>
  )
}

export default CegahVirus
