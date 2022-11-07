import React from 'react'
import { contact_form } from '../Data/dummy'
import './Contact_form.css'

const Contact_form = () => {
  return (
    <div className="contacts">
      <div className="container">
        <div className="app_contact">
          <form action="" className="app_con_form">
            <div className="form_email_name">
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
            </div>
            <input type="text" placeholder="Subject" />
            <textarea
              placeholder="Message"
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>
            <input className="submit" type="submit" value="send message " />
          </form>
          <div className="app_con_loca">
            {contact_form.map(({ icon, h3, p, p_2 }, i) => (
              <div className="loc_ch" key={i}>
                <h2 className="ch_icn">{icon}</h2>
                <div className="ch_content">
                  <h3>{h3}</h3>
                  <p>{p}</p>
                  <p>{p_2}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact_form
