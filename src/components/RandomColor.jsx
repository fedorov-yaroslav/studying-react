import { useState } from 'react'

function RandomColor() {
  const [ color, setColor ] = useState('#FFFFFF')
  const generateColor = () => {
    const randomNumber = (Math.floor(Math.random()*16777216))
    const hexColor = '#' + randomNumber.toString(16).padStart(6, '0')
    setColor(hexColor)
  }

  return (
      <>
        <button onClick= {generateColor} >Сгенерировать цвет</button>
        <div className = 'display' style={{backgroundColor: color}}></div>
        <p>{color}</p>
      </>
  )
}

export default RandomColor