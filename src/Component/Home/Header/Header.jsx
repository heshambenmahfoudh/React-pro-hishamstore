import React from 'react'
import './Header.css'
import { header } from '../Data/dummy'

const Header = () => {
  const [current, setCurrent] = React.useState(0)

  const handle = () => {
    setCurrent(current === 0 ? current + 1 : 0)
  }

  React.useEffect(() => {
    const interval = setInterval(() => {
      handle()
    }, 5000)

    return () => {
      clearInterval(interval)
    }
  }, [current])

  return (
    <div className="app_slider">
      {header.map(({ h1, span, btn, bgc }, i) => (
        <div className={i === current ? 'slider active' : 'slider'} key={i}>
          {i === current && (
            <div
              className="header "
              style={{
                backgroundImage: `url(${bgc})`,
              }}
            >
              <div className="container">
                <div className="app_header">
                  <div className="header_head">
                    <h1>
                      {h1} {'  '}
                      <span>{span}</span>
                    </h1>
                    <button type="submite">{btn}</button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default Header
