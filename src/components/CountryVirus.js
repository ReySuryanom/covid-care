import React, { useEffect, useState } from 'react'
import API from '../util/api'
import CarouselCard from './CarouselCard'
import './CountryVirus.css'
import indo from '../assets/img/indo.png'
import filipina from '../assets/img/filipina.png'
import brunei from '../assets/img/brunei.png'
import singapura from '../assets/img/singapura.png'
import thailand from '../assets/img/thailand.png'
import malay from '../assets/img/malay.png'

function CoutryVirus() {
  const [dataAPI, setDataAPI] = useState()
  const [IDN, setIDN] = useState({})
  const [MY, setMY] = useState({})
  const [PH, setPH] = useState({})
  const [THAI, setTHAI] = useState({})
  const [BRU, setBRU] = useState({})
  const [SI, setSI] = useState({})

  useEffect(() => {
    async function getData() {
      const response = await API.get('summary')
      setDataAPI(response.data)
    }
    getData()

    // Set Data...
    // setIDN(dataAPI.find((item) => item.Countries === 'Indonesia'))
    console.log(dataAPI, IDN)
    // setMY()
    // setPH()
    // setTHAI()
    // setBRU()
    // setSI()
  }, [])

  return (
    <div className="container text-center my-3 ">
      <div className="row mx-auto my-auto">
        <div
          id="recipeCarousel"
          className="carousel slide w-100"
          data-ride="carousel"
        >
          <div className="carousel-inner w-100" role="listbox">
            {/* <CarouselCard
              image={indo}
              negara={}
              positif={}
              sembuh={}
              meninggal={}
            /> */}
            {/* <CarouselCard
              image={malay}
              negara={}
              positif={}
              sembuh={}
              meninggal={}
            />
            <CarouselCard
              image={singapura}
              negara={}
              positif={}
              sembuh={}
              meninggal={}
            />
            <CarouselCard
              image={thailand}
              negara={}
              positif={}
              sembuh={}
              meninggal={}
            />
            <CarouselCard
              image={brunei}
              negara={}
              positif={}
              sembuh={}
              meninggal={}
            />
            <CarouselCard
              image={filipina}
              negara={}
              positif={}
              sembuh={}
              meninggal={}
            /> */}
          </div>
          <a
            className="carousel-control-prev w-auto"
            href="#recipeCarousel"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon bg-dark border border-dark rounded-circle"
              aria-hidden="true"
            />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next w-auto"
            href="#recipeCarousel"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon bg-dark border border-dark rounded-circle"
              aria-hidden="true"
            />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default CoutryVirus
