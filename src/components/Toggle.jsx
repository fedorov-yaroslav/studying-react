import { useState } from 'react'

function Toggle() {
  const output = 'Как уничтожить дискету: 4 шагов (с иллюстрациями)'
  const [toShow, setToShow] = useState(true)
  const handleToShow = () => {
    setToShow(prev => !prev)
  }

  return (
      <>
        <p>{toShow ? 'Как уничтожить дискету: 4 шагов (с иллюстрациями)' : ''}</p>
        <button onClick = {handleToShow}>Показать/Скрыть текст</button>
      </>
  )
}

export default Toggle