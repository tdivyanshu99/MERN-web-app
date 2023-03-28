import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'Gadget World',
  description: 'Get the Top Gadget Deals On The Go',
  keywords: 'Top, Gadget, product, device, shop, next',
}

export default Meta
