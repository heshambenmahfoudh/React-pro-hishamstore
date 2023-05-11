import React from 'react'
import Header from '../Component/Home/Header/Header'
import Product from '../Component/Home/Product/Product'
import Summer_pro from '../Component/Home/Summer_promo/Summer_pro'
import Summer_promo_2 from '../Component/Home/Summer_promo_2/Summer_promo_2'
import Worldwide from '../Component/Home/Worldwide/Worldwide'

const Home = () => {
  return (
    <>
      <Header />
      <Summer_pro />
      <Product />
      <Summer_promo_2 />
      <Worldwide />
    </>
  )
}

export default Home
