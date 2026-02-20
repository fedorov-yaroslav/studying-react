import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0);
  const Increase = () => { setCount(prev => prev + 1)}
  const Decrease = () => {
    if (count > 0){
      setCount(prev => prev - 1)}
  }
  const Reset = () => {setCount(0)}

  return (
      <>
        <p>{count}</p>
        <button onClick = {Increase}>+1</button>
        <button onClick = {Decrease}>-1</button>
        <button onClick = {Reset} >reset</button>
      </>
  )
}

export default Counter;