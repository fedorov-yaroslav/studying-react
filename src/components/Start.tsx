import { useState, useEffect } from 'react'

function Start() {
  const [fact, setFact] = useState('')

  const fetchFact = () => {
    fetch('https://catfact.ninja/fact')
        .then(res => res.json())
        .then(data => setFact(data.fact))
        .catch(err => setFact('Ошибка загрузки'));
  };

  useEffect(() => {
    fetchFact(); // загружаем первый раз
  }, []);

  return (
    <>
      <h1>Cat Fact</h1>
      <p>{fact}</p>
      <button onClick = {fetchFact}>New Fact</button>
    </>
  )
}

export default Start