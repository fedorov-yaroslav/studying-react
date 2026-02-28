import { useState, useEffect } from 'react'

function Timer() {
  const [time, setTime] = useState(0)
  const [active, setActive] = useState(false)
  const handleActive = (param) => {
    setActive(param)
  }
  const reset = () => {
    setTime(0)
  }

  useEffect(() => {
    let intervalId

    if (active){
      intervalId = setInterval(() => {
        setTime(prev => prev + 1)

      }, 1000)
    }

    return () => {
      clearInterval(intervalId);
    }
  }, [active])

  const seconds = time % 60
  const minutes = Math.floor(time / 60)

  return (
      <>
        <div className = 'container'>
          <p className = 'timer'>{minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}</p>
          <div>
            <button onClick = {() => {handleActive(true)}}>Start</button>
            <button onClick = {() => {handleActive(false)}}>Stop</button>
            <button onClick = {reset}>Reset</button>
          </div>
        </div>
      </>
  )
}

export default Timer