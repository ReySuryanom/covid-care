import React from 'react'
import Header from './Header'
import CegahVirus from './CegahVirus'
import Testimonial from './Testimonial'
import WorldVirus from './WorldVirus'
import CountryVirus from './CountryVirus'

function HomePage() {
  return (
    <React.Fragment>
      <Header />
      <WorldVirus />
      <CegahVirus />
      <Testimonial />
    </React.Fragment>
  )
}

export default HomePage
