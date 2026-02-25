import {useState} from 'react';

function TrafficLight() {
  const positions = ['red', 'yellow', 'green', 'yellow']
  const [position, setPosition] = useState(0);

  const handlePosition = () => {
    setPosition(prev => (prev + 1) % 4 )
  }

  return (
      <>
        <div className = {position === 0 ? 'light red' : 'light'}></div>
        <div className = {(position === 1 || position === 3) ? 'light yellow' : 'light'}></div>
        <div className = {position === 2 ? 'light green' : 'light'}></div>
        <button onClick = {handlePosition}>Next</button>
      </>
  )
}

export default TrafficLight;