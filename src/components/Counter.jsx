import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0);
  const handleCount = (param) => {
    if (count + param >= 0){
      setCount(count + param)
    }
  }

  return (
      <>
        <p>{count}</p>
        <button onClick = {() => handleCount(+ 1)}>+</button>
        <button onClick = {() => handleCount(- 1)}>-</button>
        <button onClick = {() => handleCount( - count)}>Reset</button>
      </>
  )
}

export default Counter