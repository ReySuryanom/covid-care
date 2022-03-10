import React from 'react'
import './ObatVitamin.css'
import search from '../assets/img/search.webp'
import { Button, Card, Col, Container, Form, Image, Row } from 'react-bootstrap'
import { data_obat } from '../util/api'
import BreadcrumbComponents from './BreadcrumbComponents'
import { Link } from 'react-router-dom'

function ObatVitamin() {
  const data = data_obat.map((_obat) => {
    return (
      <Col className="card-barang" key={_obat.id}>
        <Card style={{ width: '18rem' }}>
          <Image src={_obat.img} className="card-img-top" alt="..." />
          <Card.Body>
            <Card.Title>{_obat.name}</Card.Title>
            <Card.Text>
              <b>Rp. {_obat.price.toLocaleString()}</b>
            </Card.Text>
          </Card.Body>
          <Link
            to={`/obat/informasi-produk/${_obat.name}/${_obat.id}`}
            className="mx-auto"
          >
            <Button className="btn-buy mx-auto">Beli</Button>
          </Link>
        </Card>
      </Col>
    )
  })

  return (
    <React.Fragment>
      <BreadcrumbComponents active="Obat & Vitamin" />
      <Form>
        <Container className="search-field">
          <input
            type="text"
            id="search"
            name="search"
            className="field"
            placeholder=" Antibiotik Vitamin"
          />
          <a className="btn search-icon" href="#!">
            <Image src={search} className="gmbr" alt="1" />
          </a>
        </Container>
      </Form>

      <Container className="produk">
        <Row lg={4}>{data}</Row>
        <div className="d-flex justify-content-center">
          <Button type="button" className="btn-more text-center">
            Lebih Banyak
          </Button>
        </div>
      </Container>
    </React.Fragment>
  )
}

export default ObatVitamin
