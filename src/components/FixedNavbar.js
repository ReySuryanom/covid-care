import { Button, Container, Image, Nav, Navbar } from 'react-bootstrap'
import React from 'react'
import brandLogo from '../assets/img/logo-laven-1.webp'
import './FixedNavbar.css'
import { Link } from 'react-router-dom'
import { useStateValue } from './StateProvider'

function FixedNavbar() {
  const [{ user }, dispatch] = useStateValue()
  let username = user.displayName.split(' ')

  if (username.length > 2)
    username = username.filter((i, index) => index === 0 || index === 1)

  username = username.reduce((result, str) => `${result} ${str}`, '')

  return (
    <Container fluid className="mt-2">
      <Navbar className="navbar-expand-lg bg-navbar">
        <Link to="/">
          <Image src={brandLogo} alt="logo-covidcare" className="mr-2" />
        </Link>
        <Button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </Button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item  navItem">
              <Nav.Link className="nav-link" rel="no-refresh">
                <Link to="/">Beranda</Link>
              </Nav.Link>
            </li>
            <li className="nav-item navItem">
              <Nav.Link className="nav-link" rel="no-refresh">
                <Link to="/forum">Forum</Link>
              </Nav.Link>
            </li>
            <li className="nav-item navItem">
              <Nav.Link className="nav-link" rel="no-refresh">
                <Link to="/obat">Obat & Vitamin</Link>
              </Nav.Link>
            </li>
            <li className="nav-item navItem">
              <Nav.Link className="nav-link" rel="no-refresh">
                <Link to="/tanya-dokter">Tanya Dokter</Link>
              </Nav.Link>
            </li>
            <li className="nav-item navItem">
              <Nav.Link className="nav-link" rel="no-refresh">
                <Link to="/rs-rujukan">RS Rujukan</Link>
              </Nav.Link>
            </li>
          </ul>
        </div>
        <Image
          src={user.photoURL}
          className="rounded-circle"
          style={{ width: '30px' }}
          alt={user.displayName}
        />
        <div className="dropdown mr-5">
          <button
            className="btn btn-link dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            {username}
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a
              className="dropdown-item"
              href="."
              onClick={() => {
                window.location.reload()
                return false
              }}
            >
              Logout
            </a>
          </div>
        </div>
      </Navbar>
    </Container>
  )
}

export default FixedNavbar
