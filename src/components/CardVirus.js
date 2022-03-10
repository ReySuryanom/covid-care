import React from 'react'
import { Card } from 'react-bootstrap'

function CardVirus({ image, text }) {
  return (
    <Card
      style={{
        width: '18rem',
        border: 'none',
        boxShadow: '1px 1px 10px 1px rgba(0,0,0,0.15)',
      }}
    >
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Text
          className="font-weight-bold text-center"
          style={{ fontSize: '20px' }}
        >
          {text}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default CardVirus
