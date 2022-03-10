import React, { useEffect, useState } from 'react'
import BreadcrumbComponents from './BreadcrumbComponents'
import './RSRujukan.css'
import search from '../assets/img/search.webp'
import gambar from '../assets/img/rs.png'
import { hospital_api } from '../util/api'
import { Button, Image } from 'react-bootstrap'

function RSRujukan() {
  const [kota, setKota] = useState('')
  const [nama, setNama] = useState('')
  const [rumahSakit, setRumahSakit] = useState(hospital_api)

  const handleOnChange = (e) => {
    e.preventDefault()
    const formType = e.target.id
    if (formType === 'namaRs') setNama(e.target.value)
    if (formType === 'kota') setKota(e.target.value)
    setRumahSakit(rumahSakit)
  }

  useEffect(() => {
    let newData = hospital_api
    if (kota) {
      newData = hospital_api.filter((item) =>
        item.province.toLocaleLowerCase().includes(kota.toLocaleLowerCase())
      )
    }
    if (nama) {
      newData = hospital_api.filter((item) =>
        item.name.toLocaleLowerCase().includes(nama.toLocaleLowerCase())
      )
    }
    setRumahSakit(newData)
  }, [kota, nama])

  return (
    <>
      <BreadcrumbComponents active="Rumah Sakit Rujukan" />
      <form>
        <div className="container search-field">
          <div className="row">
            <div className="col-lg-4">
              <input
                type="text"
                id="kota"
                name="search"
                className="field"
                placeholder="Kota"
                value={kota}
                onChange={handleOnChange}
              />
              <p>
                <i className="material-icons loc">location_on</i>
              </p>
            </div>

            <div className="col-lg-8">
              <input
                type="text"
                id="namaRs"
                name="search"
                className="field"
                placeholder="Nama Rumah Sakit"
                value={nama}
                onChange={handleOnChange}
              />
            </div>
          </div>
        </div>
      </form>
      <div>
        <div className="container content-lain">
          <p className="title font-weight-bold" style={{ fontSize: '30px' }}>
            RS Rujukan
          </p>
          <div className="row rs-rujukan">
            <div class="container">
              <div class="row">
                {rumahSakit.map((item) => {
                  return (
                    <div class="col-sm-6 mb-4">
                      <div class="card">
                        <img
                          class="card-img-top"
                          src={gambar}
                          alt="Rumah Sakit"
                        />
                        <div class="card-body">
                          <h5 class="card-title">{item.name}</h5>
                          <p class="card-text ml-3">
                            <table
                              cellpadding="2"
                              style={{ fontSize: `14px`, textIndent: `10px` }}
                            >
                              <tr>
                                <td class="text-center">
                                  <i class="fa fa-map-marker"></i>
                                </td>
                                <td>{item.address}</td>
                              </tr>
                              <tr>
                                <td class="text-center">
                                  <i class="fa fa-crosshairs"></i>
                                </td>
                                <td>{item.province}</td>
                              </tr>
                              <tr>
                                <td class="text-center">
                                  <i class="fa fa-phone"></i>
                                </td>
                                <td>{item.phone}</td>
                              </tr>
                              <tr>
                                <td class="text-center">
                                  <i class="fa fa-map"></i>
                                </td>
                                <td>{item.region}</td>
                              </tr>
                            </table>
                          </p>
                          <a
                            href={item.maps}
                            target="_blank"
                            rel="noreferrer"
                            class="btn btn-primary"
                          >
                            Kunjungi
                          </a>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default RSRujukan
