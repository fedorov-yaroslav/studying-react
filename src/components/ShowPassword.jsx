import { useState } from 'react'

function ShowPassword(){
  const userPassword = 'rthsr5ygd56'
  const [toHide, setToHide] = useState(true)
  const handleTohide = () => {
    setToHide(prev => !prev)
  }

  return (
      <>
        <p>Пароль: {toHide ? '*'.repeat(userPassword.length) : userPassword}</p>
        <label htmlFor='myCheckBox'>Показать пароль</label>
        <input type="checkbox" id='myCheckBox' onChange = {handleTohide}/>
      </>
      
  )
}

export default ShowPassword