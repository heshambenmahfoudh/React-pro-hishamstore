import React from 'react'
import { product } from '../Data/dummy.js'
import './Product.css'

const Product = () => {
  return (
    <div className="product">
      <div className="container">
        <div className="app_product">
          {product.map(({ span_1, span_2, img, span_3, span_4 }, i) => (
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
      </div>
    </div>
  )
}

export default Product
