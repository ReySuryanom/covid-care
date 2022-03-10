import React, { useState } from 'react'
import { Button, Col, Form, Image, Media, Row } from 'react-bootstrap'
import firebase from 'firebase'
import { useStateValue } from './StateProvider'

function InputAnswer({ data }) {
  const [{ user }, dispatch] = useStateValue()
  const [jawabanUser, setJawaban] = useState()

  const handleOnChange = (e) => {
    e.preventDefault()
    setJawaban(e.target.value)
  }

  const sendAnswer = () => {
    const answers = firebase
      .database()
      .ref('Pertanyaan')
      .child(data)
      .child('jawaban')

    const allData = {
      name: user.displayName,
      avatar: user.photoURL,
      jawabanUser,
      date: `${new Date()
        .toISOString()
        .slice(0, 10)} | ${new Date().toTimeString().slice(0, 8)}`,
    }
    answers.push(allData)
    setJawaban('')
  }

  return (
    <Row className="mt-2 mb-1">
      <Col lg={1}>
        <Media>
          <Image
            src={user.photoURL}
            className="avatar-user mr-3 rounded-circle"
            alt="avatar"
          />
        </Media>
      </Col>
      <Col lg={8}>
        <Form.Group>
          <Form.Control
            className="ml-3 mt-2"
            style={{ borderRadius: '20px' }}
            type="text"
            placeholder="Komentar"
            value={jawabanUser}
            onChange={handleOnChange}
          />
        </Form.Group>
      </Col>
      <Col lg={2}>
        <Button
          type="button"
          className="btn btn-primary mt-2"
          onClick={sendAnswer}
        >
          Kirim
        </Button>
      </Col>
      <Col lg={2}></Col>
    </Row>
  )
}

export default InputAnswer
