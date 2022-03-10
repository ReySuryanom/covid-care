import React from 'react'
import { Button, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import sukses from '../assets/img/sukses.webp'
import bca from '../assets/img/bca.webp'
import './Success.css'
import { useStateValue } from './StateProvider'

function Success() {
  const [{ finalResult }, dispatch] = useStateValue()

  const randomGenerator = () => {
    let numbers = ``
    for (let i = 0; i < 4; i++)
      numbers += Math.floor(Math.random() * (9 - 1) + 1)
    return `CC-${numbers}`
  }

  return (
    <>
      <div className="container mt-2">
        <div className="row">
          <div className="col text-center">
            <h3 className="mb-3">Transaksi berhasil dibuat</h3>
            <Image src={sukses} alt="Success" style={{ width: '300px' }} />
            <div className="row mx-auto mt-3 w-50">
              <div className="col pt-5">
                <table cellpadding="5">
                  <tr>
                    <td>No Transaksi</td>
                    <td>:</td>
                    <td>
                      <strong>{randomGenerator()}</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Total Tagihan</td>
                    <td>:</td>
                    <td>
                      <strong>
                        Rp. {parseInt(finalResult.finalResult).toLocaleString()}
                      </strong>
                    </td>
                  </tr>
                </table>
              </div>
              <div className="col">
                <img src={bca} alt="" className="img-fluid w-50 float-left" />
                <table className="text-left" cellpadding="5">
                  <tr>
                    <td>Bank</td>
                    <td>:</td>
                    <td>
                      <strong>BCA</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>No. Rekening</td>
                    <td>:</td>
                    <td>
                      <strong>2210023692</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Penerima</td>
                    <td>:</td>
                    <td>
                      <strong>Covidcare</strong>
                    </td>
                  </tr>
                </table>
              </div>
              <hr />
              <p className="mt-3">
                Mohon lakukan pembayaran sesuai dengan nominal diatas agar
                terverifikasi otomatis, apabila pembayaran tidak berhasil
                silakan hubungi kami via email ke cs@covidcare.com
              </p>
              <Button className="btn btn-primary mx-auto">
                <Link to="/">Kembali</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Success
