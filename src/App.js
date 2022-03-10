import React from 'react'
import FixedNavbar from './components/FixedNavbar'
import HomePage from './components/HomePage'
import Forum from './components/Forum'
import ObatVitamin from './components/ObatVitamin'
import TanyaDokter from './components/TanyaDokter'
import RSRujukan from './components/RSRujukan'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Footer from './components/Footer'
import { useStateValue } from './components/StateProvider'
import Login from './components/Login'
import InformasiProduk from './components/InformasiProduk'
import Checkout from './components/Checkout'
import Success from './components/Success'
import Keranjang from './components/Keranjang'
import ChatDokter from './components/ChatDokter'

function App() {
  const [{ user }, dispatch] = useStateValue()
  return (
    <>
      {!user ? (
        <Login />
      ) : (
        <Router>
          <FixedNavbar />
          <Switch>
            <Route path="/" exact>
              <HomePage />
              <Footer />
            </Route>
            <Route path="/forum">
              <Forum />
              <Footer />
            </Route>
            <Route path="/obat" exact>
              <ObatVitamin />
              <Footer />
            </Route>
            <Route path="/tanya-dokter" exact>
              <TanyaDokter />
              <Footer />
            </Route>
            <Route path="/rs-rujukan">
              <RSRujukan />
              <Footer />
            </Route>
            <Route
              path="/obat/informasi-produk/:name/:id"
              children={<InformasiProduk />}
              exact
            ></Route>
            <Route
              path="/obat/informasi-produk/:name/:id/keranjang"
              children={<Keranjang />}
              exact
            ></Route>
            <Route
              path="/obat/informasi-produk/:name/:id/checkout"
              children={<Checkout />}
              exact
            ></Route>
            <Route path="/success" children={<Success />}></Route>
            <Route
              path="/tanya-dokter/:id/chat-dokter"
              children={<ChatDokter />}
              exact
            ></Route>
          </Switch>
        </Router>
      )}
    </>
  )
}

export default App
