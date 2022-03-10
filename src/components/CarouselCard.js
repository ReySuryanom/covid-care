import React from 'react'
import positif_icon from '../assets/img/positif.webp'
import sembuh_icon from '../assets/img/sembuh.webp'
import meninggal_icon from '../assets/img/meninggal.webp'

function CarouselCard({ image, negara, positif, sembuh, meninggal }) {
  return (
    <div class="carousel-item active">
      <div class="col-md-4">
        <div class="card card-body">
          <div class="row">
            <div class="col-lg-6">
              <img src={image} class="flag" />
              <p>{negara}</p>
            </div>
            <div class="col-lg-6">
              <img src={positif_icon} class="icon" alt={negara} />
              <p class="positif text-left">POSITIF</p>
              <p class="total text-left">
                {parseInt(positif).toLocaleString()}
              </p>
              <img src={sembuh_icon} class="icon" alt={negara} />
              <p class="positif text-left">SEMBUH</p>
              <p class="total text-left">{parseInt(sembuh).toLocaleString()}</p>
              <img src={meninggal_icon} class="icon" alt={negara} />
              <p class="positif text-left">MENINGGAL</p>
              <p class="total text-left">
                {parseInt(meninggal).toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CarouselCard
