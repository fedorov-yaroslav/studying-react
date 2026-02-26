import { useState } from 'react'

function Seasons (){
  const [currentSeason, setCurrentSeason] = useState('')
  const handleSeason = (param) => {
    setCurrentSeason(param)
  }

  return (
      <>
        <button onClick = {() => {handleSeason('Зима')}}>Зима</button>
        <button onClick = {() => {handleSeason('Лето')}}>Лето</button>
        {currentSeason !== '' && <p>Сейчас {currentSeason}</p>}
      </>
  )
}

export default Seasons