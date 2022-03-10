import React, { useEffect, useState } from 'react'
import { Image, Media, Row } from 'react-bootstrap'
import Answers from './Answers'
import InputAnswer from './InputAnswer'
import firebase from 'firebase'
import { useStateValue } from './StateProvider'

function Post({ name, avatar, id, date, topic, question, object }) {
  const [test, setTest] = useState([])
  const [{ user }, dispatch] = useStateValue()

  useEffect(() => {
    const database = firebase
      .database()
      .ref('Pertanyaan')
      .child(id)
      .child('jawaban')
    database.on('value', (snapshot) => {
      const items = snapshot.val()
      const item = []
      for (const id in items) {
        item.push({ id, ...items[id] })
      }
      setTest(item)
    })
  }, [])

  return (
    <Row className="mt-5 border  rounded-lg">
      <div className="posting p-4">
        <Media className="mb-1">
          <Image
            src={avatar}
            className="avatar-user mr-3 rounded-circle"
            alt={topic}
          />
          <Media.Body id={id}>
            <h5 className="mt-2 mb-n1">{name}</h5>
            <p>
              <small>{date}</small>
            </p>
            <hr className="mt-n2" />
            <h6>
              <strong>{topic}</strong>
            </h6>
            <p>{question}</p>
          </Media.Body>
        </Media>
        {object.jawaban &&
          test.map((item) => {
            return (
              <Answers
                key={item.id}
                date={item.date}
                answer={item.jawabanUser}
                name={item.name}
                avatar={item.avatar}
              />
            )
          })}
        <InputAnswer data={id} />
      </div>
    </Row>
  )
}

export default Post
