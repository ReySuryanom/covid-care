import React, { useEffect, useState } from 'react'
import './Forum.css'
import BreadcrumbComponents from './BreadcrumbComponents'
import firebase from '../util/firebase'
import {
  Button,
  Col,
  Container,
  Form,
  Image,
  Media,
  Row,
} from 'react-bootstrap'
import Post from './Post'
import { useStateValue } from './StateProvider'

function Forum() {
  const [topic, setTopic] = useState('')
  const [question, setQuestion] = useState('')
  const [questions, setQuestions] = useState([])
  const [{ user }, dispatch] = useStateValue()

  const handleOnChange = (e) => {
    e.preventDefault()
    const formType = e.target.id
    if (formType === 'topic') setTopic(e.target.value)
    if (formType === 'question') setQuestion(e.target.value)
  }

  const postQuestion = () => {
    if (topic && question) {
      const database = firebase.database().ref('Pertanyaan')
      const data = {
        name: user.displayName,
        avatar: user.photoURL,
        topic,
        question,
        date: `${new Date()
          .toISOString()
          .slice(0, 10)} | ${new Date().toTimeString().slice(0, 8)}`,
        jawaban: '',
      }
      database.push(data)

      setQuestion('')
      setTopic('')
    } else {
      window.alert('Mohon untuk mengisi formnya.')
    }
  }

  useEffect(() => {
    const database = firebase.database().ref('Pertanyaan')
    database.on('value', (snapshot) => {
      const items = snapshot.val()
      const item = []
      for (const id in items) item.push({ id, ...items[id] })
      setQuestions(item)
    })
  }, [])

  return (
    <React.Fragment>
      <BreadcrumbComponents active="Forum" />
      <Container className="mt-5 ">
        <Row>
          <Col lg={3}>
            <h2 className="mb-3">Topic</h2>
            {questions.map((item) => {
              return (
                item.topic && (
                  <Button
                    key={item.id}
                    className="btn-danger btn-lg btn-block"
                    href={`#${item.id}`}
                  >
                    {item.topic}
                  </Button>
                )
              )
            })}
          </Col>
          <Col lg={1}></Col>

          <Col className="col-8">
            <Row>
              <Col className="status p-4 shadow-sm rounded-lg">
                <Media>
                  <Image
                    src={user.photoURL}
                    className="avatar-user mr-3 rounded-circle"
                    alt="..."
                  />
                  <Media.Body>
                    <h5 className="mt-2 mb-3">{user.displayName}</h5>
                    <Form.Group>
                      <Form.Control
                        type="text"
                        id="topic"
                        placeholder="Topik yang ingin dibahas"
                        onChange={handleOnChange}
                        value={topic}
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Control
                        as="textarea"
                        id="question"
                        placeholder="Punya keluhan apa ?"
                        rows={5}
                        value={question}
                        onChange={handleOnChange}
                      />
                    </Form.Group>
                  </Media.Body>
                </Media>
                <Row>
                  <Col lg={2}></Col>
                  <Col lg={1}></Col>
                  <Col lg={5}></Col>
                  <Col lg={4}>
                    <Button className="btn btn-primary" onClick={postQuestion}>
                      Kirim Keluhan
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>

            {questions.map((question, index) => {
              return (
                question && (
                  <Post
                    key={index}
                    id={question.id}
                    name={question.name}
                    avatar={question.avatar}
                    date={question.date}
                    topic={question.topic}
                    question={question.question}
                    object={question}
                  />
                )
              )
            })}
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  )
}

export default Forum
