import {useState} from 'react'

function Input() {
  const [value, setValue] = useState('')
  const [numberValue, setNumberValue] = useState(0)
  const handleInput = (e) => {
    setValue(e.target.value)
  }
  const handleNumberValue = (e) => {
    setNumberValue(e.target.value)
  }
  const changeNumberValue = (param) => {
    const newNumberValue = Number(numberValue) + param
    setNumberValue(newNumberValue)
  }
  const reset = () => {
    setValue('')
  }

  return (
      <>
        <input type="text" value = {value} onChange = {handleInput}/>
        <p>{value}</p>
        <button onClick = {reset}>Очистить</button>
        <input type="number" value = {numberValue} onChange = {handleNumberValue}/>
        <button onClick = {() => changeNumberValue(1) } >+</button>
        <button onClick = {() => changeNumberValue(-1)} >-</button>
      </>
  )
}

export default Input;