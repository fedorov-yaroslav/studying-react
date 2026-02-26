import { useState } from 'react'

function LikeButton(){
  const [count, setCount ] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const handleCount = () => {
    if (isLiked){
      setCount(count - 1)
    }
    else setCount(count + 1)
    setIsLiked(prev => !prev)

  }

  return (
      <>
        <button onClick = {handleCount}>👍 {count}</button>
      </>
  )
}

export default LikeButton