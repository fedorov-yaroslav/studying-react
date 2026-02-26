import { useState } from 'react'

function RollTheDice(){
  const [value, setValue] = useState(null);
  const action = () => {
    setValue(Math.floor(Math.random()*6)+1)
  }

  return (
      <>
        <button onClick = {action}>Бросить кубик</button>
        {value !== null && <p>🎲 Выпало: {value}</p> }
      </>
  )
}

export default RollTheDice