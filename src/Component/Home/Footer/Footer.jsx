import React from 'react'
import Footer_company from '../Footer_company/Footer_company'
import Footer_co_right from '../Footer_co_right/Footer_co_right'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="app_footer">
          <div className="app-content">
            <h2>About UntreeStore</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              modi cumque rem recusandae quaerat at asperiores beatae saepe
              repudiandae quam rerum aspernatur dolores et ipsa obcaecati
              voluptates libero
            </p>
            <p>Join our mailing list and receive exclusives</p>
            <div className="summite">
              <input type="email" placeholder="Email address" name="" id="" />
              <input type="submit" value="Subscribe" />
            </div>
          </div>
          <Footer_company />
        </div>
        <Footer_co_right />
      </div>
    </footer>
  )
}

export default Footer
