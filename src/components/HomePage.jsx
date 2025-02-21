import React from 'react'
import SellectedPage from './SellectedPage'
import SearchPage from './SearchPage'
import ProductsPage from './ProductsPage'
import FooterPage from './FooterPage'

const HomePage = () => {
  return (
    <div>
        <SellectedPage/>
        <SearchPage/>
        <ProductsPage/>
        <FooterPage/>
    </div>
  )
}

export default HomePage