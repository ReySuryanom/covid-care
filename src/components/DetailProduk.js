import React from 'react'

function DetailProduk({
  name,
  id,
  img,
  price,
  total,
  deleteItem,
  plusTotal,
  minesTotal,
  showChange,
  showDelete,
}) {
  return (
    <div className="card py-4 mb-2" style={{ zIndex: '10' }}>
      <img src={img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">Rp. {parseInt(price).toLocaleString()}</p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col text-right">
            <p className="card-text font-weight-bold">
              {(showChange || showDelete) && (
                <button
                  onClick={() => deleteItem(id)}
                  style={{ border: 'none', backgroundColor: 'transparent' }}
                >
                  <i
                    className="fa fa-trash"
                    id={`delete-${id}`}
                    style={{ color: '#4F4C5F', fontSize: '24px' }}
                  ></i>
                </button>
              )}
              {showChange && (
                <button
                  onClick={minesTotal}
                  className="rounded-circle"
                  style={{
                    border: 'none',
                    backgroundColor: 'transparent',
                    outline: 'none',
                  }}
                >
                  <i
                    className="fa fa-minus-circle"
                    style={{ color: '#3CBBA3', fontSize: '24px' }}
                    id={`${id}-minus`}
                  ></i>
                </button>
              )}
              {showChange && total}
              {showChange && (
                <button
                  onClick={plusTotal}
                  className="rounded-circle"
                  style={{
                    border: 'none',
                    backgroundColor: 'transparent',
                    outline: 'none',
                  }}
                >
                  <i
                    className="fa fa-plus-circle"
                    style={{ color: '#3CBBA3', fontSize: '24px' }}
                    id={`${id}-plus`}
                  ></i>
                </button>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailProduk
