import React from 'react'
import { Col, Image, Media, Row } from 'react-bootstrap'

function Answers({ name, avatar, date, answer }) {
  return (
    <Row className="rounded-lg ml-5 mt-2">
      <Col>
        <Media>
          <Image src={avatar} className="avatar-answer mr-3 rounded-circle" />
          <Media.Body>
            <h5 className="mb-n1">{name}</h5>
            <p>
              <small>{date}</small>
            </p>
            <p className="mt-n2">{answer}</p>
          </Media.Body>
        </Media>
      </Col>
    </Row>
  )
}

export default Answers
