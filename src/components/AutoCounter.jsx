import { useState, useEffect } from 'react'

function AutoCounter() {
  const [count, setCount] = useState(0)
  const [active, setActive] = useState(false)

  useEffect(() => {
    if (!active) return

    const intervalId = setInterval(() => {
      setCount(prev => prev + 1)
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }

  }, [active])

  const handleActive = (param) => {setActive(param)}
  const resetCount = () => {setCount(0)}

  return (
      <>
        <p>{count}</p>
        <button onClick = {() => handleActive(true)}>Start</button>
        <button onClick = {() => handleActive(false)}>Stop</button>
        <button onClick = {resetCount}>Reset</button>
      </>
  )
}

export default AutoCounter