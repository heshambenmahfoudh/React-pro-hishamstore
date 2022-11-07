import React from 'react'
import { worldwide } from '../Data/dummy'
import './Worldwide.css'

const Worldwide = () => {
  return (
    <div className="world">
      <div className="container">
        <div className="app_world">
          {worldwide.map(({ icon, h2, p }, i) => (
            <article key={i}>
              <span style={{ fontSize: '30px' }}>{icon}</span>
              <h2>{h2}</h2>
              <p>{p}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Worldwide
