import { useState } from 'react';

function Toggle() {
  const [isVisible, setIsVisible] = useState(true)
  const handleIsVisible = () => {setIsVisible(prev => !prev)}
  return (
      <>
        {isVisible && <p>Мой текст</p>}
        <button onClick = {handleIsVisible}>{isVisible ? 'Скрыть' : 'Показать'}</button>
      </>
  )
}

export default Toggle;