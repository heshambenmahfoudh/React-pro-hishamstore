import React from 'react'
import { products_content } from '../Data/dummy'
import './Products_content.css'

const Products_content = () => {
  return (
    <div className="app_pro_content_right">
      {products_content.map(({ span_1, span_2, img, span_3, span_4 }, i) => (
        <article key={i}>
          <div className="pro_img">
            <span>{span_1}</span>
            <span>{span_2}</span>
            <img src={img} alt="" />
          </div>
          <div className="pro_title">
            <span>{span_3}</span>
            <span>{span_4}</span>
          </div>
        </article>
      ))}
    </div>
  )
}

export default Products_content
