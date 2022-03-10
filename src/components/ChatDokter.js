import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { data_dokter_1 } from '../util/api'
import { data_dokter_2 } from '../util/api'
import BreadcrumbComponents from './BreadcrumbComponents'
import './ChatDokter.css'

function ChatDokter() {
  const { id } = useParams()
  const [dokterID, setdokterID] = useState()
  useEffect(() => {
    //   Set up data dokter
    let dokter = data_dokter_1.find((data) => id === data.id)
    dokter = dokter || data_dokter_2.find((data) => id === data.id)
    setdokterID(dokter)
  }, [id])
  return (
    <>
      <BreadcrumbComponents
        data={[{ name: 'Tanya Dokter', link: '/tanya-dokter' }]}
        active="Chat Dokter"
      />
      <div className="container chatDokter">
        <div className="row">
          {/* Kolom Data Dokter */}
          <div className="col-lg-4">
            <div className="card rounded-lg">
              <img
                src={dokterID && dokterID.img}
                className="card-img-top"
                alt={dokterID && dokterID.name}
              />
              <div className="card-body">
                <h4 className="card-title font-weight-bold">
                  {dokterID && dokterID.name}
                </h4>
                <p className="card-text">{dokterID && dokterID.type}</p>
                <span className="card-text">
                  <i className="fa fa-star text-warning" />{' '}
                  {`${dokterID && dokterID.rate} (${
                    dokterID && dokterID.total
                  })`}
                  <span className="card-text ml-3">
                    <i className="fa fa-briefcase" />{' '}
                    {`${dokterID && dokterID.exp} Tahun`}
                  </span>
                </span>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <i className="fa fa-graduation-cap mr-3" /> Universitas Yarsi
                </li>
                <li className="list-group-item">
                  <i className="fa fa-hospital-o mr-4" /> RSPAD Gatot Subroto
                </li>
                <li className="list-group-item">
                  <i className="fa fa-address-card mr-3" /> 3111100118185055
                </li>
              </ul>
            </div>
          </div>
          {/* Kolom Chat */}
          <div className="col-lg-8 shadow-sm">
            <div className="row p-3">
              <div className="col p-2 border-bottom">
                <img
                  src={dokterID && dokterID.img}
                  className="mr-3 img-chat radius-rounded float-left"
                  alt="dokter"
                />
                <p className="mt-2 font-weight-bold">
                  {dokterID && dokterID.name}
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="container">
                  <div className="messaging">
                    <div className="inbox_msg">
                      {/* Kolom chat to chat */}
                      <div className="mesgs">
                        <div className="msg_history">
                          <div className="incoming_msg">
                            <div className="incoming_msg_img">
                              {' '}
                              <img
                                src={dokterID && dokterID.img}
                                alt="sunil"
                                className="radius-rounded"
                              />{' '}
                            </div>
                            <div className="received_msg">
                              <div className="received_withd_msg">
                                <p>Hai ada yang bisa dibantu ?</p>
                                <span className="time_date">
                                  {' '}
                                  11:01 AM | June 9
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="outgoing_msg">
                            <div className="sent_msg">
                              <p>
                                Begini dok, saya ingin menanyakan tentang
                                kesehatan saya
                              </p>
                              <span className="time_date">
                                {' '}
                                11:01 AM | June 9
                              </span>
                            </div>
                          </div>
                          <div className="incoming_msg">
                            <div className="incoming_msg_img">
                              {' '}
                              <img
                                src={dokterID && dokterID.img}
                                alt={dokterID && dokterID.name}
                                className="radius-rounded"
                              />{' '}
                            </div>
                            <div className="received_msg">
                              <div className="received_withd_msg">
                                <p>Silahkan langsung pertanyaannya saja</p>
                                <span className="time_date">
                                  {' '}
                                  11:01 AM | Yesterday
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="outgoing_msg">
                            <div className="sent_msg">
                              <p>
                                Saya mengalami panas yang tinggi dan kepala
                                pusing disertai muntah - muntah, apakah itu
                                temasuk tan-tanda terkena covid ?
                              </p>
                              <span className="time_date">
                                {' '}
                                11:01 AM | Today
                              </span>
                            </div>
                          </div>
                          <div className="incoming_msg">
                            <div className="incoming_msg_img">
                              {' '}
                              <img
                                src={dokterID && dokterID.img}
                                alt={dokterID && dokterID.name}
                                className="radius-rounded"
                              />{' '}
                            </div>
                            <div className="received_msg">
                              <div className="received_withd_msg">
                                <p>
                                  Masing-masing orang memiliki respons yang
                                  berbeda terhadap COVID-19. Sebagian besar
                                  orang yang terpapar virus ini akan mengalami
                                  gejala ringan hingga sedang, dan akan pulih
                                  tanpa perlu dirawat di rumah sakit. Gejala
                                  yang paling umum: 1. demam 2. batuk kering 3.
                                  kelelahan Gejala yang sedikit tidak umum: 1.
                                  rasa tidak nyaman dan nyeri 2. nyeri
                                  tenggorokan 3. diare 4. konjungtivitis (mata
                                  merah) 5. sakit kepala 6. hilangnya indera
                                  perasa atau penciuman 7. ruam pada kulit, atau
                                  perubahan warna pada jari tangan atau jari
                                  kaki Gejala serius: 1. kesulitan bernapas atau
                                  sesak napas 2. nyeri dada atau rasa tertekan
                                  pada dada 3. hilangnya kemampuan berbicara
                                  atau bergerak Dari keluhan yang anda maksud
                                  mungkin itu adalah gejala yang tidak umum.
                                  Sebaiknya anda tidak keluar rumah terlebih
                                  dahulu dalam jangka waktu 1 minggu sampai 2
                                  minggu sampai keadaan anda membaik dan
                                  konsumsi makanan - makanan yang penuh vitamin
                                  &amp; protein
                                </p>
                                <span className="time_date">
                                  {' '}
                                  11:01 AM | Today
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Tulis Pesan */}
                        <div className="type_msg mb-2">
                          <div className="input_msg_write">
                            <input
                              type="text"
                              className="write_msg"
                              placeholder="Tulis pesanmu disini ... "
                            />
                            <button className="msg_send_btn" type="button">
                              <i
                                className="fa fa-paper-plane-o"
                                aria-hidden="true"
                              />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-lg-4" />
            <div className="col-lg-8">
              <h4>MOHON TAATI ATURAN BERIKUT :</h4>
              <p>
                1. Gunakan kata - kata yang sopan dan mudah dimengerti dan
                langsung ke poin permasalahan
                <br /> 2. Dilarang membahas hal lain selain tentang penyakit
                atau keluhan yang anda derita. Dokter berhak tidak membalas chat
                anda jika terindikasi tidak penting.
                <br />
                3. Dilarang spam chat atau chat yang tidak wajar, jika
                terindikasi maka akun anda akan di
                <br />
                blokir dari website ini.
                <br />
                4. Privasi anda terjamin, kami tidak akan menyebarkan riwayat
                chat ini kepada siapapun
                <br />
                5. Untuk mengakhiri konsulltasi, cukup ketik “Terima Kasih” dan
                berikan rating pada dokter tersebut.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ChatDokter
