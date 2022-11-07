import React from 'react'
import { BsFolderMinus, BsFolderPlus } from 'react-icons/bs'
import { accordion } from '../Data/dummy'
import './Accordion.css'

const Accordion = () => {
  const [drop, setDrop] = React.useState()
  const Toggle = (i) => {
    drop === i ? setDrop(!i) : setDrop(i)
  }

  return (
    <div className="accordion">
      <div className="container">
        <h2>Accordion</h2>
        {accordion.map(({ icon, h2, p_1, p_2 }, i) => (
          <div className="app_accordion" key={i}>
            <button
              className={drop === i ? ' btn active' : 'btn'}
              onClick={() => Toggle(i)}
            >
              <span style={{ fontSize: '15px' }}>
                {' '}
                {drop === i ? (
                  <BsFolderMinus style={{ color: '#fff' }} />
                ) : (
                  <BsFolderPlus style={{ color: '#000' }} />
                )}
              </span>
              <h2>{h2}</h2>
            </button>
            <div
              className={
                drop === i ? 'accordion_content active' : 'accordion_content'
              }
            >
              <p>{p_1}</p>
              <p>{p_2}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Accordion
