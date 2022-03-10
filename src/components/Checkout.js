import React, { useEffect, useState } from 'react'
import { Container, Modal } from 'react-bootstrap'
import { useHistory, useParams } from 'react-router-dom'
import BreadcrumbComponents from './BreadcrumbComponents'
import { data_obat } from '../util/api'
import './Checkout.css'
import DetailProduk from './DetailProduk'
import { useStateValue } from './StateProvider'

function Checkout() {
  const { id, name } = useParams()
  const [{ products }, dispatch] = useStateValue()
  const [nama, setNama] = useState('')
  const [alamat, setAlamat] = useState('')
  const [nomor, setNomor] = useState('')
  const [allData, setAllData] = useState([])
  const [dataProduk, setDataProduk] = useState({})
  const [totalPrice, setTotalPrice] = useState(0)
  const [pengiriman, setPengiriman] = useState(0)
  const [success, setSuccess] = useState(false)
  const [show, setShow] = useState(false)
  const [kodeUnik, setKodeUnik] = useState(
    Math.floor(Math.random() * (100 - 1) + 1)
  )
  const history = useHistory()

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const handleOnChange = (e) => {
    e.preventDefault()
    const formType = e.target.id
    if (formType === 'namaPengirim') setNama(e.target.value)
    if (formType === 'alamat') setAlamat(e.target.value)
    if (formType === 'nomorTelepon') setNomor(e.target.value)
    if (formType === 'pengiriman') setPengiriman(e.target.value)

    if (nama && alamat && nomor && pengiriman) {
      setSuccess(true)
    } else {
      setSuccess(false)
    }
  }

  const purchase = () => {
    const regex = /^\(?([0-9]{4})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/
    if (!nomor.match(regex))
      alert('Maaf, mohon untuk memasukan nomor telepon sesuai format')
    else if (success) {
      dispatch({
        type: 'ADD_PRICE',
        finalResult: totalPrice,
      })
      dispatch({
        type: 'RESET_ITEM',
        products: [],
      })
      history.push('/success')
    } else {
      alert('Pembayaran gagal, masih ada input kolom yang kosong.')
    }
  }

  const confirm = () => {
    if (
      !nama ||
      !alamat ||
      !nomor ||
      !pengiriman ||
      parseInt(pengiriman) === 0
    ) {
      setSuccess(false)
    } else {
      setSuccess(true)
    }
  }

  // Menghapus barang dari keranjang
  const deleteItem = (itemId) => {
    dispatch({
      type: 'DELETE_ITEM',
      products: itemId,
    })
    alert('Barang berhasil dihapus dari keranjang')
    setTotalPrice(totalPrice)
  }

  // Menambahkan total
  const plusTotal = (e) => {
    e.preventDefault()
    let value = e.target.id
    value = value.substring(0, value.indexOf('-'))
    const newData = allData.find((item) => item.products.id === value)
    if (newData) {
      newData.products = {
        ...newData.products,
        total: newData.products.total + 1,
      }

      setDataProduk({ ...dataProduk, total: dataProduk.total + 1 })
      setAllData(products)
    }
  }

  // Mengurangi total
  const minesTotal = (e) => {
    e.preventDefault()
    let value = e.target.id
    value = value.substring(0, value.indexOf('-'))
    const newData = allData.find((item) => item.products.id === value)
    if (newData && newData.products.total > 1) {
      newData.products = {
        ...newData.products,
        total: newData.products.total - 1,
      }
      setAllData(products)
      setDataProduk({ ...dataProduk, total: dataProduk.total - 1 })
    } else {
      alert('Maaf barang tidak bisa kurang dari 1')
    }
  }
  // Re-rendering components
  useEffect(() => {
    const infoProduk = data_obat.find(
      (produk) => produk.id === id && produk.name === name
    )
    setDataProduk(infoProduk)
    setAllData(products)

    let total = 0
    allData.forEach(
      (item) =>
        (total += parseInt(item.products.price) * parseInt(item.products.total))
    )
    setTotalPrice(total)
  }, [allData, dataProduk, pengiriman, success, totalPrice])
  return (
    <>
      <BreadcrumbComponents
        data={[
          { name: 'Obat & Vitamin', link: '/obat' },
          {
            name: 'Informasi Produk',
            link: `/obat/informasi-produk/${name}/${id}`,
          },
        ]}
        active="Checkout"
      />
      <Container className="produk">
        <div className="row  mt-4">
          <div className="col-3">
            {products.map((item) => {
              return (
                <DetailProduk
                  key={item.products.id}
                  id={item.products.id}
                  name={item.products.name}
                  img={item.products.img}
                  price={item.products.price}
                  total={item.products.total}
                  deleteItem={deleteItem}
                  plusTotal={plusTotal}
                  minesTotal={minesTotal}
                  showChange={true}
                  showDelete={true}
                />
              )
            })}
          </div>

          {/* <!-- CHECKOUT --> */}
          <div className="col-5">
            <h2>Checkout</h2>
            <form>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Nama Penerima</label>
                <input
                  type="name"
                  className="form-control form-rounded px-3"
                  id="namaPengirim"
                  aria-describedby="emailHelp"
                  placeholder="Nama Lengkap"
                  onChange={handleOnChange}
                  value={nama}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Alamat Pengiriman</label>
                <input
                  type="text"
                  className="form-control form-rounded px-3"
                  id="alamat"
                  placeholder="Alamat"
                  onChange={handleOnChange}
                  value={alamat}
                />
              </div>

              <div className="form-group">
                <label htmlFor="exampleInputTelephone">Nomor Telepon</label>
                <input
                  type="text"
                  className="form-control form-rounded px-3"
                  id="nomorTelepon"
                  aria-describedby="emailHelp"
                  placeholder="Telepon (contoh: 0852-9421-1394)"
                  onChange={handleOnChange}
                  value={nomor}
                />
              </div>
              <select
                id="pengiriman"
                className="form-control form-control-md form-rounded pengiriman px-3"
                onChange={handleOnChange}
              >
                <option value={0} defaultValue>
                  Pengiriman
                </option>
                <option id="instan" value={15000}>
                  Instan 3 Jam &nbsp; &nbsp; Rp. 15.000
                </option>
                <option id="regular" value={10000}>
                  Regular 1 Hari &nbsp; &nbsp; Rp. 10.000
                </option>
              </select>
            </form>
          </div>

          {/* <!-- PEMBAYARAN --> */}
          <div className="col-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title font-weight-bold">
                  Ringkasan Belanja
                </h5>
                <p className="card-text">
                  <table cellPadding="5">
                    <tr>
                      <td>Total Harga</td>
                      <td>Rp. {totalPrice.toLocaleString()}</td>
                    </tr>
                    <tr>
                      <td>Total Ongkir</td>
                      <td>
                        Rp.{' '}
                        {pengiriman && parseInt(pengiriman).toLocaleString()}
                      </td>
                    </tr>
                    <tr>
                      <td>Kode Unik</td>
                      <td className="mr-3">Rp. {kodeUnik}</td>
                    </tr>
                    <tr className="font-weight-bold">
                      <td>Total Tagihan</td>
                      <td>
                        Rp.{' '}
                        {(
                          totalPrice +
                          parseInt(pengiriman) +
                          parseInt(kodeUnik)
                        ).toLocaleString()}
                      </td>
                    </tr>
                  </table>
                </p>

                <hr />
                <button
                  type="submit"
                  className="btn btn-primary btn-block mx-auto w-100"
                  onClick={() => {
                    handleShow()
                    confirm()
                  }}
                >
                  Bayar
                </button>

                {/* Pembayaran */}
                <Modal
                  show={show}
                  onHide={handleClose}
                  backdrop="static"
                  keyboard={false}
                >
                  <div
                    className="modal-dialog modal-dialog-centered"
                    role="document"
                  >
                    <div className="modal-content ">
                      <Modal.Header className="mx-auto">
                        <i
                          className="fa fa-info-circle mx-auto"
                          style={{ fontSize: `60px`, color: `#3CBBA3` }}
                        ></i>
                      </Modal.Header>
                      <Modal.Body className="mx-auto">
                        Anda yakin ingin melanjutkan pembayaran?
                      </Modal.Body>
                      <Modal.Footer>
                        <button
                          type="button"
                          className="btn btn-outline-primary"
                          onClick={handleClose}
                        >
                          Tidak
                        </button>
                        <button
                          type="button"
                          className="btn btn-primary"
                          onClick={() => {
                            purchase()
                            handleClose()
                          }}
                        >
                          Lanjut
                        </button>
                      </Modal.Footer>
                    </div>
                  </div>
                </Modal>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Checkout
