import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import BreadcrumbComponents from './BreadcrumbComponents'
import { data_dokter_1 } from '../util/api'
import { data_dokter_2 } from '../util/api'
import './TanyaDokter.css'
import { useHistory } from 'react-router-dom'

function TanyaDokter() {
  const [data1, setData1] = useState()
  const [data2, setData2] = useState()
  const history = useHistory()

  const getData = (doctor) => {
    const newData = doctor.map((data) => {
      return (
        <Col sm={12} md="auto" lg={3} className="card-barang" key={data.id}>
          <Card style={{ width: '18rem' }}>
            <Card.Img
              variant="top"
              src={data.img}
              className="data-img"
              alt={data.name}
            />
            <Card.Body>
              <h5 className="card-title text-center">{data.name}</h5>
              <h6 className="card-title text-center">{data.type}</h6>
              <p>
                <i className="material-icons star">star_rate</i>
                {`${data.rate} (${data.total})`}
              </p>
              <p className="tas">
                <i className="material-icons">work</i> {`${data.exp} Tahun`}
              </p>
            </Card.Body>
            <Button
              onClick={() =>
                history.push(`/tanya-dokter/${data.id}/chat-dokter`)
              }
              className="btn-buy mx-auto"
            >
              Chat
            </Button>
          </Card>
        </Col>
      )
    })
    return newData
  }

  useEffect(() => {
    setData1(getData(data_dokter_1))
    setData2(getData(data_dokter_2))
  }, [])

  return (
    <>
      <BreadcrumbComponents active="Tanya Dokter" />
      <Container className="tanya-dokter">
        <Row>
          <Col lg={3} sm={12} md="auto">
            <p id="title">Dokter Umum</p>
            <p className="desc">
              Penanganan umum tentang keluhan kesehatan sehari hari
            </p>
          </Col>
          {data1}
        </Row>

        <Row>
          <Col lg={3} sm={12} md="auto">
            <p className="title">Dokter Penanganan COVID-19</p>
            <p className="desc">
              Membantu anda mencegah & menangani virus corona
            </p>
          </Col>
          {data2}
        </Row>
      </Container>
    </>
  )
}

export default TanyaDokter
