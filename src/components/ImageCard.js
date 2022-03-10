import React from 'react'
import { Card } from 'react-bootstrap'
import './ImageCard.css'
import './Testimonial.css'

function ImageCard({ witdh, title, total, color, image, text, bgColor }) {
  witdh = witdh ? witdh : '20rem'
  return (
    <Card
      bg={color}
      style={{ width: { witdh }, borderRadius: '2rem' }}
      className={`mb-5 ${color ? 'viruses__card' : 'testimonial__cards'}`}
    >
      <Card.Body>
        <Card.Text>
          <img className="img float-left mr-3 mt-4" src={image} alt={title} />
          <h3 className="title font=weight-light mb-n1 text-size">{title}</h3>
          {total && <h1 className="font-weight-bold mb-n1">{total}</h1>}
          <h3 className="text font=weight-light mb-n1 text-size">
            {text || 'Orang'}
          </h3>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default ImageCard
