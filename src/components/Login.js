import React from 'react'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import { auth, googleProvider as provider } from '../util/firebase'
import { actionTypes } from '../util/reducer'
import { useStateValue } from './StateProvider'
import logo from '../assets/img/favicon.ico'

function Login() {
  const [state, dispatch] = useStateValue()
  const signIn = () => {
    // Proses Login...
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        })
      })
      .catch((error) => alert(error.message))
  }

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col className="col-auto">
          <Image
            src={logo}
            className="mx-auto d-block"
            alt="covidcare"
            style={{ width: '80%' }}
          />
          <br />
          <h1
            className="text-center"
            style={{ color: '#4F4C5F', fontSize: '64px' }}
          >
            COVIDCARE
          </h1>
          <Button
            onClick={signIn}
            className="mt-5 py-2 btn-primary btn-block "
            style={{ width: '100%' }}
          >
            Masuk
          </Button>

          <Button
            className="mt-3 py-2 btn-outline-primary btn-block "
            style={{ width: '100%' }}
            href="https://accounts.google.com/signup"
            target="_blank"
          >
            Daftar Gmail
          </Button>
        </Col>
      </Row>
    </Container>
  )
}

export default Login
