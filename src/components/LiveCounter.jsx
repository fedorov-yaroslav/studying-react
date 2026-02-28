import { useState, useEffect } from 'react'

function LiveCounter() {
  const [count, setCount] = useState(0)

  const changeCount = (param) => {
    setCount(count + param)
  }

  useEffect(() => {
    document.title = `Count: ${count}`
  }, [count])

  return (
      <>
        <button onClick = {() => changeCount(1)} >+</button>
        <button onClick = {() => changeCount(-1)}>-</button>
        {count}
      </>
  )
}

export default LiveCounter