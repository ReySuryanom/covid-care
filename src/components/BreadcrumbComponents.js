import React from 'react'
import { Breadcrumb } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function BreadcrumbComponents({ active, data }) {
  let listOfItem
  if (data) {
    listOfItem = data.map((item, index) => {
      return (
        <Breadcrumb.Item key={index}>
          <Link to={item.link}>{item.name}</Link>
        </Breadcrumb.Item>
      )
    })
  }
  return (
    <Breadcrumb>
      <Breadcrumb.Item>
        <Link to="/">Home</Link>
      </Breadcrumb.Item>
      {listOfItem}
      <Breadcrumb.Item active>{active}</Breadcrumb.Item>
    </Breadcrumb>
  )
}

export default BreadcrumbComponents
