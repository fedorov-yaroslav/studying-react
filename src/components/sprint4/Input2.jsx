import { useState } from 'react'

function Input2() {
  const [userName, setUserName] = useState('')
  const [userSurname, setUserSurname] = useState('')
  const [textAreaValue, setTextAreaValue] = useState('')
  const [currency, setCurrency] = useState()

  const handleUserName = (e) => {
    setUserName(e.target.value)
  }
  const handleUserSurname = (e) => {
    setUserSurname(e.target.value)
  }

  const handleTextAreaValue = (e) => {
    const newText = e.target.value
    if (newText.length <= 50){
      setTextAreaValue(newText)
    }
  }

  const handleCurrency = (e) => {
    setCurrency(e.target.value)
  }

  const currencyShow = String(currency).toUpperCase();

  return (
      <>
        <input type="text" placeholder = 'Введите имя' onChange = {handleUserName} value = {userName}/>
        <input type="text" placeholder = 'Введите фамилию' onChange = {handleUserSurname} value = {userSurname}/>
        <p>Ваше имя: {userName} {userSurname}</p>
        <button onClick = {() => {
          setUserName('')
          setUserSurname('')
        }}>Сбросить форму</button>
        <br/>
        <textarea name="" id="" cols="30" rows="10" value = {textAreaValue} onChange = {handleTextAreaValue}></textarea>
        <p>В textarea {textAreaValue.length} символов</p>
        <p>Осталось символов: {50 - textAreaValue.length}</p>
        <select name="" id="" onChange = {handleCurrency} value = {currency} >
          <option value="usd" >USD</option>
          <option value="eur" >EUR</option>
          <option value="rub" >RUB</option>
        </select>
        {currency && <p>Вы выбрали {currencyShow}</p>}
      </>
  )
}

export default Input2