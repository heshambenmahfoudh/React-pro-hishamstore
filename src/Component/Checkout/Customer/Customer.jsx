import React from 'react'
import Billing_details from '../Billing_details/Billing_details'
import Coupon_code from '../Coupon_code/Coupon_code'
import './Customer.css'

const Customer = () => {
  return (
    <div className="customer">
      <div className="container">
        <div className="app_customer">
          <div className="cus_link">
            <p>
              Returning customer?
              <a href="#"> Click here</a> to login
            </p>
          </div>
          <div className="billing_coupon">
            <Billing_details />
            <Coupon_code />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Customer
