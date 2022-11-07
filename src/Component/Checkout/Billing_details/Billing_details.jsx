import React from 'react'
import Create_account from '../Create_account/Create_account'
import './Billing_details.css'

const Billing_details = () => {
  return (
    <div className="billing_details">
      <h2>Billing Details</h2>
      <div className="app_billing_det">
        <label>Country *</label>
        <select name="" id="">
          <option value="">Select a country</option>
          <option value="">Dominican Republic</option>
          <option value="">bangladesh</option>
          <option value="">Algeria</option>
          <option value="">Afghanistan</option>
          <option value="">Ghana</option>
          <option value="">Albania</option>
          <option value="">Bahrain</option>
          <option value="">Colombia</option>
        </select>
        <form action="">
          <div className="form_name">
            <div>
              <label htmlFor="">First Name *</label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="">Last Name *</label>
              <input type="text" />
            </div>
          </div>
          <div className="com_name_addr">
            <div>
              <label htmlFor="">Company Name</label>
              <input type="text" name="" id="" />
            </div>
            <div>
              <label htmlFor="">Address</label>
              <input type="text" placeholder="Street address" />
            </div>
            <div>
              <input
                type="text"
                placeholder="Apartment, suite, unit etc. (optional)"
              />
            </div>
          </div>
          <div className="personal_info">
            <div className="first_personal_info">
              <div>
                <label htmlFor="">State / Country </label>
                <input type="text" />
              </div>
              <div>
                <label htmlFor="">Posta / Zip *</label>
                <input type="text" />
              </div>
            </div>
            <div className="last_personal_info">
              <div>
                <label htmlFor="">Email Address *</label>
                <input type="text" />
              </div>
              <div>
                <label htmlFor="">Phone *</label>
                <input type="text" placeholder="Phone number" />
              </div>
            </div>
          </div>
          <Create_account />
        </form>
      </div>
    </div>
  )
}

export default Billing_details
