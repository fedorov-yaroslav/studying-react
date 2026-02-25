import {useState} from 'react'

function GuessNumber() {
  const [input, setInput] = useState()
  const handleInput = (e) => {
    setInput(e.target.value)
  }

  const [attempts, setAttempts] = useState(0);
  const [computerNumber, setComputerNumber] = useState();
  const [result, setResult] = useState('');

  const check = () => {
    if (computerNumber === Number(input)){
      setResult('Вы угадали!')
    }
    else {
      setAttempts(prev => prev + 1)
      setResult('Вы не угадали.');
      setAttempts(prev => prev + 1)
    }
    if (attempts >= 3){
      setResult(`Вы не угадали с 3 попыток. Я загадал ${computerNumber}`);
      setIsStarted(false);
    }
  }

  const [isStarted, setIsStarted] = useState(false);

  const start = () => {
    setIsStarted(true);
    setAttempts(0);
    setComputerNumber(Math.round(Math.random()*9+1));
    setResult('')
  }

  return (
      <>
        <button onClick = {start}>Начать игру</button>
        {isStarted && <p>Я загадал число от 1 до 10</p>}
        {isStarted && <p>Угадайте с 3 попыток</p>}
        {isStarted && <input type="number" value = {input} onChange = {handleInput}/>}
        {isStarted && <button onClick = {check}>Проверить</button>}
        <p>{result}</p>

      </>
  )
}

export default GuessNumber;