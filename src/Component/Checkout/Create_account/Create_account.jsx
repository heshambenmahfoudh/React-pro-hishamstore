import React from 'react'
import './Create_account.css'

const Create_account = () => {
  const [select, setSelect] = React.useState(false)
  const [selecttwo, setSelecttwo] = React.useState(false)
  return (
    <div className="cre_account">
      <div className="app_account">
        <div className="account_accordion">
          <span onClick={() => setSelect((prev) => !prev)}>
            <input type="checkbox" name="" id="" />
            <small>Create an account?</small>
          </span>
          {select && (
            <div className="info_create">
              <p>
                Create an account by entering the information below. If you are
                a returning customer please login at the top of the page.
              </p>
              <label htmlFor="">Account Password</label>
              <input type="password" />
            </div>
          )}
        </div>
        <div className="account_accordion">
          <span onClick={() => setSelecttwo((prev) => !prev)}>
            <input type="checkbox" name="" id="" />
            <small>ship_different_address</small>
          </span>
          <div className="info_create">
            {selecttwo && (
              <div className="app_info_create">
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
                      <input type="text" name="" />
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
                </form>
              </div>
            )}
          </div>
        </div>
        <div className="account_textarea">
          <label htmlFor="">Order Notes</label>
          <textarea placeholder="Write your notes here " name=""></textarea>
        </div>
      </div>
    </div>
  )
}

export default Create_account
