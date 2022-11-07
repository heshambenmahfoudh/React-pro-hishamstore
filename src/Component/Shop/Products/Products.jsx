import React from 'react'
import Products_content from '../Products_content/Products_content'
import Products_type from '../Products_type/Products_type'
import './Products.css'

const Products = () => {
  return (
    <div className="products">
      <div className="container">
        <div className="app_pro_head">
          <div className="pro_head_title">
            <h2>Products</h2>
          </div>
          <div className="pro_head_select">
            <span>Sort by:</span>
            <select name="" id="">
              <option value="">Newest Items</option>
              <option value="">Best Selling</option>
              <option value="">Price: Descending</option>
              <option value="">Price: Ascending</option>
              <option value="">Rating(High to Low)</option>
              <option value="">Price: Descending</option>
              <option value="">Price: Ascending</option>
              <option value="">Price: Descending</option>
              <option value="">Price: Ascending</option>
              <option value="">Rating(High to Low)</option>
            </select>
          </div>
        </div>
        <div className="app_pro_content">
          <div className="pro_content_left">
            <Products_type />
          </div>
          <div className="pro_content_right">
            <Products_content />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products
