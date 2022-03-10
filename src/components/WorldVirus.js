import React, { useEffect, useState } from 'react'
import ImageCard from './ImageCard'
import { Col, Container, Row } from 'react-bootstrap'
import './WorldVirus.css'
import positif from '../assets/img/positif.webp'
import meninggal from '../assets/img/meninggal.webp'
import sembuh from '../assets/img/sembuh.webp'
import API from '../util/api'

function WorldVirus() {
  const [positifCorona, setPositifCorona] = useState(0)
  const [meninggalCorona, setMeninggalCorona] = useState(0)
  const [sembuhCorona, setSembuhCorona] = useState(0)

  useEffect(() => {
    async function getData() {
      const response = await API.get('summary')
      setMeninggalCorona(response.data.Global.TotalDeaths)
      setPositifCorona(response.data.Global.TotalConfirmed)
      setSembuhCorona(response.data.Global.TotalRecovered)
    }
    getData()
  }, [])

  return (
    <Container fluid>
      <h1
        className="font-weight-bold text-center mt-5 mb-5"
        style={{ color: '#4f4c5f' }}
      >
        Data Virus Corona di Dunia
      </h1>
      <Container>
        <Row className="justify-content-md-center">
          <Col md={12} lg={4}>
            <ImageCard
              title="Positif"
              total={positifCorona.toLocaleString()}
              color="danger"
              image={positif}
            />
          </Col>
          <Col md={12} lg={4}>
            <ImageCard
              title="Sembuh"
              total={sembuhCorona.toLocaleString()}
              color="success"
              image={sembuh}
            />
          </Col>
          <Col md={12} lg={4}>
            <ImageCard
              title="Meninggal"
              total={meninggalCorona.toLocaleString()}
              color="secondary"
              image={meninggal}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default WorldVirus
