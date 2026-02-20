import { useState } from 'react';

function LiveInput() {
  const [text, setText] = useState('')
  const handleText = (e) => {setText(e.target.value)}

  return (
      <>
        <input
            type="text"
            value = {text}
            onChange = {handleText}
            placeholder='Введите текст'
        />
        <p>{text}</p>
      </>
  )
}

export default LiveInput;