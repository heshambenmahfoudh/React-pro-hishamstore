import React from 'react'
import './Cart_product.css'
import jacket1min from '../../aseets/products/jacket1min.jpg'
import bottoms1min from '../../aseets/products/bottoms1min.jpg'
import Coupon_product from '../Coupon_product/Coupon_product'

const Cart_product = () => {
  const [number, setNumber] = React.useState(0)
  const [numbers, setNumbers] = React.useState(0)
  return (
    <div className="cart_pro">
      <div className="container">
        <div className="app_pro">
          <table className="table_pro">
            <thead>
              <tr>
                <td>Image</td>
                <td>Product</td>
                <td>Price</td>
                <td>Quantity</td>
                <td>Total</td>
                <td>Remove</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img src={jacket1min} alt="" />
                </td>
                <td>Top Up T-Shirt</td>
                <td>$49.00</td>
                <td>
                  <div>
                    <button onClick={() => setNumber((prev) => prev - 1)}>
                      -
                    </button>
                    <span>{number}</span>
                    <button onClick={() => setNumber((prev) => prev + 1)}>
                      +
                    </button>
                  </div>
                </td>
                <td>$49.00</td>
                <td>
                  <span>x</span>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={bottoms1min} alt="" />
                </td>
                <td>Polo Shirt</td>
                <td>$49.00</td>
                <td>
                  <div>
                    <button onClick={() => setNumbers((prev) => prev - 1)}>
                      -
                    </button>
                    <span>{numbers}</span>
                    <button onClick={() => setNumbers((prev) => prev + 1)}>
                      +
                    </button>
                  </div>
                </td>
                <td>$49.00</td>
                <td>
                  <span>x</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <Coupon_product />
      </div>
    </div>
  )
}

export default Cart_product
