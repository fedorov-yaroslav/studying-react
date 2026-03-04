import { useState } from 'react'

function SimpleToDo() {
  const [input, setInput ] = useState('')
  const [toDo, setToDo] = useState([])
  const updateInput = (e) => {
    setInput(e.target.value)
  }
  const addToDo = () => {
    if (input.trim() !== ''){
      setToDo([...toDo, input])
      setInput('')
    }
  }
  const clearArray = () => {
    setToDo([])
  }
  const deleteToDo = (indexToDelete) => {
    setToDo(toDo.filter((_, index) =>
      index !== indexToDelete)
    )
  }

  return (
      <>
        <input type="text" value = {input} onChange = {updateInput} onKeyDown = {(e) => {
          if (e.key === 'Enter') addToDo()} } />
        <button onClick = {addToDo}>Добавить</button>
        <ul>{
          toDo.map((current, index) =>
          <li key = {index}>{current}<button onClick = {() => deleteToDo(index)}>✖</button></li>
          )}
        </ul>
        {toDo.length !== 0 && <button onClick = {clearArray}>Очистить</button>}
        <p>{toDo.length === 0 && 'Добавьте задачу'}</p>
        <p>Всего задач: {toDo.length}</p>
      </>
  )
}

export default SimpleToDo