import { useState } from 'react'

function FilterInput() {
  const list = ['Alex', 'Maria', 'John', 'Olivia', 'Max', 'Sophie', 'Daniel']
  const [input, setInput] = useState('')
  const handleInput = (e) => {
    setInput(e.target.value)
  }
  const filteredList = list.filter(item => item.toLowerCase().includes(input.toLowerCase()))
  return (
      <>
        <input type="text" value = {input} onChange = {handleInput}/>
        <ul>{filteredList.map((item, index) =>
          <li key = {index}>{item}</li>
        )}
        </ul>
        <p>{}</p>
      </>
  )
}

export default FilterInput