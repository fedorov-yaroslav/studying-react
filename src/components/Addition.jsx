import { useState } from 'react';

function Addition() {
  const [a, setA] = useState();
  const [b, setB] = useState();

  const updateNumbers = () => {
    setA(Math.round(Math.random()*100))
    setB(Math.round(Math.random()*100))
    setResult('')
  }

  const [input, setInput] = useState();

  const handleInput = (e) => {
    setInput(e.target.value)
  }

  const [result, setResult] = useState();

  const compare = () => {

    if (Number(input) === a + b){
      setResult('Верно!');
      setInRow(prev => prev + 1);
      if (inRow >= inRowRecord){
        setInRowRecord(inRow + 1)
      }
    }
    else {
      setResult('Неверно');
      setInRow(0);
    }
  }

  const [inRow, setInRow] = useState(0);
  const [inRowRecord, setInRowRecord] = useState(0);

  return (
      <>
        <button onClick = {updateNumbers}>Сгенерировать пример</button>
        {a === undefined ? <p>Сгенерируйте пример</p> : <p>Определите значение выражения: {a} + {b}</p>}
        <input type="number" onChange = {handleInput} value = {input}/>
        <button onClick = {compare}>Проверить</button>
        <h2>{result}</h2>
        <p>Правильных ответов подряд: {inRow}</p>
        <p>Рекорд: {inRowRecord}</p>
      </>
  )
}

export default Addition;