import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { data_obat } from '../util/api'
import BreadcrumbComponents from './BreadcrumbComponents'
import DetailProduk from './DetailProduk'
import { useStateValue } from './StateProvider'

function InformasiProduk() {
  const [{ products }, dispatch] = useStateValue()
  const [dataProduk, setDataProduk] = useState({})
  const [allData, setAllData] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)
  const { id, name } = useParams()

  // Menambahkan barang produk ke keranjang
  const addToCart = (data) => {
    const isAlreadyAdded = products.find((item) => item.products.id === data.id)
    if (!isAlreadyAdded || products.length === 0) {
      dispatch({
        type: 'ADD_ITEM',
        products: data,
      })
      alert('Barang berhasil ditambahkan kedalam keranjang')
    } else {
      alert('Barang sudah ada dikeranjang')
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
    if (allData) {
      allData.forEach(
        (item) =>
          (total +=
            parseInt(item.products.price) * parseInt(item.products.total))
      )
    }
    setTotalPrice(total)
  }, [allData, dataProduk])

  return (
    <div>
      <BreadcrumbComponents
        data={[{ name: 'Obat & Vitamin', link: '/obat' }]}
        active="Informasi Produk"
      />

      <div className="container produk">
        <div className="row mt-4">
          <div className="col-3">
            <DetailProduk
              id={dataProduk.id}
              name={dataProduk.name}
              img={dataProduk.img}
              price={dataProduk.price}
              total={dataProduk.total}
              showChange={false}
            />
          </div>
          <div className="col" style={{ lineHeight: 1.1 }}>
            <h2 className="mb-3">{dataProduk.name}</h2>
            <h4>Deskripsi</h4>
            <p>{dataProduk.desc}</p>
            <h4>Aturan</h4>
            <p>{dataProduk.aturan}</p>
            <p></p>
          </div>
        </div>
      </div>

      <div
        className="fixed-bottom ml-auto shadow-lg footer-cart"
        style={{
          width: '50%',
          borderTopLeftRadius: '999px',
          borderBottomLeftRadius: '999px',
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col text-right pt-4 pb-3">
              <h5 className="d-inline mr-3">
                Total Rp. {parseInt(totalPrice).toLocaleString()}
              </h5>
              <button type="button" className="btn btn-primary">
                <Link
                  to={`/obat/informasi-produk/${name}/${id}/checkout`}
                  onClick={() => addToCart(dataProduk)}
                >
                  Beli Langsung
                </Link>
              </button>
              <button
                type="button"
                className="btn btn-outline-primary ml-n5"
                style={{
                  backgroundColor: 'white',
                  border: '2px solid #3CBBA3',
                  color: '#3CBBA3',
                  width: '180px',
                  padding: '5px',
                  borderRadius: '25px',
                }}
              >
                <Link
                  to={`/obat/informasi-produk/${name}/${id}/keranjang`}
                  onClick={() => addToCart(dataProduk)}
                >
                  +Keranjang
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InformasiProduk
