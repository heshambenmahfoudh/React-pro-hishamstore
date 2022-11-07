import React from 'react'
import { slidar } from '../Data/dummy'
import './Slidar.css'

const Slidar = () => {
  const [selected, setSelected] = React.useState(0)

  const slide_length = slidar.length

  const handle = () => {
    setSelected(selected === slide_length - 1 ? 0 : selected + 1)
  }

  React.useEffect(() => {
    const inter = setInterval(() => {
      handle()
    }, 3000)
    return () => clearInterval(inter)
  }, [selected])
  console.log(selected)

  return (
    <div className="slidar">
      <div className="container">
        <div className="slidar_head">
          <h2>Slider</h2>
        </div>
        <div className="app_slidar">
          {slidar.map(({ img, h2, p }, i) => (
            <div className={i === selected ? 'slide active' : ' slide'} key={i}>
              {i === selected && (
                <>
                  <div className="img_slide">
                    <img src={img} alt="" />
                  </div>
                  <div className="content_slide">
                    <h2>{h2}</h2>
                    <p>{p}</p>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Slidar
