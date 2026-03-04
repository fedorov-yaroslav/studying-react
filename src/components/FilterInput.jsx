import { useState } from 'react'

function FilterInput() {
  const list = ['Alex', 'Maria', 'John', 'Olivia', 'Max', 'Sophie', 'Daniel']
  const [input, setInput] = useState('')
  const handleInput = (e) => {
    setInput(e.target.value)
  }
  const filteredList = list.filter(item => item.toLowerCase().includes(input.toLowerCase()))
  let message =''

  switch (true){
    case filteredList.length === 0:
      message = 'Ничего не найдено'
      break
    case input.trim().length !== 0:
      message = `Найдено результатов: ${filteredList.length}`
      break
    default:
      message = ''
  }


    return (
      <>
        <input type="text" value = {input} onChange = {handleInput}/>
        <ul>{filteredList.map((item, index) =>
          <li key = {index}>{item}</li>
        )}
        </ul>
        <p>{message}</p>
      </>
  )
}

export default FilterInput