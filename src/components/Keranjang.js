import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import BreadcrumbComponents from './BreadcrumbComponents'
import DetailProduk from './DetailProduk'
import { useStateValue } from './StateProvider'

function Keranjang() {
  const [{ products }, dispatch] = useStateValue()
  const { name, id } = useParams()
  const [totalPrice, setTotalPrice] = useState(0)

  // Menghapus barang dari keranjang
  const deleteItem = (itemId) => {
    dispatch({
      type: 'DELETE_ITEM',
      products: itemId,
    })
    alert('Barang berhasil dihapus dari keranjang')
  }

  const keranjang = products.map((dataProduk) => {
    return (
      <Col className="mx-1">
        <DetailProduk
          id={dataProduk.products.id}
          name={dataProduk.products.name}
          img={dataProduk.products.img}
          price={dataProduk.products.price}
          total={dataProduk.products.total}
          deleteItem={deleteItem}
          showChange={false}
          showDelete={true}
        />
      </Col>
    )
  })

  useEffect(() => {
    let total = 0
    products.forEach(
      (item) =>
        (total += parseInt(item.products.price) * parseInt(item.products.total))
    )
    setTotalPrice(total)
  }, [products, totalPrice])

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
        active="Keranjang"
      />
      <Container>
        <h1 className="title mt-5 mb-4">Keranjang Saya</h1>
        <Row lg={4} md={3} sm={1}>
          {keranjang}
        </Row>
      </Container>

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
                <Link to={`/obat/informasi-produk/${name}/${id}/checkout`}>
                  Checkout
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
                <Link to={`/obat`}>Cari Obat</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Keranjang
